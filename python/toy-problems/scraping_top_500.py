# from urllib2 import urlopen  # for Python 3: from urllib.request import urlopen
from bs4 import BeautifulSoup

URL = 'https://www.codewars.com/users/leaderboard'

# def solution():
#   # do it
#   return

import urllib.request

request = urllib.request.Request(URL)
response = urllib.request.urlopen(request)
print(response.read().decode('utf-8'))
