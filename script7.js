const findUnique = arr => {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  };
  
  console.log(findUnique([1, 2, 3, 5, 3]));
  console.log(findUnique([1, 2, 3, 5, 11]));