/*
//ES6 -> ECMA script 6 standard
//1. var,let.\,const ->refer variable.js
//2.arrow function

var func = ()=>{
    console.log("hello")
}
func()


//3.destructuring operator
var array =[10,20,30,40]
var [a,b,c,d] = array
console.log(a,b,c,d)
*/

//4.spread operator

var array =[10,20,30,40,50]
var arr1 = [...array,60,70]
console.log(arr1)

//callback the arrow operator done  (function change as var and exibit arrow operator there)
var submitForm=(buttonclick,db)=>{
    setTimeout(function(){
        console.log(buttonclick)
        db();
    },2000)
}
function database(){
    console.log("Form submitted sucessfully")
}
submitForm("Form submit button clicked",database)


//promise the arrow operator done  (function change as var and exibit arrow operator there)
//example => google map
//location
var isLocationValid=(loc)=> {
    var v = "Melbourne"
    if (v === loc) {
        return true
    }
    else {
        return false
    }
}

var location=()=> {
    //design entire new promise
    return new Promise(function (response, errorMsg) {
        setTimeout(function () {
            loc = "Melbourne"
            console.log("the location is", loc)
            if (isLocationValid(loc)) {
                return response("Location found")
            }
            else {
                return errorMsg("Location Not Found")
            }

        }, 2000)
    });
}

location()
    .then(
        function (response) {
            console.log(response)
        }
    )
    .catch(
        function (errorMsg) {
            console.log(errorMsg)
        }
    )


//async or await
//async dummy eg
async function  asAw(){
    var promise = new Promise((response)=>
        {
            setTimeout(()=>{
                response("eg for async or await")

            },1000);
        });
        console.log(await promise) //without giving await its output is results in promise bending,,eventhough we take async it results in promise bending
    }

asAw();
