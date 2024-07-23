function checkEvenOrOdd(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Please enter a valid number";
  }

  return num % 2 === 0 ? "even" : "Odd";
}

// console.log(checkEvenOrOdd(2));

function square(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Please enter a valid number";
  }

  return num * num;
}

console.log(square(8));
