from sqlmodel import SQLModel, Field
from typing import Optional

class Location(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str                # Например: "Аудитория 421"
    type: str                # "аудитория", "туалет", "лестница", "кафе"
    floor: int               # Этаж (4)
    description: Optional[str] = None  # Описание (по желанию)
