var arr=[2,3,4,5,5,5,7,7,7,8,9,3,6]

var temp={}
var min_occ = 1;
var max_value =[];

for(let i =0;i<arr.length;i++){
    let ele = arr[i]
    // if(ele === temp[ele]){//worng
    if(temp[ele]){
        temp[ele]+=1;
    }else{
        temp[ele]=1
    }
    if(temp[ele]>min_occ){
        min_occ = temp[ele]
        max_value=[ele] 
    }

}
console.log("Object value",temp);
console.log("Higher value",max_value);
