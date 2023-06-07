console.log("Hello World");
var x = "Programing hub";
console.log(x);
var a = 6;
var b = 8;
var z = a + b;
console.log(z);
var a_s = ["only", "have", "strings"];
var a_n = [1, 2, 3, 40];
var students = ["Alex", "Carmina", "Glosaryck", "Jason"];
// Para imprimir cada array
console.log(students[0]);
var i;
for (let i = 0; i < 5; i++) {
  console.log("We love JS");
}
i = 1;
do {
  console.log("We love nights;");
  i++;
} while (i < 5);

// alert("I´m a cool dude");
// prompt("What´s yout name?");
// confirm("Do you want to delete?");

a = 15;
b = 35;
var c = 0;

c = adition(a, b);

console.log(c);

function adition(x, y) {
  var z = x + y;
  return z;
}

var globalvar = 5;

// this print the variable when we call the function
function newfunction() {
  console.log(globalvar);
}

// this print the variable too
console.log(globalvar);

// we will call de function

newfunction();

var str = "My love in you";
var z = str.length;
console.log(z);

var x = str.substring(3, 14);
console.log(x);

x = str.toUpperCase();
console.log(x);

x = str.toLowerCase();
console.log(x);

var y = 25.365;
var d = y.toPrecision(4);
console.log(d);
