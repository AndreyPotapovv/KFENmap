from fastapi import APIRouter
from app.models import Location
from app.schemas import LocationCreate
from app import crud

router = APIRouter()

@router.post("/", response_model=Location)
def add_location(loc: LocationCreate):
    return crud.create_location(Location(**loc.dict()))

@router.get("/", response_model=list[Location])
def list_locations():
    return crud.get_locations()

@router.get("/by-name/{name}", response_model=Location)
def get_location_by_name(name: str):
    return crud.get_location_by_name(name)