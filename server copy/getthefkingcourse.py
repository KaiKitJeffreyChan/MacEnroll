import requests
import json
from bs4 import BeautifulSoup

def main():
  getCourse("chank98", "Kkjc1608!");
  
def getCourse(username, password):
  url = "https://epprd.mcmaster.ca/psp/prepprd/?cmd=login"
  res = requests.get(url)
  soup = BeautifulSoup(res.text)
  tbodys = soup.findAll("tbody")

if __name__ == "__main__":
    main()