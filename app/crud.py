from sqlmodel import Session, select
from schemas import LocationUpdate
from models import Location
from database import engine
from database import get_session

def create_location(location: Location):
    with Session(engine) as session:
        session.add(location)
        session.commit()
        session.refresh(location)
        return location
    
def update_location(location_id: int, loc_data: LocationUpdate):
    with Session(engine) as session:
        db_loc = session.get(Location, location_id)
        if not db_loc:
            return None
        for key, value in loc_data.dict(exclude_unset=True).items():
            setattr(db_loc, key, value)
        session.add(db_loc)
        session.commit()
        session.refresh(db_loc)
        return db_loc

def get_locations():
    with Session(engine) as session:
        return session.exec(select(Location)).all()

def get_location_by_name(name: str):
    with get_session() as session:
        statement = select(Location).where(Location.name == name)
        return session.exec(statement).first()
    
def search_location(query: str):
    with Session(engine) as session:
        statement = select(Location).where(
            Location.name.ilike(f"%{query}%") | Location.description.ilike(f"%{query}%")
        )
        return session.exec(statement).first()