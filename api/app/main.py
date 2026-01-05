from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.router import v1_router

app = FastAPI(title='BraiLoop API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/health')
async def health_check():
    return {'status': 'ok'}

app.include_router(v1_router, prefix='/v1')