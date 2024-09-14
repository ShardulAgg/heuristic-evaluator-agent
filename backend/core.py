from multion.client import MultiOn
from dotenv import load_dotenv
import os

load_dotenv()

apiKey = os.getenv("MULTI_ON")

multion = MultiOn(api_key=apiKey)

def test_func():
    browse = multion.browse(
        cmd="Find the top comment of the top post on Hackernews.",
        url="https://news.ycombinator.com/"
    )
    print("Browse response:", browse)
