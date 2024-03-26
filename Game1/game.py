import random

print("Welcome to name-of-program! \n")

i=1

def addition(n1, n2):
    print("What is " + str(n1) + " + " + str(n2) + ": ")
    x= input()
    if int(x) == (n1+n2):
        print("Correct! On to the next question.")
        return 0
    else:
        print("Incorrect. Back to the previous level.")
        return 1

def subtraction(n1, n2):
    print("What is " + str(n1) + " - " + str(n2) + ": ")
    x= input()
    if int(x) == (n1-n2):
        print("Correct! On to the next question.")
        return 0
    else:
        print("Incorrect. Back to the previous level.")
        return 1
    
def multiplication(n1, n2):
    print("What is " + str(n1) + " * " + str(n2) + ": ")
    x= input()
    if int(x) == (n1*n2):
        print("Correct! On to the next question.")
        return 0
    else:
        print("Incorrect. Back to the previous level.")
        return 1



while i<10:

    if i==1:
        if addition(random.randint(1,10), random.randint(1,10)):
            continue
    if i==2:
        if addition(random.randint(1,10), random.randint(1,100)):
            continue
    if i==3:
        if addition(random.randint(1,100), random.randint(1,100)):
            continue
    if i==4:
        if subtraction(random.randint(1,10), random.randint(1,10)):
            continue
    if i==5:
        if subtraction(random.randint(1,10), random.randint(1,100)):
            continue
    if i==6:
        if subtraction(random.randint(1,100), random.randint(1,100)):
            continue
    if i==7:
        if multiplication(random.randint(1,10), random.randint(1,10)):
            continue
    if i==8:
        if multiplication(random.randint(1,10), random.randint(1,100)):
            continue
    if i==9:
        if multiplication(random.randint(1,100), random.randint(1,100)):
            continue 
    i+=1
    
    
print("Congrats you finished!")