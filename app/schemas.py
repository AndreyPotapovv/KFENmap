from pydantic import BaseModel

class LocationCreate(BaseModel):
    name: str
    type: str
    floor: int
    description: str | None = None
