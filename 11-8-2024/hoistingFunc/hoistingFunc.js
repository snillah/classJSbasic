
// normal function
funcCalling();

function funcCalling(){
    var varName = "user1";
    console.log("assgin inside function",varName);
}

//  Arrow function

// Calling before initialling
// funcVarCalling();

var funcVarCalling=()=>{
    let varName = "user1";
    console.log("assgin inside function",varName);
}

// calling after initialling
funcVarCalling();

//anonymous function assign in variable
let anoyFuncVarCalling = function(){
    let varName = "user1";
    console.log("assgin inside function",varName);
}
anoyFuncVarCalling();

// IIFE = immediate Invokation function excetion

(function (param){
    let varName = "user1";
    console.log("assgin inside function",varName + param);
})("kumar")

// number manuculation

(function (value1){
    let value2 =15;
    console.log("addtion",value1+value2);
})(12)
