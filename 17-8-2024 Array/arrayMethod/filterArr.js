let filterArr1 =[2,4,5,6]


console.log("In array filter method have parameter");

filterArr1.filter((value,index,accArr) =>{
    console.log("value",value);
    console.log("index",index);
    console.log("accArr",accArr);
})

console.log("filter method create New ARRAY");

const newfilterArr2 = filterArr1.filter((value)=>{
    // return value * 5; it doesn't give boolen value
    return value!=5
})
console.log(newfilterArr2);
