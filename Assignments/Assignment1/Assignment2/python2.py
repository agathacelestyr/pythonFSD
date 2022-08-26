def power(i, v):
    if i == 0 or v == 0:
        return 0
    else:
        return i*v


i, v = input("Enter current and voltage:").split()
print("Power = " + str(power(int(i), int(v))) + "Watts")
