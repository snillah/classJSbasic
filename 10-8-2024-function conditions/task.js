
function calc(action,num1,num2){
 let result
switch(action){
    case "add": result = num1 + num2;
    break;
    case "sub": result = num1 - num2;
    break;
    case "mul": result = num1 * num2;
    break;
    case "div": result = num1 / num2;
    break;
    case "remider": result = num1 % num2;
    break;
}
 return result
}
console.log("Result:",calc("sub",40,5));
