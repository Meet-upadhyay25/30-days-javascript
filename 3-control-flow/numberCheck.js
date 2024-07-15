//Activity 1

// Task 1
let num = 0

if(num < 0){
    console.log("Number is Negative", num);
}else if(num > 0){
    console.log("Number is Postivie", num);
}else{
    console.log("Number is Zero", num);
}

//Task 3
let num1 = 100
let num2 = 50
let num3 = 40

if(num1 > num2){
    if(num1 > num3 ){
        console.log("Number 1 is greater among all", num1);
    }
}else if(num2 > num3){
    if(num2 > num1){
        console.log("Number 2 is greater among all", num2);
    }
}else{
    console.log("Number 3 is greater among all", num3);
}


let num5 = 5
console.log(num5 % 2 ===0 ? console.log("Number is even", num5): console.log("Number is odd", num5));