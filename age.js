function calcElapsed(dateArg){
    const now = new Date();
    const chosenDate = Date.parse(dateArg);
    const elapsed = now - chosenDate ;
    const differenceInYears = Math.floor(elapsed/(1000*3600*24*365));
    console.log(differenceInYears);
    return differenceInYears
}
calcElapsed('2022-10-16');