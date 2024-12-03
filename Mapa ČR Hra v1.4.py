import csv
# databáze souřadnic
stredni = []
lehke = []
tezke = [] 
with open("Střední vylepšeno.txt","r", encoding="utf8") as soubor:
    soubor = csv.reader(soubor, delimiter=";")
    for radek in soubor:
        stredni.append(radek)

with open("Lehké.txt","r", encoding="utf8") as soubor:
    soubor = csv.reader(soubor, delimiter=";")
    for radek in soubor:
        lehke.append(radek)


        
tezke = [
    ("Dvůr Králové nad Labem", 560, 730)
]
body = 0
# importujem moduly

import cv2, keyboard, time, sys, pyautogui
from PIL import ImageFont, ImageDraw, Image
from random import randint
import numpy as np
import time

# upravíme mapu na správnou velikost
image = Image.open('slepa_mapa.jpg')
new_image = image.resize((1600, 900))
new_image.save('slepa_mapa_resized.jpg')

image = Image.open('mapa_mesta.jpg')
new_image = image.resize((1600, 900))
new_image.save('mapa_mesta_resized.jpg')

usmevacek = Image.open("Usměváček.png")
usmevacek = usmevacek.resize((800,800))
usmevacek.save("Usmevacek_resized.png")

vesely = Image.open("Veselý.png")
vesely = vesely.resize((800,800))
vesely.save("Vesely_resized.png")

smutny = Image.open("Smutný.png")
smutny = smutny.resize((800,800))
smutny.save("Smutny_resized.png")

placici = Image.open("Plačící.jpg")
placici = placici.resize((800,800))
placici.save("Placici_resized.jpg")

nevesely = Image.open("Neveselý.png")
nevesely = nevesely.resize((800,800))
nevesely.save("Nevesely_resized.png")

mirne_placici = Image.open("Mírně plačící.png")
mirne_placici = mirne_placici.resize((800,800))
mirne_placici.save("Mirne_placici_resized.png")


def click_event(event, x, y, flags, params):
    global body
    global text_displayed
    font = cv2.FONT_HERSHEY_SIMPLEX
    if text_displayed < 1:
        if event == cv2.EVENT_LBUTTONDOWN: 

            if (a - 30) < x < (a + 30) and (b - 30) < y < (b + 30):
                    cv2.putText(img, "ANO!" , (1130,90), font, 1, (255, 0, 0), 2)
                    cv2.putText(img, ".", (a,b), font, 2, (255, 0, 0), 2)
                    body = body + 1
                
            else:
                    cv2.putText(img, "CHYBA!", (1130,90), font, 1, (255, 0, 0), 2)
                    cv2.putText(img, ".", (a,b), font, 2, (255, 0, 0), 2)  

            cv2.imshow('image', img) 
            text_displayed = 1


def volba_obtiznosti(event, x, y, flags, params):
    global obtiznost
    global obtiznost_zvolena
    if obtiznost_zvolena < 1:
        if event == cv2.EVENT_LBUTTONDOWN: 

            if  y < 380:
                obtiznost = "Zvolena obtížnost - Lehká \nStiskni nulu"
                
            elif y < 480:
                obtiznost = "Zvolena obtížnost - Střední \nStiskni nulu"
                            
            elif y < 580:
                obtiznost = "Zvolena obtížnost - Těžká \nStiskni nulu"
            
            else:
                obtiznost = "Brouk pytlík obtížnost! \nStiskni nulu"
            pyautogui.press("0")
            obtiznost_zvolena = 1



  
 
def TrueFont(text_to_show, n, m, img, v):
    cv2_im_rgb = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)    
    pil_im = Image.fromarray(cv2_im_rgb)
    draw = ImageDraw.Draw(pil_im)
    font = ImageFont.truetype("Albertsthal Typewriter.ttf", v)
    draw.text((n,m), text_to_show, (255, 0, 0), font=font)
    cv2_im_processed = cv2.cvtColor(np.array(pil_im), cv2.COLOR_RGB2BGR)
    cv2.imshow('image', cv2_im_processed)    
  



     
obtiznost = "Žádná"
obtiznost_zvolena = 0

font = cv2.FONT_HERSHEY_SIMPLEX

img = cv2.imread('slepa_mapa_resized.jpg', 1)

cv2_im_rgb = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)    
pil_im = Image.fromarray(cv2_im_rgb)
draw = ImageDraw.Draw(pil_im)
font = ImageFont.truetype("Albertsthal Typewriter.ttf", 40)
draw.text((200,300),"Zvolte si obtížnost:", (255, 0, 0), font=font)
draw.text((700,300),"Lehká", (255, 0, 0), font=font)
draw.text((700,400), "Střední", (255, 0, 0), font=font)
draw.text((700,500), "Těžká", (255, 0, 0), font=font)
draw.text((300,600), "Brouk pytlík obtížnost(všchno vím všechno znám)!", (255, 0, 0), font=font)
cv2_im_processed = cv2.cvtColor(np.array(pil_im), cv2.COLOR_RGB2BGR)

cv2.imshow('image', cv2_im_processed)    

cv2.setMouseCallback('image', volba_obtiznosti) 

cv2.waitKey(0)

TrueFont(obtiznost,800,40, img, 40)

cv2.waitKey(0)

mesto = "ERROR"
x = 10
# driver function 
while x > 0:
    if keyboard.is_pressed("q"):
        break 
    if obtiznost == "Zvolena obtížnost - Lehká \nStiskni nulu":
        cislo = randint(0,(len(lehke)-1))
        mesto = (lehke[cislo])[0]
        a = int((lehke[cislo])[1])
        b = int((lehke[cislo])[2])
    if obtiznost == "Zvolena obtížnost - Střední \nStiskni nulu":
        cislo = randint(0,(len(stredni)-1))
        mesto = (stredni[cislo])[0]
        a = int((stredni[cislo])[1])
        b = int((stredni[cislo])[2])
    if obtiznost == "Zvolena obtížnost - Těžká \nStiskni nulu":
        cislo = randint(0,(len(tezke)-1))
        mesto = (tezke[cislo])[0]
        a = int((tezke[cislo])[1])
        b = int((tezke[cislo])[2])

    text_displayed = 0
    text = f"Kde leží {mesto}?" 

    # reading the image 
    img = cv2.imread('slepa_mapa_resized.jpg', 1)

    TrueFont(text,750,20, img, 40)

    
    # setting mouse hadler for the image 
    # and calling the click_event() function

    
    cv2.setMouseCallback('image', click_event) 

    # wait for a key to be pressed to exit 
    cv2.waitKey(0)


    # close the window 
    cv2.destroyAllWindows()

    x = x - 1

if 8 < body < 11:
    usmevacek = cv2.imread("Usmevacek_resized.png", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, usmevacek, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
if 6 < body < 9:
    vesely = cv2.imread("Vesely_resized.png", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, vesely, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
if 4 < body < 7:
    nevesely = cv2.imread("Nevesely_resized.png", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, nevesely, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
if 2 < body < 5:
    smutny = cv2.imread("Smutny_resized.png", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, smutny, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
if 0 < body < 3:
    mirne_placici = cv2.imread("Mirne_placici_resized.png", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, mirne_placici, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
if body == 0:
    placici = cv2.imread("Placici_resized.jpg", 1)
    cislo = str(body)
    TrueFont(cislo, 400, 400, placici, 100)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    

    