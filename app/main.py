from fastapi import FastAPI
import uvicorn
from routers import locations, admin
from database import create_db_and_tables
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Карта КФЕН")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

app.include_router(locations.router, prefix="/locations", tags=["Locations"])
app.include_router(admin.admin_router, prefix="/admin", tags=["Admin"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)