# Day-2 Operators

## Airthmetic Operators

The airthmetic operators is used to perform the basic operation of number operations and calculations.

**+,-,*,/,%** 

```js
let num1 = 20;
let num2 = 10;

console.log("The additon of two number is" , num1 + num2);
console.log("The substraction of two number is ", num1 - num2);
console.log("The multiply of two number is ", num1 * num2);
console.log("The divide of two number is ", num1 / num2);
console.log("The reminder of two number is ", num1%num2);
```

## Assigment Operator

kind of shortuct method of increment & decrement variable

```js
let num1 = 10;
num1 +=2;
console.log(num1);

let num2 = 2
num2 -= 1
console.log(num2);
```

## Comparison Operator

A comparison operator is compare between two values
```js
let num1 = 20
let num2 = 30

console.log("Num1 is less then number two",num1 < num2);
console.log("Num2 is greater then number one",  num1 > num2);

//checking type also
let a = 20
let b = "20"
console.log(a === b);
console.log(a !== b);

let c = 4
let d = 3
console.log(c <= d); 
console.log(c >= d);
```

## Logical Operator

logical operator is used to check between two condition AND or OR Opreator

```js
let a = 10;
let b = 10;
let c = 10 
let d = "10"
console.log(a==b && a===d); //true
console.log(a===b || a===d);//true
console.log(a !== d);
```

## Ternary Operator

shortest way to check conditions

```js
let num1 = 5
console.log(num1 >= 0 ? "Positive" : "Negative");
```