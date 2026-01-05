from fastapi import APIRouter
from app.api.v1.endpoints import pavements

v1_router = APIRouter()
v1_router.include_router(pavements.router, prefix='/pavements', tags=['pavements'])
