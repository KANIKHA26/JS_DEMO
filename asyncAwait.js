//saync dummy eg
async function asAw(){
    var promise = new Promise(function(response)
        {
            setTimeout(function(){
                response("eg for async or await")

            },1000);
        });
        console.log(await promise) //without giving await its output is results in promise bending,,eventhough we take async it results in promise bending
    }

asAw();
//kind of our own instagram

async function commentcode(){
    return new Promise( 
        function (commentvalue){
            setTimeout(function(){
                commentvalue("this is my first post comment icon")
            },1000);
        }
        
    )
}
async function likecode(){
    return new Promise(
        function(likevalue) {
            setTimeout(function(){
                likevalue("this is my first post like code")
            },1000);
        })

}
async function sharecode(){
    return new Promise(
        function(sharevalue) {
            setTimeout(function(){
                sharevalue("this is my first post share code")
            },1000);
        })
}
async function savecode(){
    return new Promise(
        function(savevalue) {
            setTimeout(function(){
                savevalue("this is my first post save code")
            },1000);
        })

}
async function vediocode(){
    return new Promise(
        function(vediovalue) {
            setTimeout(function(){
                vediovalue("this is my first post vedio code")
            },1000);
        })

}
async function post(){
    var post = new Promise(function(postresponse){
        setTimeout(function(){
            postresponse("this is my first post")
        },1000);
    });
    var [feed,comment,like,share,save,vedio] = await Promise.all([post,commentcode(),likecode(),sharecode(),savecode(),vediocode()]);
    
    console.log(await post)
    console.log(await comment)
    console.log(await like)
    console.log(await share)
    console.log(await save)
    console.log(await vedio)

}
post()
