for (i = 0; i <= 2; i += 0.2) {
    for (j = 1; j <= 3; j ++) {
        let I = parseFloat(i.toFixed(1))
        let J = parseFloat((i +j).toFixed(1))
        console.log(`I=${I} J=${J}`)
    }
}
