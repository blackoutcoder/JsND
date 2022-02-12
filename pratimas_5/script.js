//Sukurkite kintamajį pavadinimu age ir jam priskirte betkokią reiškmę (skaičių). 
//Parašykite programą kuri atvaizduotų kokiai generation(kartai) priklauso. 
//Susikurkite papildoma variable generation ir panaudokitę ternary išraišką.  

let age = 91;
if (age >= 10, age <= 25) 
    document.write("Gen Z");
else if (age >= 26, age <= 41)
    document.write("Millenials");
else if (age >= 42, age <= 57)
    document.write("Gen X");
else if (age >= 58, age <= 67)
    document.write("Boomers II");
else if (age >= 68, age <= 76)
    document.write("Boomers I");
else if (age >= 77, age <= 94)
    document.write("Post War");
else if (age >= 95, age <= 100)
    document.write("WW II");
else 
    document.write("Probably you are a Baby or an Old man")    


let generation = (age >= 10, age <= 25)? "Gen Z" 
    : (age >= 26, age <= 41)? "Millenials"
    : (age >= 42, age <= 57)? "Gen X"
    : (age >= 58, age <= 67)? "Boomers II"
    : (age >= 68, age <= 76)? "Boomers I"
    : (age >= 77, age <= 94)? "Post War"
    : (age >= 95, age <= 100)? "WW II"
    : "Probably you are a Baby or an Old man";
    document.write("<br/>" + generation);
//darbas užeme ~20 min.