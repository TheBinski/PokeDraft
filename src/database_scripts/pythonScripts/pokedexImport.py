import csv
import mariadb
import sys

#Connection settings are saved in a seperate file
connectionFile = open("connectionSettings.csv")
reader = csv.reader(connectionFile)
settings = next(reader)

myuser = str(settings[0]).strip()
mypassword = str(settings[1]).strip()
myhost = str(settings[2]).strip()
myport = int(settings[3])
mydatabase = str(settings[4]).strip()

connectionFile.close()
try:
    conn = mariadb.connect(
        user=myuser,
        password=mypassword,
        host=myhost,
        port=myport,
        database=mydatabase
    )
except mariadb.Error as e:
    print(f"Error connecting to Database: {e}")
    
    sys.exit(1)

cur = conn.cursor()
print("Connected!")

#------------ Comment out when not testing connection to database --------------
exit(1)
#------------ Comment out when not testing connection to database --------------

#REPLACE File name with new file for updates
file = open('PokeDexV1.csv')

type(file)

lines = file.readlines()

linesFormatted = []

#reformats the lines to be usable
for line in lines:
    newLine = line.split(',')
    
    #removes the new line character in the last entry
    newLine[-1] = newLine[-1].split('\n')[0]
    
    linesFormatted.append(newLine)
    
print(linesFormatted[0][13])
    
#begin mysql batches
for pokemon in linesFormatted:
    print("Inserting - ", pokemon[1])
    values = (int(pokemon[0]),
    str(pokemon[1]),
    str(pokemon[2]),
    str(pokemon[3]),
    str(pokemon[11]),
    str(pokemon[12]),
    str(pokemon[13]),
    int(pokemon[4]),
    int(pokemon[5]),
    int(pokemon[6]),
    int(pokemon[7]),
    int(pokemon[8]),
    int(pokemon[9]),
    int(pokemon[10])
    )
        
    cur.execute("INSERT INTO Pokemon (dexNumber, name, type1, type2, ability1, ability2, abilityH, hp, attack, defence, spAttack, spDefence, speed, statTotal) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", values)
        
    conn.commit()

file.close()