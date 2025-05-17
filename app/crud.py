from sqlmodel import Session, select
from app.models import Location
from app.database import engine
from app.database import get_session

def create_location(location: Location):
    with Session(engine) as session:
        session.add(location)
        session.commit()
        session.refresh(location)
        return location

def get_locations():
    with Session(engine) as session:
        return session.exec(select(Location)).all()

def get_location_by_name(name: str):
    with get_session() as session:
        return session.query(Location).filter(Location.name == name).first()