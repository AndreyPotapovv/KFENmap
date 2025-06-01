from sqlmodel import SQLModel, Field
from typing import Optional

class Location(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    type: str
    floor: int
    description: Optional[str] = None  
