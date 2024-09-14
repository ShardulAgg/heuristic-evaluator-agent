from core import call_multion_and_run_heuristics, give_actionable_feedback
from fastapi import APIRouter

app_router = APIRouter()

@app_router.get("/")
def health_check():
    return {"status": "ok"}

@app_router.post("/run_heuristics")
async def run_heuristics(wesbite_url: str):
    call_multion_and_run_heuristics(wesbite_url)
    return

@app_router.post("/get_feedback")
async def get_feedback(wesbite_url: str, heuristics_response: str):
    give_actionable_feedback(wesbite_url, heuristics_response)
    return

__all__ = ["app_router"]