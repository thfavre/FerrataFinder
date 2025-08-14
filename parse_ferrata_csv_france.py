
# read a CSV file and print it out
with open('france_ferrata.txt', 'r', encoding='utf-8') as csvfile:
	for line in csvfile.readlines():
		line = line.split('\t')
		print("{")
		print("\tname: \"", line[1], "\",", sep='')
		print("\tcity: \"", line[1] + ", " + line[0], "\",", sep='')
		print("\tdifficulty: \"", line[20], "\",", sep='')

		print("\tcharacteristics: \"", sep='', end='<br>')
		if (line[6] != ""):
			print("<span style='margin-left: 20px;'>Longueur câblée : " + line[6] + "m</span>", end='<br>')
		if (line[7] != ""):
			print("<span style='margin-left: 20px;'>Approche : " + line[7] + "</span>", end='<br>')
		if (line[9] != ""):
			print("<span style='margin-left: 20px;'>Retour : " + line[9] + "</span>", end='<br>')
		if (len(line) >= 23 and line[23] != ""):
			print("<span style='margin-left: 20px;'>Gaz (/4) : " + line[23] + "</span>", end='<br>')
		if (len(line) >= 18 and line[18] != ""):
			print("<span style='margin-left: 20px;'>Pour enfants : " + line[18] + "</span>", end='<br>')

		print("\",", sep='')

		print("\ttime: \"", line[8], "\",", sep='')
		print("\tcoord: \"", "\",", sep='')
		print("\tlink: \"", "\"", sep='')


		print("},")


