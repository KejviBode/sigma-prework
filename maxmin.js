function minMaxArray(arrayArg){
  let maxNum=arrayArg[0];
  let minNum=arrayArg[0];
  arrayArg.map( num => (num>maxNum)? maxNum=num:
    (num<minNum) ? minNum = num : num);
  console.log([minNum,maxNum])
  return [minNum,maxNum]
}

minMaxArray(array)