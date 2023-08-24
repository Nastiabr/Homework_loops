const randArray = k => {
    const array = [];
    for (let i = 0; i < k; i++) {
      const randomNum = Math.floor(Math.random() * 500) + 1;
      array.push(randomNum);
    }
    return array;
  };
  
  const result = randArray(5);
  console.log(result);