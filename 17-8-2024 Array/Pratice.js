let arrValue = [40,50,46,16,67,25];

const failListt = arrValue.map((val1)=>{return val1+10})
.filter((val2)=>val2>40)
.reduce((acc,val)=>{
    return acc+=val
},0)


console.log("Total pass value",failListt);

