from selenium import webdriver

driver = webdriver.Firefox()
driver.get('https://web.whatsapp.com/')

print("Login now...\n")

name = input("Göndereceğiniz Kişinin Adını Girin:")
count = int(input("Kaç Adet Gönderim: "))
msg = input("Mesajınızı Yazın: ")


user = driver.find_element_by_xpath('//span[@title = "{}"]'.format(name))
user.click()

msgBox = driver.find_element_by_xpath('//*[@id="main"]/footer/div[1]/div[2]/div/div[2]')

for i in range(count):
    msgBox.send_keys(msg)
    sendButton = driver.find_element_by_xpath('//*[@id="main"]/footer/div[1]/div[3]/button')
    sendButton.click()


print("Mission Successful")
print(f"{count} messages were sent to {name}")
