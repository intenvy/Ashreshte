# Standard Library
import http.cookiejar as cookielib
import os
import urllib

# Site Packages
from bs4 import BeautifulSoup

cookie_filename = "parser.cookies.txt"


class LinkedInFetcher(object):

    def __init__(self, login, password):
        self.login = login
        self.password = password
        self.cj = cookielib.MozillaCookieJar(cookie_filename)
        if os.access(cookie_filename, os.F_OK):
            self.cj.load()
        self.opener = urllib.request.build_opener(
            urllib.request.HTTPRedirectHandler(),
            urllib.request.HTTPHandler(debuglevel=0),
            urllib.request.HTTPSHandler(debuglevel=0),
            urllib.request.HTTPCookieProcessor(self.cj)
        )
        self.opener.addheaders = [
            ('User-agent', 'Mozilla/5.0')
        ]
        self._login()
        title = self._load_title()
        print(title)

    def fetch_page(self, url, data=None):
        try:
            if data is not None:
                response = self.opener.open(url, data)
            else:
                response = self.opener.open(url)
            content = ''.join([str(l) for l in response.readlines()])
            return content
        except Exception as e:
            print("Exception on %s load: %s" % (url, e))

    def _load_soup(self, url, data=None):
        html = self.fetch_page(url, data)
        soup = BeautifulSoup(html, "html5lib")
        return soup

    def _login(self):
        soup = self._load_soup("https://www.linkedin.com/login")
        loginCsrfParam = soup.find("input", {"name": "loginCsrfParam"})['value']
        csrfToken = soup.find("input", {"name": "csrfToken"})['value']
        sIdString = soup.find("input", {"name": "sIdString"})['value']
        print("loginCsrfParam: %s" % loginCsrfParam)
        print("csrfToken: %s" % csrfToken)
        print("sIdString: %s" % sIdString)
        login_data = urllib.parse.urlencode({
            'session_key': self.login,
            'session_password': self.password,
            'loginCsrfParam': loginCsrfParam,
            'csrfToken': csrfToken,
            'sIdString': sIdString
        }).encode('utf8')

        self.fetch_page("https://www.linkedin.com/checkpoint/lg/login-submit", login_data)

    def _load_title(self):
        soup = self._load_soup("https://www.linkedin.com/feed/")
        return soup.find("title")
