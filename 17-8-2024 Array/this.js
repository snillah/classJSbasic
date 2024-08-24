const stuudentObj ={
    name:"user1",
    getMyName(){
        console.log("what is this");
        console.log("Calling Immediate parent Object",this);
        console.log("Calling Immediate parent Object eg getting Name:",this.name);
    }
};

stuudentObj.getMyName();