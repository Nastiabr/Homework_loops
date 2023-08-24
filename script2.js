const printSequence = (a, b) => {
    for (let i = a; i <= b; i++) {
      for (let j = 1; j <= i - a + 1; j++) {
        console.log(i);
      }
    }
  };

  printSequence(1, 3); // 1, 2, 2, 3, 3, 3
  printSequence(2, 5); // 2, 3, 3, 4, 4, 4, 5, 5, 5, 5