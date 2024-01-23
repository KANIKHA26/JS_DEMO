//callback
/*function ramusomu(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },2000)

}
function miniAni(){
    console.log("odi poiru!!!")

}
//miniAni()
ramusomu("Hello R and S \nWelcome to kec",miniAni)*/

//callback
//form submission example

function submitForm(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db();
    },2000)
}
function database(){
    console.log("Form submitted sucessfully")
}
submitForm("Form submit button clicked",database)