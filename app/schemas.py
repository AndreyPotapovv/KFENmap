from typing import Optional
from pydantic import BaseModel

class LocationCreate(BaseModel):
    name: str
    type: str
    floor: int
    description: str | None = None

class LocationUpdate(BaseModel):
    name: Optional[str]
    description: Optional[str]
    floor: Optional[int]
