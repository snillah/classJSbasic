
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
    default: result = "No such operation is there, please give valid operation"
}
 return result
}
console.log("add:",calc("add",40,5));
console.log("sub:",calc("sub",40,5));
console.log("new:",calc("err",40,5));