//SET
//1 st eg
setExample=new Set(["aiadmk","bjp","congress"])
console.log(setExample)
setExample.add("dmk")
setExample.add("aiadmk")
console.log(setExample)
setExample.add("dmk")

//for of =>output value
for(const value of setExample){
    console.log(value)
}
//for in => no output
for(const key in setExample){
    console.log(key)
}

//for each eg =>output value
setExample.forEach(value => {
    console.log(value)
});

//MAPS

mapEg = new Map([
    ["id","21ecr095"],
    ["name","kha"],
])

console.log(mapEg) 
//for of=> return output [key,value]
for(const value of mapEg){
    console.log(value)
}
//for in => no output
for(const key in mapEg){ 
    console.log(key)
}

console.log(mapEg.has("name2"))
mapEg.set("age","20");
mapEg.set("phone","646287587348");
console.log(mapEg) 
mapEg.delete("phone")
console.log(mapEg)
