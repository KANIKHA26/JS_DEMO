/*function mattikittaraja(){
    return 1;
}
function ramusomu(){
    return new Promise(function(successfull,unsuccessfull){
        setTimeout(function(){
            if(mattikittaraja()){
                unsuccessfull("thapuchuta")


            }
            else{
                successfull("welcome to kec")

            }

        },2000)
    }

    )
    
}
function miniAni(){
    console.log("odi poiru!!!")

}
//miniAni()
ramusomu().then(function(message)){
    console.log(message);
};*/

function isAuthenticated() {
    return Math.random() < 1; //>1 not successfull is output  
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });