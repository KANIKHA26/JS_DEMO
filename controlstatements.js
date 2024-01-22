//looping
//for loop
sum=0
for(var i=1;i<=10;i++){
    sum+=i
}
console.log(sum)

//while
var i=0
sum = 0
while(i<=10)
{
    sum+=i
    i++
}
console.log(sum) 

//do...while
var i=0
sum = 0
do
{
    sum+=i
    i++
}while(i<=10);
console.log(sum)*/

//eg 1
arr=[10,20,30] //valid array
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//eg 2
arr=[10,20.5,30] //valid array
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//eg 3
arr=[10,20,true,false] //valid array
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//eg 4
arr=[10,20,"string",true,"kongu"] //valid array
console.log(arr.length)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in loop
arr=[10,20,"string",true,"kongu"]
for(const index in arr){
    console.log("the value present in",index,"is",arr[index])
}

//for of loop
arr=[10,20,"string",true,"kongu"]
for(const value of arr){
    console.log(value)
}

//for each loop
//eg 1 ->to explain in depth while teaching es6
arr=[10,20,"string",true,"kongu"]
arr.forEach(value => {
    console.log(value)
});
 
//eg 2
var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"]="nice"
kongu["food"]="decent"
kongu["hostelcount"]=10
console.log(kongu) 

//for in eg => output=key
for(const key in kongu){
    console.log(key,kongu[key])
}

//for each eg
kongu.forEach(key,element => {
    console.log(key,element)
    
});

//foe of eg




