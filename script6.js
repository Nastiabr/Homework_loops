const calc = (a, b, op) => {
    let result;
  
    switch (op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
    }
  
    return result;
  };
  
  console.log(calc(10, 3, 1));
  console.log(calc(5, 2, 2));
  console.log(calc(9, 3, 3));
  console.log(calc(4, 7, 4));