from core import test_func
from fastapi import APIRouter

app_router = APIRouter()

@app_router.get("/")
def health_check():
    return {"status": "ok"}

@app_router.post("/test")
async def test():
    test_func()
    return 

__all__ = ["app_router"]