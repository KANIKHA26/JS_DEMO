//global scope
sum=0 //declared as an global
console.log("global scope")
for(var i=1;i<10;i++){
    
    sum+=i
}

console.log(sum)

//while
var i=0
//sum = 0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum) 

//do...while
var i=0
//sum = 0
do
{
    sum+=i
    i++
}while(i<10);
console.log(sum) 

//localscope
console.log("local scope")
for(var i=0;i<5;i++){
    console.log(i+11)
}
console.log(i)
    
//block scope

var a=10;

console.log(a)
{
    let a=5; //if we use let here it only conside a as 5 in inside part only ,if we didn't use let the outside a is print as 5
    let b=5;
    console.log(b)
    console.log(a)
}
//console.log(b) =>reference error
console.log(a)

var a=10;

// here without using let the a value will change outside also 
console.log(a)
{
    a=5; 
    let b=5;
    console.log(b)
    console.log(a)
}
//console.log(b) =>reference error
console.log(a)

