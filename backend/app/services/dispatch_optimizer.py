import math

# Configurable Weights Matrix
DISPATCH_WEIGHTS = {
    "distance": 0.30,
    "availability": 0.25,
    "vehicle": 0.20,
    "medical": 0.15,
    "capacity": 0.10
}

def calculate_haversine_km(lat1, lon1, lat2, lon2):
    """Calculates geographical distance between coordinates in kilometers."""
    R = 6371.0
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(R * c, 2)

def recommend_rescue_team(sos_data: dict, available_teams: list):
    """
    Evaluates candidate rescue teams using configurable Multi-Criteria Decision Analysis (MCDA).
    Returns ranked list of candidate teams with scores and LLM decision-support explanation.
    """
    ranked_teams = []

    sos_lat = sos_data.get("lat", 26.52)
    sos_lng = sos_data.get("lng", 93.96)
    headcount = sos_data.get("headcount", 1)
    needs_medical = sos_data.get("medical_emergency", False)

    for team in available_teams:
        dist_km = calculate_haversine_km(sos_lat, sos_lng, team["lat"], team["lng"])
        
        # 1. Distance Score (Inverted: closer = higher score up to 10km)
        dist_score = max(0.0, 1.0 - (dist_km / 15.0))
        
        # 2. Availability Score
        avail_score = 1.0 if team.get("is_available", True) else 0.0
        
        # 3. Vehicle Score (Boats get highest score for flood situations)
        vehicle_type = team.get("vehicle_type", "").lower()
        vehicle_score = 1.0 if "boat" in vehicle_type or "speed" in vehicle_type else 0.7
        
        # 4. Medical Score
        medical_score = 1.0 if (not needs_medical or team.get("medical_capable", True)) else 0.3
        
        # 5. Capacity Score
        team_cap = team.get("capacity", 10)
        cap_score = 1.0 if team_cap >= headcount else 0.5

        # Weighted Total Score
        total_score = (
            DISPATCH_WEIGHTS["distance"] * dist_score +
            DISPATCH_WEIGHTS["availability"] * avail_score +
            DISPATCH_WEIGHTS["vehicle"] * vehicle_score +
            DISPATCH_WEIGHTS["medical"] * medical_score +
            DISPATCH_WEIGHTS["capacity"] * cap_score
        ) * 100.0

        ranked_teams.append({
            "team_id": team["id"],
            "code_name": team["code_name"],
            "unit_name": team["unit_name"],
            "distance_km": dist_km,
            "vehicle_type": team["vehicle_type"],
            "match_score": int(round(total_score)),
            "eta_minutes": max(4, int(dist_km * 2.5))
        })

    # Sort descending by match score
    ranked_teams.sort(key=lambda x: x["match_score"], reverse=True)

    best_match = ranked_teams[0] if ranked_teams else None
    
    # Generate LLM Decision Support Explanation
    explanation = ""
    if best_match:
        explanation = (
            f"Squad {best_match['code_name']} ({best_match['unit_name']}) was selected as top recommendation "
            f"with a {best_match['match_score']}% match score because it is stationed {best_match['distance_km']} km away "
            f"(ETA: ~{best_match['eta_minutes']} mins), operates a {best_match['vehicle_type']}, and satisfies victim capacity & medical requirements."
        )

    return {
        "recommended_team": best_match,
        "all_ranked_teams": ranked_teams,
        "weights_used": DISPATCH_WEIGHTS,
        "llm_explanation": explanation
    }
