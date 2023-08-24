const funcName = arr => {
    const numbersArray = [];
    const otherArray = [];
  
    for (const item of arr) {
      if (typeof item === 'number') {
        numbersArray.push(item);
      } else {
        otherArray.push(item);
      }
    }
  
    return [numbersArray, otherArray];
  };
  
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = funcName(arr);
  console.log(arrNew);