def main():
    j = 7
    for i in range(1, 11, 2):
        for k in range(0, 3, 1):
            print(f'I={i} J={j}')
            j-=1;
        j+=5;

main();
