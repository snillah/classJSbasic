const object1={
    name:"user1",
    age:26,
    company:"user company",
    role:"designer",
    taskList:[1,2,3,4],
    workHours:8,
    location:{
        state:"TamilNadu",
        city:"chennai"
    },
    "year-of-experience":5
}

let key = Object.keys(object1);
let i =0;
while(i<key.length){
    console.log("dot notation",object1+"."+`${[key[i]]}`);
    // Dot Natation
    i++;
}
