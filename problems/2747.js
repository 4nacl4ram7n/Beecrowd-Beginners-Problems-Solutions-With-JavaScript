for (let i = 0; i < 7; i++) {
    let stringImpressa = "";

    for (let j = 0; j < 39; j++) {
        if (i === 0 || i === 6) {
            stringImpressa += "-";
        } else {
            if (j === 0 || j === 38){
                stringImpressa += "|";
            } else {
                stringImpressa += " ";
            }
        }
    }
    console.log(stringImpressa);
}   