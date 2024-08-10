console.log("Working function");

// function

//declaration of function

//function citizen no return
console.log("function no returns")
function sumNoReturn(){
    let a= 10;
    let b= 25;
    console.log(a+b);
}
console.log(sumNoReturn);

// function invokation or invokation function
console.log("function invokation");
sumNoReturn(); 
// function get error
// sumNoReturn()();

console.log("function no return",sumNoReturn());

console.log("function with returns")
function sumWithReturn(){
    let a= 10;
    let b= 25;
    return a +b;
}
console.log(sumNoReturn);
console.log("function invokation below it doesn't show in browser");
sumWithReturn();
console.log("function invokation in console.log",sumWithReturn());
let value = 45
let value1 = sumWithReturn()
console.log("normal value",value,"function stored in variable",value1)