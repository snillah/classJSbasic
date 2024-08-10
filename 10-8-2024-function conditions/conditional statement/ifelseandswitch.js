let value = 23


if(value >40){
    if(value >90){
        console.log("D grade");
    }
    if(value>80 && value <=90){
        console.log("C grade");
    }
    if(value>70 && value <=80){
        console.log("b grade");
    }
    if(value>60 && value <=70){
        console.log("b grade");
    }
    if(value>50 && value <=60){
        console.log("a grade");
    }
    if(value>40 && value <=50){
        console.log("pass average");
    }
}else{
    console.log("failed");
    
}

console.log("Switch case");
let day =5;
switch(day){
    case 1: console.log("Moday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("WenDay");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("satursday");
    break;
    case 7: console.log("sunday");
    break;
    default:console.log("no day");
}
