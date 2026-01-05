from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from uuid import UUID

class PavementRes(BaseModel):
    id: UUID
    camera_timestamp: datetime
    latitude: float
    longitude: float
    image_url: str
    classes: Optional[List[int]]
