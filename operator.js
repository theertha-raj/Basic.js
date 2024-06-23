//arithmatic operators
let x,y;
function operator(x,y){
    let add = x+y;
    let sub =x-y;
    let mul =x*y;
    let div =x/y;
    let mod =x%y;
    let expo =x**y;
    //logical operators
    let and =x&&y;
    let or =x|y;
    //comparators
    {
        if(x==y){
        console.log("x and y are equal");
    }
    else{
        console.log("x and y are not equal");
    }
    }
    {
        if(x<y){
        console.log("x is less than y");
        }
        else{
            console.log("x is gretter than y");

        }
    }
    {
        if(x>y){
            console.log("x is gretter than y");
        }
        else{
            console.log("x is less than y");
        }
    }
    {
        if(x>=y){
            console.log("x is gretter than y");
        }
        else{
            console.log("x is equal to y");
        }
    }
    {
        if(x<=y){
            console.log("x is less than y");
        }
        else{
            console.log("x is equal to y");
        }
    }



    return{add,sub,mul,div,mod,expo,and,or};


}
console.log(operator(8,3));