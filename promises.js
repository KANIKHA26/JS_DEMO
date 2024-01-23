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

// Program for winning or losing the toss
function istossed() {
  return Math.random() < 1; // always gives for winning
  //return Math.random() >1; //always gives for losing
}
function tossing() {
  return new Promise(function (win, loss) {
    setTimeout(function () {
      if (istossed()) {
        win("Hurray!...You won the task and What's your choice whether to Bat or to Bowl");
      } else {
        loss("Ufff.... you loss the toss....Better luck next time");
      }
    }, 1000);
  });
}
tossing()
  .then(function (message) {
  console.log(message);
})
  .catch(function (message) {
  console.log(message);
});

//example => google map
//location
//example => google map
//location
function isLocationValid(loc) {
    var v = "Melbourne"
    if (v === loc) {
        return true
    }
    else {
        return false
    }
}

function location() {
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
