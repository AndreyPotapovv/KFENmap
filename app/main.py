from fastapi import FastAPI
from app.routers import locations
from app.database import create_db_and_tables
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Карта КФЕН")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(locations.router, prefix="/locations", tags=["Locations"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)