function greetingUser(personName, age = 18) {
  return `Hello ${personName} How are you? Your age is ${age}`;
}

// console.log(greetingUser("Meet"));
// console.log(greetingUser("Meet", 25));

function productDetail(prodName, prodDescriptin = "Theere is no description") {
  return `${prodName} is this. and description ${prodDescriptin}`;
}
