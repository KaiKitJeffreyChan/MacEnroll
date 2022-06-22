from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from twilio.rest import Client
from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from csv import reader
from datetime import datetime
from pytz import timezone
from decouple import config
import threading
import markdown
import time
import os

AUTH = config('AUTH') 

app = Flask(__name__)
CORS(app)
api = Api(app)

course_required_args = reqparse.RequestParser()

course_required_args.add_argument(
    "user", type=str, help="Username is required", required=True)
course_required_args.add_argument(
    "pass", type=str, help="Password is required", required=True)
course_required_args.add_argument(
    "target_num", type=str, help="Your phone number is required", required=False)
course_required_args.add_argument(
    "semester", type=str, help="The semester is required", required=True)

course_required_args.add_argument(
    "clear", type=bool, help="To clear all users", required=False)
    
#optional for timed course request make it so if timed, then all other are required
course_required_args.add_argument(
    "time", type=bool, help="Add a time to the enrollment?", required=False)
course_required_args.add_argument(
    "year", type=int, help="year", required=False)
course_required_args.add_argument(
    "month", type=int, help="month", required=False)
course_required_args.add_argument(
    "day", type=int, help="day", required=False)
course_required_args.add_argument(
    "hour", type=int, help="hour", required=False)
course_required_args.add_argument(
    "min", type=int, help="min", required=False)

userData = {}

def checkCourse(user, user_password, targetNum, semester, difference=False, greeting=True):
    try:
        if(difference):
            time.sleep(difference)

        chrome_options = Options()
        chrome_options.add_argument("--window-size=1920,1080")
        # chrome_options.add_argument("--headless")
        driver = webdriver.Chrome(
            ChromeDriverManager().install(), options=chrome_options)
        driver.get(
            "https://epprd.mcmaster.ca/psp/prepprd/?cmd=login&languageCd=ENG&")

        driver.implicitly_wait(10)
        username = driver.find_element_by_id("userid")
        username.send_keys(user)
        print("Entered username")
        password = driver.find_element_by_id("pwd")
        password.send_keys(user_password)
        print("Entered password")

        driver.find_element_by_name('Submit').click()


        driver.find_element_by_id('PTNUI_LAND_REC14$0_row_10').click()
        print("Navigating to enroll section")

        # press enroll top left
        frame = driver.find_element_by_xpath('//*[@id="ptifrmtgtframe"]')
        driver.switch_to.frame(frame)
        driver.find_element_by_id('DERIVED_SSS_SCR_SSS_LINK_ANCHOR3').click()

        if(semester == "winter"):
            driver.find_element_by_id('SSR_DUMMY_RECV1$sels$2$$0').click()
        else:
            driver.find_element_by_id('SSR_DUMMY_RECV1$sels$0$$0').click()

        driver.find_element_by_id('DERIVED_SSS_SCT_SSR_PB_GO').click()
        print("Selected semester")
        print("Thread ID ", threading.get_native_id())

        #checking if both user and the original thread is still in dictionary
        #otherwise skip out of loop and quit the driver
        

        while (user in userData.keys()) and (threading.get_native_id() in userData.values()):
            print("Entered Loop")

            driver.find_element_by_id(
                'DERIVED_REGFRM1_LINK_ADD_ENRL$82$').click()

            #fix this lmao ----------------------------
            try:
                driver.find_element_by_id(
                    'DERIVED_REGFRM1_SSR_PB_SUBMIT').click()
            except:
                driver.switch_to.default_content
                driver.find_element_by_id(
                    'DERIVED_REGFRM1_SSR_PB_SUBMIT').click()
            
            #------------------------------------------

            message = driver.find_element_by_xpath(
                '//*[@id="win0divDERIVED_REGFRM1_SS_MESSAGE_LONG$0"]/div').text
            if message != "Error: Class 8081 is full. The Class is full please select Add Another Class to return to step 1.":
              print("worked")
              driver.quit()
            else:
                driver.find_element_by_xpath(
                    '//*[@id="selectedtab"]/a').click() 
            print("Tried to enroll")
            # checks every 5 min
            time.sleep(50)
            
    except:
        del userData[user]
        client = Client("ACee67b8e063a7969f04bddacd4c28cfc9",AUTH)
        message = client.messages.create(
            body="MacEnroll: Oops, something went wrong with the enrollment process, please check that all credentials are correct.",
            from_="+14702605227",
            to=targetNum
        )
        return f"{user}'s thread has crashed, please check that all credentials are correct.", 400

class Courses(Resource):

    def get(self, target_user=None):
        if(target_user):
            return target_user in userData.keys()
            #need to either save phonenumbers with macID's or create database to store all info, bc dont have access to numbers outside of thread
        else:
            active_threads = threading.active_count() - 2
            return { "active threads" : active_threads, 
                    "usernames": userData },  200 

    def post(self):
        args = course_required_args.parse_args()
        if(args["time"]):
            if (args["user"] in userData.keys()):
                return "You have already registered a course", 200
            else:
                try:     
                    tz = timezone('US/Eastern')
                    a = datetime.now(tz).replace(tzinfo=None)
                    b = datetime(args["year"], args["month"], args["day"], args["hour"], args["min"], 0)
                    difference = (b-a).total_seconds()
            
                    t = threading.Thread(target=checkCourse, args=(
                        args["user"], args["pass"], args["target_num"], args["semester"], difference, ))
                    t.start()
                    userData[args["user"]] = t.native_id
                    return "new thread created", 201
                except:
                    #instead of this feild validation so everything coming in is already correct
                    return "Something went wrong, make sure all time values are filled out!", 400

        else:
            if (args["user"] in userData.keys()):
                return "You have already registered a course", 200
            else:
                t = threading.Thread(target=checkCourse, args=(
                    args["user"], args["pass"], args["target_num"], args["semester"]))
                t.start()       
                userData[args["user"]] = t.native_id
                return "new thread created", 201 

            return "invalid time parameter", 400

    def delete(self, target_user=None):
        args = course_required_args.parse_args()
        if(args["clear"] == True):
            userData.clear()
        else:
            for key in userData:
                if key == target_user:
                    del userData[target_user]
                    return 204 
                else:
                    return "You have no current checks in place", 409
        

api.add_resource(Courses, "/courses", "/courses/<string:target_user>")
