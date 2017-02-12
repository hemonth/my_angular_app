"use strict";
var MyManager = function(){
var myMng = this;
myMng.products = ["Milk", "Bread", "Cheese"];
   	// myMng.quantity = ['1','2','3','4','5','6'];   //belongsto shop i guess
	myMng.inventoryProducts = ["Apple","Banana","Orange","Onion"];
	myMng.purchased = [];


	myMng.isValid = function () {
       return ((myMng.addMe !== '')||(myMng.addToList !== ''));
    };
    myMng.addItem = function () {
		if(myMng.isValid()){
        myMng.products.push(myMng.addMe);
		myMng.addMe ="";
		}
	};
    myMng.removeItem = function (x) {
        myMng.products.splice(x, 1);
    };
	 myMng.done = function (x) {
		 myMng.date = Date()	;
		 	myMng.purchased.push(myMng.products[x]);
         	myMng.inventoryProducts.push(myMng.products[x]);
         myMng.products.splice(x, 1);
    };

	/*  myMng.isValid1 = function () {
       return (myMng.addToList !== '');
    }  */
	myMng.addItem1 = function () {
		if(myMng.isValid()){
        	myMng.inventoryProducts.push(myMng.addToList);
		}
	};
	myMng.removeItem1 = function (x) {

        	myMng.inventoryProducts.splice(x, 1);
    };
	myMng.addItems = function (x) {
       return myMng.products.push(	myMng.inventoryProducts[x]);
    };

	 myMng.remove = function () {
		return myMng.display = "click to remove";
	};
	myMng.empty = function () {
		return myMng.display = " ";
	};
	myMng.markAsDone = function () {
		return myMng.display = "Mark as done";
	};
	myMng.addToDo = function () {
		return myMng.display = "Add to purchase ";
	};

};



angular.module("Manager",[])
.controller("MyManager",MyManager);
