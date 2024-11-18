// "use strict";
// var let = 10;
// console.log(let);

//Example-1
var a;
console.log(a) //Undefined

//Example-2
var a;
console.log(a);
a = 10;
a = 20;
console.log(a);   //output: undefined, 20;

//Example-3
var a ;
console.log(a);
a = 10;
a = 20;
var a;
console.log(a); //output: undefined 20

//example-4
var _name = "Javascript";
console.log(name); //Output: Prints an empty string because name is predefined keyword in js which stores an empty string by default;

//example-5
var _name = "Javascript";
console.log(_name);
//console.log(_Name); //Output:Javascript, Reference Error: _Name is not defined

//Example-6
a = 30; 
console.log(a); //output: 30, Here the auto variable working behind the scenes and returning value=30;


//Example-7
var var = 30;
 console.log(var);

//Example-8
var let = 30;
console.log(let) //output: 30

//Example-9
var const = 30;
console.log(const); //output:


//Example-10
var $name = "Javascript";
console.log(123);

