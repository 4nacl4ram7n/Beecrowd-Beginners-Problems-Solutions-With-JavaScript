counter_alcool = 0
counter_gasolina = 0
counter_diesel = 0

while True:
    try:
        combustivel = int(input())
        if combustivel == 1:
            counter_alcool += 1
        elif combustivel == 2:
            counter_gasolina += 1
        elif combustivel == 3:
            counter_diesel += 1
        elif combustivel == 4:
            break
    except ValueError:
        pass

print("MUITO OBRIGADO")
print(f"Alcool: {counter_alcool}")
print(f"Gasolina: {counter_gasolina}")
print(f"Diesel: {counter_diesel}")
