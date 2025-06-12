from fastapi import APIRouter, HTTPException, Query
from models import Location
from schemas import LocationCreate
import crud

router = APIRouter()

# @router.post("/", response_model=Location)
# def add_location(loc: LocationCreate):
#     return crud.create_location(Location(**loc.dict()))

@router.get("/", response_model=list[Location])
def list_locations():
    return crud.get_locations()

@router.get("/by-name/{name}", response_model=Location)
def get_location_by_name(name: str):
    location = crud.get_location_by_name(name)
    if not location:
        raise HTTPException(status_code=404, detail="Аудитория не найдена")
    return location

@router.get("/search/{query}", response_model=Location)
def search_location(query: str):
    location = crud.search_location(query)
    if not location:
        raise HTTPException(status_code=404, detail="Ничего не найдено")
    return location