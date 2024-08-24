// block scope
console.log("scope variable => let and const it show in script in inspection element");

if(true){
    let a =10;
    console.log(a);
    
}
// console.log(a);

// block scope 
console.log("access data in the scope and inside the scope");

if(true){
    let a =10;
    // console.log(a);
    if(true){
        let b =20;
        console.log("b value:",b,"access a and add with b",a + b);
        if(true){
            let c= a +b;
            console.log("a,b value is defined from upper scope and added",);
        }
    }
}
