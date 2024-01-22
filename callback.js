//callback
function ramusomu(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },2000)

}
function miniAni(){
    console.log("odi poiru!!!")

}
//miniAni()
ramusomu("Hello R and S \nWelcome to kec",miniAni)