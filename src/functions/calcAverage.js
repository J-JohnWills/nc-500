function calcAverage(numbersIn) {
  let total = 0;
  let average = 0;

  if (numbersIn.length !== 0) {
    // some code
    for (let i = 0; i < numbersIn.length; i++) {
      total += numbersIn[i];
    }
    average = total / numbersIn.length;
    return average;
  } else {
    return average;
  }
}

export default calcAverage();
