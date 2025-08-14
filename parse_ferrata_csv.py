
# read a CSV file and print it out
with open('ferrata.csv', 'r', encoding='utf-8') as csvfile:
	for line in csvfile.readlines():
		line = line.split(';')
		print("{")
		print("\tname: \"", line[0], "\",", sep='')
		print("\tcity: \"", line[1], "\",", sep='')
		print("\tdifficulty: \"", line[2], "\",", sep='')
		print("\tcharacteristics: \"", line[3].replace("\n", ""), "\",", sep='')
		print("\ttime: \"", line[4].replace("\n", ""), "\",", sep='')
		print("\tcoord: \"", line[5].replace("\n", ""), "\",", sep='')
		print("\tlink: \"", line[6].replace("\n", ""), "\"", sep='')
		print("},")
		if (len(line) < 7):
			print("ERROR", line)
