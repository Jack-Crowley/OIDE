f = open("6502.txt")
string = ""
for line in f:
    if line.strip() != "":
        string += f"case 0x{line[1:3]}:\n\tthis.{line}\tbreak;\n"

print(string)