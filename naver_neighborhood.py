import requests
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
import pyperclip
import pyautogui
import time

driver = webdriver.Chrome(executable_path="/Users/goyeong-il/Desktop/dev/cafe_crawler/chromedriver")

user_id = 'ko12ztwe'
user_pw = 'Dkapflzks88!!'

# 1. 네이버 이동
driver.get('https://nid.naver.com')
try:
    element = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.ID, 'id')))
except:
    driver.quit()

# 3. id 복사 붙여넣기
# cate_lists = driver.find_elements(By.CLASS_NAME, value="subFilter_num__2x0jq")

elem_id = driver.find_element(By.ID, "id")
elem_id.click()
pyperclip.copy(user_id)
# pyautogui.hotkey("command", "v")
elem_id.send_keys(Keys.COMMAND, 'v')
time.sleep(1)

# 4. pw 복사 붙여넣기
elem_pw = driver.find_element(By.ID, "pw")
# elem_pw = driver.find_element(By.ID, 'pw')
elem_pw.click()
pyperclip.copy(user_pw)
# pyautogui.hotkey("command", "v")
elem_pw.send_keys(Keys.COMMAND, 'v')
time.sleep(1)

# 5. 로그인 버튼 클릭
driver.find_element(By.CLASS_NAME, 'btn_login').click()

time.sleep(4)

# 6. html 정보 출력
# print(browser.page_source)

# 7. 브라우저 종료
# browser.close() # 현재 탭만 종료
# browser.quit() # 전체 브라우저 종료


# url = "https://m.blog.naver.com/BuddyAddForm.naver?blogId=dreamchepd&returnUrl=https%253A%252F%252Fm.blog.naver.com%252nick_idu0527%253FproxyReferer%253D"

# driver = webdriver.Chrome(executable_path="/Users/goyeong-il/Desktop/dev/cafe_crawler/chromedriver")
# driver.get(url)

# driver.add_cookie({"name": "NID_AUT", "value" : "v+IvSVxLd96E+q2i9ayzHr5jYp/JgrJo5MZVDUl8FLgXeltczQky3yBPR1JeCddv",  "url": "https://m.blog.naver.com"})
# driver.add_cookie({"name": "NID_SES", "value" : "AAABt2Ll3nB0fWFkmscUQAgBmquKFF5ftmNFeM6unFwXErUdN6SvMtWTQmwC4arh/CgcYWOO5t8Med42W9ZIXvqb7000dKo3bH0AQE0OIObDIf1hcUbt1GwRPPeTaI2PWTSvrCi91EYcKyDMMOG9NqsHHEIGWlvTwdiPgtOxeAlWL5PN+LL7HMMhO8wONox7N6tzh3S8KybxnMzw8hoKygjz+6I1HitiabPTMVrO1lyIvBx1BmWQumQF29e9Q926LzvO7ap+vBxAs7AxWpM1kkDxNPuc1sCMeZtqvQGysRKnr6U66Ud4+2LQVbnTD6z81KP1PdkY45ulsMZdXnmw152uaZOnZMs2FvRxnIS3JmyAQTo/cdP8I2wnTEkCWDkDN2qbZCud/Jw5ztud9WUoNpVUB6AOpeu0oqfxHJBQs5voHEllyAHKVMJiA0dAnq7Xp8mIKpLLoyB6Gxzt+wl/fklkfflgcD9lQul2HnJdpUkQdqbo6NZMnreeqXeJFVR7hUl3Ju7YJt+ZiEbEmKLW50WGgDcmWOpVjXjfeVsGF4eKLVaJtHGpZUxBOgJ1ngykgH+GrwWUKTwAZZ0rewfcXNXw0T8=", "url": "https://m.blog.naver.com"})

# cookie1 = driver.get_cookie('NID_AUT')
# cookie2 = driver.get_cookie('NID_SES')
# time.sleep(2)

# print('쿠키1', cookie1)
# print('쿠키2', cookie2)


# driver.close()