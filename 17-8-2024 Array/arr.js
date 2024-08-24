
// declaration of Array 
var arr = [1, "saran", true, {language: ["Tamil","English"]},playing=["chess","footbal","cricket"]]

console.log("declare array",arr);

// copy

// Normal variable VS array variable / object varaible

console.log("Copy By Value VS Copy by reference");

console.log("Copy by Value");
console.log("Copy by value of Number,String,Boolean");
let a = 15;
let b = 20;
console.log("a :",a,"b :",b);
// copy by value 
console.log("b value assign to a, like 'a = b'");
a= b;
console.log("a value:",a);
b=22
console.log("change b value as 22/rose/false:",b);
// b= 22;
// b ="rose"
console.log("a :",a,"b :",b,"This is call by value=> it doesn't change the value of 'a'");
console.log("Answer : the Address of the 'a' and 'b' are not same, so it not changing the value of a");
console.log(".............................................................");

console.log("Copy by value of Array by using spread operator");
let arr11 = [1,2,3,4,5,6]
console.log("arr1",arr11);
let arr12 = [...arr11]
console.log("arr2",arr12);
arr11[2] =30
console.log("changes in arr11[2]=30 arr1",arr11);
console.log("arr2",arr12,"result changed");



console.log("============call by Reference=========================");
console.log("The string/boolean/number cann't do call by reference");

console.log("........................................................");

console.log("Copy by Reference of Array");
let arr1 = [1,2,3,4,5,6]
console.log("arr1",arr1);
let arr2 =arr1
console.log("arr2",arr2);
arr1[2] =30
console.log("changes in arr1[2]=30 arr1",arr1);
console.log("arr2",arr2,"result changed");
arr2[1] =20
console.log("arr1",arr1,"result changed");
console.log("changes in arr2[1]=20 arr2",arr2);