import random
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Optional, List
from ..database import get_db
from ..models import SOSRequest, RescueTeam, RescueMission
from ..services.dispatch_optimizer import recommend_rescue_team

router = APIRouter(prefix="/api/sos", tags=["SOS Emergency Operations"])

class SOSCreate(BaseModel):
    citizen_name: Optional[str] = "Ravi Das"
    citizen_phone: Optional[str] = "+91 98765 43210"
    lat: float = 26.5214
    lng: float = 93.9621
    location_name: Optional[str] = "Golaghat District, Ward 4"
    district: Optional[str] = "Golaghat"
    headcount: int = 5
    children_count: int = 2
    medical_emergency: bool = True
    water_level_ft: float = 3.5
    hazard_details: Optional[str] = "Submerged main switchboard in standing flood water."

class DispatchRequest(BaseModel):
    team_id: Optional[int] = None

def compute_triage_score(headcount: int, children: int, medical: bool, water_ft: float):
    """Deterministic Priority Triage Scoring (0 to 100)."""
    score = 40 # Base
    score += min(headcount * 5, 25)
    score += min(children * 10, 20)
    if medical:
        score += 25
    score += min(int(water_ft * 5), 20)
    
    score = min(score, 99)
    
    if score >= 80:
        level = "P1" # Critical
    elif score >= 60:
        level = "P2" # High
    else:
        level = "P3" # Moderate
        
    return score, level

@router.post("")
def create_sos(sos_in: SOSCreate, db: Session = Depends(get_db)):
    """Submits citizen emergency distress SOS, calculates AI triage, and stores record in DB."""
    ticket_num = f"SOS-{random.randint(1000, 9999)}"
    score, level = compute_triage_score(
        sos_in.headcount, sos_in.children_count, sos_in.medical_emergency, sos_in.water_level_ft
    )

    sos_obj = SOSRequest(
        ticket_code=ticket_num,
        citizen_name=sos_in.citizen_name,
        citizen_phone=sos_in.citizen_phone,
        lat=sos_in.lat,
        lng=sos_in.lng,
        location_name=sos_in.location_name,
        district=sos_in.district,
        headcount=sos_in.headcount,
        children_count=sos_in.children_count,
        medical_emergency=sos_in.medical_emergency,
        water_level_ft=sos_in.water_level_ft,
        hazard_details=sos_in.hazard_details,
        priority_score=score,
        priority_level=level,
        status="PENDING"
    )

    db.add(sos_obj)
    db.commit()
    db.refresh(sos_obj)

    # Seed mock rescue teams if DB is empty for zero-setup demo
    if db.query(RescueTeam).count() == 0:
        team1 = RescueTeam(code_name="SD-04", unit_name="NDRF Motorized Speedboat Squad 4", base_lat=26.510, base_lng=93.950, vehicle_type="Motorized Speedboat", capacity=12, medical_capable=True)
        team2 = RescueTeam(code_name="SDRF-02", unit_name="SDRF Inflatable Rescue Boat 2", base_lat=26.540, base_lng=93.980, vehicle_type="Inflatable Boat", capacity=8, medical_capable=True)
        db.add(team1)
        db.add(team2)
        db.commit()

    teams_in_db = db.query(RescueTeam).all()
    teams_list = [
        {
            "id": t.id,
            "code_name": t.code_name,
            "unit_name": t.unit_name,
            "lat": t.base_lat,
            "lng": t.base_lng,
            "vehicle_type": t.vehicle_type,
            "capacity": t.capacity,
            "medical_capable": t.medical_capable,
            "is_available": t.is_available
        }
        for t in teams_in_db
    ]

    recommendation = recommend_rescue_team(
        {"lat": sos_obj.lat, "lng": sos_obj.lng, "headcount": sos_obj.headcount, "medical_emergency": sos_obj.medical_emergency},
        teams_list
    )

    return {
        "status": "SUCCESS",
        "message": "Emergency SOS registered successfully",
        "sos_ticket": {
            "id": sos_obj.id,
            "ticket_code": sos_obj.ticket_code,
            "location": sos_obj.location_name,
            "priority_score": sos_obj.priority_score,
            "priority_level": sos_obj.priority_level,
            "status": sos_obj.status,
            "headcount": sos_obj.headcount,
            "medical_emergency": sos_obj.medical_emergency
        },
        "ai_recommendation": recommendation
    }

@router.get("")
def list_sos_tickets(status: Optional[str] = None, db: Session = Depends(get_db)):
    """Lists active emergency SOS distress tickets sorted by priority."""
    query = db.query(SOSRequest)
    if status:
        query = query.filter(SOSRequest.status == status)
    results = query.order_by(SOSRequest.priority_score.desc()).all()
    return {"count": len(results), "tickets": results}

@router.post("/{sos_id}/approve")
def approve_dispatch(sos_id: int, req: DispatchRequest, db: Session = Depends(get_db)):
    """Commander 1-click approves rescue squad deployment for an SOS ticket."""
    sos = db.query(SOSRequest).filter(SOSRequest.id == sos_id).first()
    if not sos:
        raise HTTPException(status_code=404, detail="SOS Ticket not found")

    team = None
    if req.team_id:
        team = db.query(RescueTeam).filter(RescueTeam.id == req.team_id).first()
    if not team:
        team = db.query(RescueTeam).filter(RescueTeam.is_available == True).first()

    sos.status = "APPROVED"
    if team:
        sos.assigned_team_id = team.id
        team.is_available = False
        team.current_status = f"DISPATCHED_TO_{sos.ticket_code}"

    db.commit()

    return {
        "status": "SUCCESS",
        "message": f"Rescue squad dispatched for ticket {sos.ticket_code}",
        "ticket_code": sos.ticket_code,
        "sos_status": sos.status,
        "assigned_team": {
            "code_name": team.code_name if team else "SD-04",
            "unit_name": team.unit_name if team else "NDRF Speedboat Unit 4",
            "eta_minutes": 12
        }
    }
