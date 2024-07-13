# Day1 - Varibales & Data-Types

## Variable Declaration
Three ways to declare variable
1. var
2. let
3. const

```js
//var
var num1 = 5
console.log(num1);

//let
let greet = "30 Days Javascript Challange"
console.log(greet);

//const
const isActive = true
console.log(isActive);
```

## Data Types

1. number
2. boolean
3. Array
4. object
5. string

```js
let salary = 5000
let userName = "Thor"
let isActive = true
let skills = ["JS", "React", "Next", "Angular", 500, 800]
let user = {
    name:"Spiderman",
    address:{
        city:"Mumbai",
        zipcode:546858
    },
    role:"Admin"
}
console.log(typeof salary);
console.log(typeof userName);
console.log(typeof isActive);
console.log(typeof skills);
console.log(typeof user);
```

## Reassigning Variables

**Let** - after assign intial value we can re-assign value of let variable.

```js
let salary = 500
console.log(salary); // 500
salary = 8000;
console.log(salary); //8000
```

## Understanding const
Reassign const variable it gives type error

```js
const greet = "hello"
console.log(greet);
```

### Bonous Learning

Diff between TypeError and syntax error

```js
// let salary = 200
// const salary = 500
let salary = 8200
console.log(salary);
salary = 9000
console.log(salary);
// const salary //syntax error : Identifier has been declared
const score = 0
score = 2 //typeError : Assigment to constant Variable
```