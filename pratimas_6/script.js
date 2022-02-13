//Sukurkite kintamajį pavadinimu speed ir priskirkite jam betkokį skaičių.
//Parašykite programą kuri atvaizduotų kokia kelia dango galima važiuoti tokiu greičiu. 
//Panaudokite switch case operatorių.  
let speed = 89;
let roadType = ["Kituose keliuose", " ,keliuose su asfalto ar betono danga", " ,greitkeliuose", ", automagistraliese"]; 
//if (speed < 90) 
//    speedLimit = 1;
//else if (speed < 110)
//    speedLimit = 2;    
//else if (speed < 130)
//    speedLimit = 3;    
//else if (speed = 130)
//    speedLimit = 4; 
//else if (speed > 130)
//    speedLimit = 5;   
let limit = (speed < 90)? speedLimit = 1 
    : (speed < 110)? speedLimit = 2
    : (speed < 130)? speedLimit = 3
    : (speed > 130)? speedLimit = 4
    : speedLimit = 5;    
switch (speedLimit) {
    case 1 : document.write("Gali važiuoti: "  + roadType[0]); break;
    case 2 : document.write("Gali važiuoti: "  + roadType[0] + roadType[1]); break;
    case 3 : document.write("Gali važiuoti: "  + roadType[0] + roadType[1]+ roadType[2]); break;
    case 4 : document.write("Gali važiuoti: "  + roadType[0]+ roadType[1]+ roadType[2]+ roadType[3]); break;
    default : document.write("Vaziuoti draudziama!!!");
};

//Extra: Sukurkite boolean variable kuris nurodytų ar dabar yra šiltas sezono metas ar šaltas sezono metu.
//Pridėkite jį switch case operatorių 
const todayDate = new Date();
const summerDate = new Date('April 10, 2020 11:10:05');
const winterDate = new Date('November 10, 2020 11:10:05');
let season; 

new Intl.DateTimeFormat().format(todayDate);
new Intl.DateTimeFormat().format(summerDate);
new Intl.DateTimeFormat().format(winterDate);
document.write("<br/>" + Date());

if (todayDate.getMonth() > summerDate.getMonth() && todayDate.getMonth() < winterDate.getMonth()) {  
    season = 1;    
} 
else
    season = 2;

switch (season) {
    case 1 : document.write("<br/>" + "Vasaros sezonas");    
    case 2 : document.write("<br/>" + "Žiemos sezonas");    
}

//Darbas užeme apie 1 valanda. (Netobulai, data skaičiuojasi tik pagal menesius).