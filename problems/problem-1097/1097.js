function main() {
    let j = 7;
    for (let i = 1; i <= 9; i += 2) {
      for (let k = 0; k < 3; k++) {
        console.log(`I=${i} J=${j}`);
        j--;
      }
      j += 5; 
    }
  }
  
main();
