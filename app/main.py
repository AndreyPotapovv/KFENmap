from fastapi import FastAPI
from app.routers import locations
from app.database import create_db_and_tables

app = FastAPI(title="Карта КФЕН")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(locations.router, prefix="/locations", tags=["Locations"])
