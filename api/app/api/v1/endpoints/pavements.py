from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query, status
from app.schemas.pavement import PavementRes
from app.core.supabase_client import supabase
from app.filters.tactile_paving import TactilePavingFilter, apply_tactile_paving_filter

router = APIRouter(prefix='/pavements', tags=['pavements'])

@router.get('/', response_model=List[PavementRes], status_code=status.HTTP_200_OK)
async def get_pavements(
    tactile_paving: Optional[TactilePavingFilter] = Query(default=None),
):
    
    try:
        query = supabase.table('pavements_view').select('*')

        if tactile_paving:
            query = apply_tactile_paving_filter(query, tactile_paving)
        
        res = query.execute()

        return res.data
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e),
        )
    
# TODO: location(PostGIS)へのpostができることが確認できたらlat, lngをDBから削除
@router.post('/', response_model=str, status_code=status.HTTP_200_OK)
async def create_pavement():
    pass