from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime
from uuid import UUID

class Observation(BaseModel):
    id: UUID
    camera_id: int
    camera_timestamp: datetime
    gps_timestamp: datetime
    latitude: float
    longitude: float
    speed: float
    accelerrations: Dict
    image_url: str
    has_tactile_paving: Optional[bool] = False
