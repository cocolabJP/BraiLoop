import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Cloudinary
    cloudinary_cloud_name: str = os.getenv('CLOUDINARY_CLOUD_NAME', '')
    cloudinary_api_key:    str = os.getenv('CLOUDINARY_API_KEY', '')
    cloudinary_api_secret: str = os.getenv('CLOUDINARY_API_SECRET', '')

    # Supabase
    supabase_url: str = os.getenv('SUPABASE_URL', '')
    supabase_key: str = os.getenv('SUPABASE_KEY', '')

    debug_mode: str  = os.getenv('DEBUG_MODE', '')

    model_config = SettingsConfigDict(
        env_file = '.env',
        env_file_encoding = 'utf-8',
    )

settings = Settings()