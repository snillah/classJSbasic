// reduce
console.log("Reduce Method");


let reduceArr = [2,3,4,5,6]

console.log("Starting Initial value is 0 for acc");

reduceArr.reduce((acc,val,index,arr)=>{
    console.log("accumulater", acc);
    console.log("Current value",val);
    console.log("Index",index);
    console.log("array",arr);
    return acc+=val;
},0)



// console.log("we can assign Initial value is 10");

// reduceArr.reduce((pv,cv,index,arr)=>{
//     console.log("previous value",pv);
//     console.log("Current value",cv);
//     console.log("Index",index);
//     console.log("array",arr);
    
// },10)
console.log("Example of reducer");

const reduceTotal =reduceArr.reduce((acc,val)=>{
   return acc = acc+val;
})
console.log("TotalValue :",reduceTotal);
