var MyCtrl =  function($http){
	var obj = this;
	obj.name = "hemonth";
	obj.vegetables =[];
	// 	obj.name1 = "jethin";
	// obj.vegetables = ['onion','brinjal'];

	 $http.get("C:/Users/HEMONTH/Desktop/desktop//java/angular js/code/vegetables.json").then(function(response){
     obj.vegetables = response.data;
     });
};
 var myDirec =  function(){
	    return {
		          template : 'Welcome User!'
		       };
				 };
var myCustomer = function() {
  return {
    templateUrl: 'test.html'
  };
};


angular.module('myShoppingList',[])
       .controller('MyCtrl',MyCtrl)
        .directive('myDirec', myDirec)
		.directive('myCustomer', myCustomer);
