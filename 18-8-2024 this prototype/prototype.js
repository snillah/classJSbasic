const arr = [1,2,3,4,5,6,7,8]

Array.prototype.myThis = function(params) {
    console.log("this value", this);
}
arr.myThis(()=>{});

Array.prototype.myMap = function(params) {
    let temp =[];
    for(let i=0;i<this.length;i++){
        // console.log(this[i],i);
      temp.push(params(this[i],i))
    }
    return temp;
}

arr.myMap((val,i)=>{console.log(val,i);
})
