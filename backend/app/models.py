import datetime
from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    google_id = Column(String(255), unique=True, index=True, nullable=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    role = Column(String(50), default="citizen") # citizen, rescue_commander, squad_operator
    avatar_url = Column(Text, nullable=True)
    phone = Column(String(50), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class EnvironmentalLog(Base):
    __tablename__ = "environmental_logs"

    id = Column(Integer, primary_key=True, index=True)
    station_id = Column(String(100), index=True)
    station_name = Column(String(255), default="Golaghat Station")
    district = Column(String(100), default="Golaghat")
    source = Column(String(50), nullable=False) # IMD, CWC, Open-Meteo
    rainfall_mm = Column(Float, default=0.0)
    water_level_m = Column(Float, default=0.0)
    danger_level_m = Column(Float, default=94.0)
    status = Column(String(50), default="fresh") # fresh, delayed
    observed_at = Column(DateTime, default=datetime.datetime.utcnow)
    fetched_at = Column(DateTime, default=datetime.datetime.utcnow)

class SOSRequest(Base):
    __tablename__ = "sos_requests"

    id = Column(Integer, primary_key=True, index=True)
    ticket_code = Column(String(50), unique=True, index=True, nullable=False) # e.g. SOS-1088
    citizen_name = Column(String(255), default="Ravi Das")
    citizen_phone = Column(String(50), default="+91 98765 43210")
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    location_name = Column(String(255), default="Golaghat Ward 4")
    district = Column(String(100), default="Golaghat")
    headcount = Column(Integer, default=1)
    children_count = Column(Integer, default=0)
    medical_emergency = Column(Boolean, default=False)
    water_level_ft = Column(Float, default=3.0)
    hazard_details = Column(Text, nullable=True)
    image_url = Column(Text, nullable=True)
    
    # Deterministic Triage Fields
    priority_score = Column(Integer, default=50) # 0 to 100
    priority_level = Column(String(20), default="P2") # P1 (Critical), P2 (High), P3 (Moderate)
    status = Column(String(50), default="PENDING") # PENDING, APPROVED, DISPATCHED, RESOLVED
    
    assigned_team_id = Column(Integer, ForeignKey("rescue_teams.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    assigned_team = relationship("RescueTeam", back_populates="sos_requests")

class RescueTeam(Base):
    __tablename__ = "rescue_teams"

    id = Column(Integer, primary_key=True, index=True)
    code_name = Column(String(50), unique=True, index=True, nullable=False) # e.g. SD-04
    unit_name = Column(String(255), default="NDRF Speedboat Unit 4")
    base_lat = Column(Float, nullable=False)
    base_lng = Column(Float, nullable=False)
    vehicle_type = Column(String(100), default="Motorized Speedboat")
    capacity = Column(Integer, default=10)
    medical_capable = Column(Boolean, default=True)
    is_available = Column(Boolean, default=True)
    current_status = Column(String(100), default="READY_AT_BASE")

    sos_requests = relationship("SOSRequest", back_populates="assigned_team")

class Shelter(Base):
    __tablename__ = "shelters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    capacity = Column(Integer, default=500)
    current_occupancy = Column(Integer, default=120)
    district = Column(String(100), default="Golaghat")
    contact_phone = Column(String(50), default="+91 3774 280100")
    status = Column(String(50), default="ACTIVE")

class RescueMission(Base):
    __tablename__ = "rescue_missions"

    id = Column(Integer, primary_key=True, index=True)
    sos_id = Column(Integer, ForeignKey("sos_requests.id"), nullable=False)
    team_id = Column(Integer, ForeignKey("rescue_teams.id"), nullable=False)
    dispatched_at = Column(DateTime, default=datetime.datetime.utcnow)
    eta_minutes = Column(Integer, default=12)
    status = Column(String(50), default="EN_ROUTE")

class RiskPrediction(Base):
    __tablename__ = "risk_predictions"

    id = Column(Integer, primary_key=True, index=True)
    district = Column(String(100), default="Golaghat")
    risk_score = Column(Float, default=0.85) # 0.0 to 1.0
    risk_level = Column(String(20), default="HIGH") # LOW, MEDIUM, HIGH, CRITICAL
    confidence = Column(Float, default=0.91)
    factors_json = Column(Text, nullable=True)
    predicted_at = Column(DateTime, default=datetime.datetime.utcnow)

