//objects
//how to declare objects.
// 1 st way
var customerdetails ={
    "Name":"kha",
    "age":20,
    "phone no":"6534889665",
}
console.log(customerdetails)
customerdetails["id"]="21ecro95"
console.log(customerdetails)

// 2nd way to declare objects

var customerdetails = {}
customerdetails["id"]="21ECR095"
customerdetails["name"]="kha"
customerdetails["age"]="20"
customerdetails["phone"]="7475835878936"
console.log(customerdetails)

//3 rd way to declare objects

var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"]="nice"
kongu["food"]="decent"
kongu["hostelcount"]=10
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostelcount"])
console.log(kongu["hostel"]=11) //printing by this way also