//functions
//eg 1 => functions without arguments and without return type

function fun1(){
    console.log("functions without arguments and without return type")
}
fun1()

//eg 2 => functions with arguments and without return type
/*function fun(a,b){
    console.log("functions with arguments and without return type")
    for(i=a;i<b;i++){
        if(i %2 ==0){
            console.log("the number",i," is even")
        }
        else{
            console.log("the number",i," is odd")
        }
    }
}
fun(5,10)
*/

//eg 3 => functions with arguments and with return type
function fun(a,b){
    console.log("functions with arguments and with return type")
    
        if(a %b ==0){
            //console.log("the number",i," is even")
            return a
        }
        else{
            //console.log("the number",i," is odd")
            return b
        }
    
}
console.log(fun(5,10))

//eg 4=> functions without arguments and with return type
function fun4(){
    a=10
    b=5
    console.log("Function without argument with return type example")
    if(a%b==0)
        {
            return a
        }
    else
        {
            return b
        }
}
console.log(fun4())
