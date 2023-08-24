const compact = array => {
    const uniqueArray = [];
  
    for (const item of array) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  };
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2);