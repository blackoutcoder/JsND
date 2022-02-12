//Parašyti kiekvieno tipo (number,string ir t.t.) po tris kintamuosius (variables).
//Kintamieji turi būti užvadinti naudojant camelCase praktika. 
//Sugalvokite logiškus kintamuosius kurie galėtų būti pritaikyti programavime.
let motherName = "Sara"; //string
let fatherName = "John"; //string 
let familyName = "Walker"; //string
document.write(motherName + " " + familyName);

let carPrice = 5000; //number
let carAge = 5; //number
let myBudget = 4000; //number
document.write("<br/>" + "Car price is: " + carPrice + "<br/>" + "You have: " + myBudget);

const myBirthDate = 1984; //Konstanta
const piNumber = 3.14; //Konstanta
const freeFlightSpeed = 9.8; //Konstanta

const fruitName = ["Apple", "Orange", "Banana"]; //Array 
const speedLimit = [50, 110, 130]; //Array
const simpleLogicalOutput = [true, false, null]; //Array
document.write("<br/>" + "Max speed limit: " + speedLimit[2] + " KM/h");

const jobDone = 1;
const jobNotDone = 0; 
let xBool;
xBool = jobDone > jobNotDone;
document.write("<br/>"+ "Job is done? - " + xBool);

//darbas užeme 10-15 min.