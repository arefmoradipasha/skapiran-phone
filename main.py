  
import tkinter
from tkinter import *
from tkinter import font
safe=Tk()
safe.geometry('%dx%d+%d+%d'% (500,500,0,0))
# safe.iconbitmap("aks/icon.ico")

Button(safe,text="سلام",font=font.Font(size=20),)
dokme = Button(safe, text="سلام", font=font.Font(size=20))
dokme.place(x=0,y=0)
safe.mainloop()