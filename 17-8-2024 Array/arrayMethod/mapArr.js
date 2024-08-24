let mapArr1 =[2,3,4,5,6,7]


console.log("In array map method have parameter");

mapArr1.map((value,index,accArr) =>{
    console.log("value",value);
    console.log("index",index);
    console.log("accArr",accArr);
})

console.log("map method create New ARRAY");

const newMapArr2 = mapArr1.map((value)=>{
    return value * 5;
})
console.log(newMapArr2);
