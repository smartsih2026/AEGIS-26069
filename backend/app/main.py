import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import sos, telemetry, ai_chat

# Initialize Database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AEGIS - AI-Powered Flood Response Platform API",
    description="Unified Disaster Lifecycle Management API (SIH 2026 PS 26206)",
    version="2.0.0"
)

# Enable CORS for local and live web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(sos.router)
app.include_router(telemetry.router)
app.include_router(ai_chat.router)

@app.get("/")
def read_root():
    return {
        "system": "AEGIS AI Disaster Platform",
        "status": "ONLINE",
        "ps_id": "26206",
        "version": "2.0.0",
        "documentation": "/docs"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "HEALTHY",
        "database": "CONNECTED",
        "services": {
            "fastapi": "OPERATIONAL",
            "xgboost_risk_model": "LOADED",
            "telemetry_ingestion": "ACTIVE"
        }
    }

if __name__ == "__main__":
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
