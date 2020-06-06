//=== compares type and value
//NEVER USE MIXED DATA TYPES IN AN ARRAY. var array = [40.34, "janef", false] <--- NO NO
//can't have vars above where you declare them, even if the var is a function.
var string1 = "86";
var string2 = "85";
if(string1 === string2){
   alert("HOT SINGLES IN YOUR AREA");
   alert('SERIOUSLY'); //in Javascript, double and single quotes are the same
   alert("REALLY MAN??"); 
}else{
    alert(60);
}
this.road = "Saldinha";

function Garbage(contents, full, bagType){
    this.contents = contents;
    this.full = full;
    this.bagType = bagType;
    this.takeOut = function(){
        this.contents = "none";
        this.full = false;
    }
}

var garb = new Garbage("trash", true, "glad");
console.log(garb);
garb.takeOut();
console.log(garb);
var car = {
    road: "OBT",
    model: "Nissan",
    year: "2013",
    getRoad: function(){
        return this.road;
    }
};
console.log(car.getRoad.bind(car));
function Teacher(name, age) {
    this.name = name;
    this.age = age;
    this.scold = function(who){
        return "get back to work " + who + "!";
    }
}
var lisa = new Teacher("Lisa", 34);
console.log(lisa.name);
console.log(lisa.scold("Charles"));
var students = ["Timmy", "Janesé", "Esteban Julio Ricardo Montoya de la Roza Ramirez"];
for(var i = 0; i < students.length; i++){
    console.log(students[i]);
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
students.slice(0, 1);
students.sort();
students.push("fje");
students.sp
console.log(students);
console.trace();





var mathOps = [];
mathOps.push(factorial, absVal, exponent);
console.log(mathOps[2](8, 3));
console.log(factorial(5));
console.log(factorial(-1));
var factorials = [];
for(var i in array){
    //factorials.push(factorial(array[i]));
   factorials[i] = factorial(array[i]);
}
console.log(factorials);
var sayWassup = function(string){
    console.log("Hey " + string);
}
sayWassup("charlie");
