from tkinter import *  
from PIL import ImageTk,Image
from win32api import GetSystemMetrics
import vlc
p = vlc.MediaPlayer("cvak.mp3")
print("Width =", GetSystemMetrics(0))
print("Height =", GetSystemMetrics(1))

g = []
with open("Lehké.txt", "r", encoding = "utf8") as soubor:
    for radek in soubor:
        g.append(radek)

with open("Střední vylepšeno.txt", "r", encoding = "utf8") as soubor:
    for radek in soubor:
        g.append(radek)
okno = Tk()
okno.title("KdeLezi")
okno.iconbitmap('kdelezi.ico')
canvas = Canvas(okno, width = 1600, height = 900)#GetSystemMetrics(0)-2, height = GetSystemMetrics(1)-72)  
canvas.pack()  
img1 = ImageTk.PhotoImage(Image.open("kdelezi2.jpg"))#.resize((GetSystemMetrics(0)-2, GetSystemMetrics(1)-72)))
img2 = ImageTk.PhotoImage(Image.open("kdelezi3.jpg").resize((1600,900)))
img3 = ImageTk.PhotoImage(Image.open("slepa_mapa3.jpg").resize((1600,900)))
but1 = ImageTk.PhotoImage(Image.open("kdelezib1.png"))
but2 = ImageTk.PhotoImage(Image.open("kdelezib1.png").resize((325,170)))
but3 = ImageTk.PhotoImage(Image.open("kdelezib21.png"))
but4 = ImageTk.PhotoImage(Image.open("kdelezib22.png"))
but5 = ImageTk.PhotoImage(Image.open("kdelezib21.png").resize((179,140)))
but6 = ImageTk.PhotoImage(Image.open("kdelezib22.png").resize((179,140)))
but7 = ImageTk.PhotoImage(Image.open("kdelezib31.png"))
but8 = ImageTk.PhotoImage(Image.open("kdelezib32.png").resize((137,162)))
city = ImageTk.PhotoImage(Image.open("Untitled.png"))
kdelezi = canvas.create_image(1, 1, anchor=NW, image= img1)
hrat1 = canvas.create_image(1250, 310, anchor=NW, image=but1)
hrat2 = None
zvuk = True
zvuk1 = canvas.create_image(1311, 475, anchor=NW, image=but3)
zvuk2 = None
zvuk3 = None
zvuk4 = None
quit1 = canvas.create_image(1329.5, 610, anchor=NW, image=but7)
quit2 = None
a = 0
b = 0
x = 0
y = 0

def click(event):
    global zvuk, zvuk1, zvuk2, zvuk3, zvuk4, x, y, okno
    if 1521 > x and x > 1250 and y < 452 and y > 310:
        print("hrat")
        if zvuk == True:
            canvas.delete(zvuk3)
        canvas.delete(hrat2)
        canvas.delete(kdelezi)
        canvas.delete(quit1)
        okno.bind('<Motion>', brm)
        canvas.create_image(1, 1, anchor=NW, image= img3)
        for n in range(len(g)):
            canvas.create_image(g[n].split(";")[1], g[n].split(";")[2], anchor=NW, image= city)
    if 1460 > x and x > 1311 and y < 592 and y > 475:
        if zvuk == True:
            zvuk = False
            print(f"zvuk = {zvuk}")
            canvas.delete(zvuk1)
            zvuk1 = None
            zvuk2 = canvas.create_image(1296, 463.5, anchor=NW, image=but6)
        else:
            zvuk = True
            print(f"zvuk = {zvuk}")
            canvas.delete(zvuk2)
            zvuk2 = None
            zvuk1 = canvas.create_image(1296, 463.5, anchor=NW, image=but5)
    if 1443 > x and x > 1329 and y < 755 and y > 610:
        okno.destroy()

def motion(event):
    global hrat1, hrat2, canvas, a, b, p, zvuk1, zvuk2, zvuk3, zvuk4, quit1, quit2, x, y
    x, y = event.x, event.y

    
    if x != a or y != b:
        if 1521 > x and x > 1250 and y < 452 and y > 310:
            if hrat2 is None:
                canvas.delete(hrat1)
                hrat1 = None
                hrat2 = canvas.create_image(1223, 295.5, anchor=NW, image=but2)
                canvas.config(cursor="hand2")
        else:
            if hrat1 is None:
                canvas.delete(hrat2)
                hrat2 = None
                hrat1 = canvas.create_image(1250, 310, anchor=NW, image=but1)
                canvas.config(cursor="")


        
        if 1460 > x and x > 1311 and y < 592 and y > 475:
            if zvuk1 is None and zvuk2 is None:
                if zvuk3 is None:
                    canvas.delete(zvuk4)
                    zvuk4 = None
                    zvuk2 = canvas.create_image(1296, 463.5, anchor=NW, image=but6)
                else:
                    canvas.delete(zvuk3)
                    zvuk3 = None
                    zvuk1 = canvas.create_image(1296, 463.5, anchor=NW, image=but5)
                canvas.config(cursor="hand2")
        else:
            if zvuk3 is None and zvuk4 is None:
                if zvuk1 is None:
                    canvas.delete(zvuk2)
                    zvuk2 = None
                    zvuk4 = canvas.create_image(1311, 475, anchor=NW, image=but4)
                else:
                    canvas.delete(zvuk1)
                    zvuk1 = None
                    zvuk3 = canvas.create_image(1311, 475, anchor=NW, image=but3)
                canvas.config(cursor="")
                
        if 1443 > x and x > 1329 and y < 755 and y > 610:
            if quit2 is None:
                canvas.delete(quit1)
                quit1 = None
                quit2 = canvas.create_image(1318, 596.5, anchor=NW, image=but8)
                canvas.config(cursor="hand2")
        else:
            if quit1 is None:
                canvas.delete(quit2)
                quit2 = None
                quit1 = canvas.create_image(1329.5, 610, anchor=NW, image=but7)
                canvas.config(cursor="")
    #print('{}, {}'.format(x, y))
    a = x
    b = y

def brm(event):
    print(f"pozice = {event.x, event.y}")

        
okno.bind('<Motion>', motion)
okno.bind("<Button-1>", click)
okno.mainloop()