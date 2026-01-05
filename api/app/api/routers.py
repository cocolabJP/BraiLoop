from fastapi import APIRouter
from api.v1 import pavements

v1_routers = APIRouter()
v1_routers.include_router(pavements.router, prefix='/pavements', tags=['pavements'])
