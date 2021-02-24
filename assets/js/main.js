console.log("%c js on", "color:green;")

// * 1_1 math.pi
console.log("%c 1_1 math.pi", "color:yellow;")

console.log(Math.PI)
let piNum = Math.PI;
let roundedPi = piNum.toFixed(2)
console.log(roundedPi)

// * 1_2 math.round
console.log("%c 1_2 round", "color:yellow;")

function roundIt(x) {
    return Math.round(x)
}
roundIt2 = (x) => Math.round(x);

var array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

for (let i in array) {

    console.log("the number " + array[i] + " wird zu " + roundIt2(array[i]) + " abgerundet")
}

// * 1_3 math.random + floor
console.log("%c 1_3 random+floor", "color:yellow;")
let randomNum = Math.random().toFixed(2)
console.log("refresh page to change: " + randomNum)
let randomNum10 = Math.floor(Math.random() * 11)
console.log("refresh page to change: " + randomNum10)
let randomNum100 = Math.floor(Math.random() * 101)
console.log("refresh page to change: " + randomNum100)

// * 1_4: Math.min Math.max
console.log("%c 1_4 Math.min Math.max", "color:yellow;")

let array2 = [393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488,
]
console.log(Math.min(...array2))
console.log(Math.max(...array2))

// * 2_1: Math.round() toFixed()
console.log("%c 2_1 Math.round() toFixed()", "color:yellow;")
roundTo = (x, y) => x.toFixed(y)
console.log(roundTo(Math.PI, 5))


// * 2_2: Math.random() Math.floor() Game
console.log("%c2_2: Math.random() Math.floor() Game", "color:yellow;")
console.log("Rate Zahl von 0 bis 10")
let randomNum2 = Math.floor(Math.random() * 11)

// console.log(randomNum2)

//todo: uncomment the block below for the game
//! block anfang for the game
// let guessingNum = prompt("Enter the number");
// if(guessingNum == randomNum2){
//     console.log("TREFFER!")
// } else {
//     console.log("Falsch, die Zahl war " + randomNum2)
// }
//! block END for the game


// * lev2_3: Math.min Math.max
console.log("%clev2_3: Math.min Math.max", "color:yellow;")
let arrayAlterEltern = [55, 57]
let arrayAlterGeschwister = [19, 2, 7, 12]
let arrayAlterFussballer = [23, 26, 19, 15, 37]
let anyNumberOfNumbers = [-7, 15, 101, 23, 26, 19, 15, 37]


function minimalWerte(someNumArray) {
    console.log("das minimale Alter in der betroffener Gruppe ist: " + Math.min(...someNumArray))
}
minimalWerte(arrayAlterEltern)
minimalWerte(arrayAlterGeschwister)
minimalWerte(arrayAlterFussballer)
minimalWerte(anyNumberOfNumbers)


// * 1_1:  Date
console.log("%c1_1:  Date", "color:orange;")
const dateAusgabe = document.getElementById("date_ausgabe")
date1 = new Date("September 2, 2019 09:00:00")
date2 = new Date(0)
date3 = new Date(31556908800)
date4 = new Date(86400000)
dateAusgabe.innerHTML = date1 + "<br>" + date2 + "<br>" + date3 + "<br>" + date4

// * 1_2:  Date
console.log("%c1_2:  Date", "color:orange;")
var d = new Date;
console.log(d)
console.log(d.getMonth() + " " + "Monat")
console.log(d.getDay() + " " + "Tag")
console.log(d.getHours() + " " + "Stunde")
console.log(d.getMinutes() + " " + "Minuten")
console.log(d.getSeconds() + " " + "Seconds")
//! below is bad solution for big databases//  
console.log(d.toLocaleString('en-us', { weekday: 'long' }))
console.log(d.toLocaleString('en-us', { month: 'long' }))

const someUhr = document.getElementById("someUhr")

let hourNow = d.getHours();
let MinutNow = d.getMinutes();
let secondNow = d.getSeconds();
someUhr.innerHTML = hourNow + ":" + MinutNow + ":" + secondNow

var myVar = setInterval(showTime, 1000)
function showTime() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("someUhr").innerHTML = t + "<br>";
    //? changing things
    let hourNow = d.getHours();
    let MinutNow = d.getMinutes();
    let secondNow = d.getSeconds();
    someUhr.innerHTML += MinutNow + ":" + secondNow
}

// * 1_3:  Date
console.log("%c1_3:  Date", "color:orange;")
console.log(d)
var c = new Date("February 10, 2222 13:25:11")
console.log(c)
c.setDate(c.getDate() + 5)
console.log(c.getDate())
console.log(c)
var c2 = c.setDate(15)
console.log(c2)
const event1 = new Date('August 19, 1990 23:15:00')
event1.setDate(24);
console.log(event1.getDate())

// * 1_4:  Date
console.log("%c1_4:  Date", "color:orange;")

let someDate = new Date(2010, 2);
console.log(someDate)

console.log(someDate.getDay()+1)

let getDaysInMonth = (month, year) => new Date(year,month,0).getDate()

console.log(getDaysInMonth(2,2021))
console.log(getDaysInMonth(1,2021))
console.log(getDaysInMonth(3,2021))
console.log(getDaysInMonth(4,2021))

// * 1_5:  Date
console.log("%c1_5:  Date", "color:orange;")
list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  let someDate2 = new Date("2001,1,4")
  console.log(someDate2.getMonth())
  function monatsName(x){
      let someDate2 = new Date(x)
      console.log(list[someDate2.getMonth()])
  }
  monatsName("2001,1,4")
  monatsName("2019,12,24")
  monatsName("1410,07,15")

// * 1_6:  Date
console.log("%c1_6:  Date", "color:orange;")

function checkDayMiddle(year,month,day,hour){
    let someDate = new Date(year,month,day,hour)
    someDate.getHours()>12 ? console.log("PM") : console.log("AM")
}
function checkDayMiddle2(someDate3){
    someDate3.getHours()>=12 ? console.log("PM") : console.log("AM")
}
checkDayMiddle(1995,11,17,12)
date1 = new Date(1995,11,17, 12)
checkDayMiddle2(date1)

// * 1_7:  Date
//? weil es von anfang an von 0 und ohne Unterbrechungen gezählt wird,
//? braucht man keine extra funktionen für Wochentagberechnung

console.log("%c1_7:  Date", "color:orange;")

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
date2 = new Date()
date3 = new Date("2019,12,15")
var day = days[date3.getDay()]
console.log(date2)
console.log(day)

function showWeekDay(someDate){
    var day = days[someDate.getDay()]
    if(day == "Sunday" || day == "Saturday"){
        console.log("Wochenende")
        return "Wochenende"
    } else{
        console.log("Arbeitstag")
        return "Arbeitstag"

    }
    console.log(day)
}
console.log(days[date3.getDay()])
showWeekDay(date3)
let someTestingVar = (showWeekDay(new Date()))
console.log(days[new Date().getDay()])
console.log(someTestingVar)