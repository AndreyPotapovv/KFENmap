from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlmodel import Session, select
from models import Location
from schemas import LocationCreate, LocationUpdate
from database import engine
import secrets
import os
from dotenv import load_dotenv

admin_router = APIRouter()
security = HTTPBasic()
load_dotenv()

def admin_auth(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = secrets.compare_digest(credentials.username, os.getenv("ADMIN_USERNAME"))
    correct_password = secrets.compare_digest(credentials.password, os.getenv("ADMIN_PASSWORD"))
    if not (correct_username and correct_password):
        raise HTTPException(status_code=401, detail="Неверные данные", headers={"WWW-Authenticate": "Basic"})
    return credentials.username

@admin_router.get("/locations", response_model=list[Location])
def get_locations(user: str = Depends(admin_auth)):
    with Session(engine) as session:
        return session.exec(select(Location)).all()

@admin_router.post("/locations", response_model=Location)
def create_location(loc: LocationCreate, user: str = Depends(admin_auth)):
    with Session(engine) as session:
        location = Location(**loc.dict())
        session.add(location)
        session.commit()
        session.refresh(location)
        return location

@admin_router.put("/locations/{location_id}", response_model=Location)
def update_location(location_id: int, loc: LocationUpdate, user: str = Depends(admin_auth)):
    with Session(engine) as session:
        location = session.get(Location, location_id)
        if not location:
            raise HTTPException(status_code=404, detail="Локация не найдена")
        for key, value in loc.dict(exclude_unset=True).items():
            setattr(location, key, value)
        session.commit()
        session.refresh(location)
        return location
    
@admin_router.delete("/locations/{location_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_location(location_id: int, user: str = Depends(admin_auth)):
    with Session(engine) as session:
        location = session.get(Location, location_id)
        if not location:
            raise HTTPException(status_code=404, detail="Локация не найдена")
        session.delete(location)
        session.commit()