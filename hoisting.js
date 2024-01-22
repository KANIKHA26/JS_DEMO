
//Hoisting
//variable hoisting

console.log(a) //=> o/p :undefined
var a =10  //var =>global scope

console.log(a)  // => o/p: reference error
let a =10


//functional hoisting
konguclg(5,10)
function konguclg(a,b){
    
       // console.log("functions with arguments and without return type")
        for(i=a;i<b;i++){
            if(i %2 ==0){
                console.log("the number "+i+" is even")
            }
            else{
                console.log("the number "+i+" is odd")
            }
        
    }

}
