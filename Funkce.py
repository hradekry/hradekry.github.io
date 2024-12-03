import csv
def load(soubor, list1, list2):
    with open(soubor,"r", encoding = "utf8") as soubor:
        soubor = csv.reader(soubor, delimiter=";")
        for radek in soubor:
            list1.append(radek)

    for x in range(len(list1)):
        list2.append(x)