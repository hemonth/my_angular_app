"use strict";
var Person = function(name,age){
  this.name = name;
  this.age= age;
 this.getDetails = function(){
   console.log("name: "+this.name+" age: "+this.age);
 };
};
// Person.prototype.stop1 = function(){
//   console.log("please stop "+ this.name);
// };
var utilFun = function() {
  this.promotion =  function(){
    console.log("you got a promotion!!");
  };
  this.congrats = function(){
    console.log("congratulations!!"+ this.name);
  };
  this.stop1 = function(){
     console.log("please stop "+ this.name);
  };
};
Person.prototype = new utilFun();


// Person.prototype.getDetails = function(){
//   console.log("name:"+ this.name + "age:"+ this.age);
// }

// var p1 = {};
// p1.__proto__ = Person.prototype;
// Person.call(p1,"hemonth",21);
// var p2 = {};
// p2.__proto__ = Person.prototype;
// Person.call(p2,"Ram",25);
// var p3 = {};
// p3.__proto__ = Person.prototype;
// Person.call(p3,"Ajay",20);
var p1 = new Person("hemonth",21);
var p2 = new Person("Ram",25);
var p3 = new Person("Ajay",11);
p1.work = function(){
  console.log(p1.name+" is a software engineer.");
};
// p1.getDetails();
// p2.getDetails();
// p3.getDetails();
// p1.work();
// p2.stop1();
// p3.stop1();
// p1.congrats();
// p3.congrats();

for(var property in Person){
  console.log(property + "--"+ Person[property]);
 }
