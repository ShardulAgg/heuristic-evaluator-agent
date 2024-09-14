from multion.client import MultiOn
from dotenv import load_dotenv
import os

load_dotenv()

apiKey = os.getenv("MULTI_ON")

multion = MultiOn(api_key=apiKey)

def call_multion_and_run_heuristics(website_url):
    browse = multion.browse(
        cmd="Find Nielsen's heuristics feedback for criteria 1 for this website url",
        url=website_url
    )
    if browse.status == 'DONE':
        print("Browse response:", browse)
        return browse
    elif browse.status == 'ASK_USER':
        return "Multi On ne Hagg diya. Omar you need to work harder :/"


def give_actionable_feedback(website_url, heuristics_response):
    browse = multion.browse(
        cmd="Based on the heuristics for this website url",
        url=website_url
    )
    print("Browse response:", browse)
    return browse
