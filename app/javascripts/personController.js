var MyPerson = function($http,$filter,$document,$timeout){
	var p =this;

	p.persons = [];
	p.Person = {name:"",email:"",place:""};
	p.subscribeMessage = "Thanks for subscribing!!";
	p.updateMessage = "fill the below details";
	 p.filter = function(x){
	            var orderBy = $filter('orderBy');
				return orderBy(x,['name','age'],false);
	}
     p.getPersons = function(){
		$http.get('/person.json')
		.success(function(data){
			p.persons = data;
		});
	}
	// p.addPersons = function(){
	// 		p.updateMessage = "updating..";
	// 	$http.post('/person.json',p.Person).then(successCallback
	// 	.success(function(data){
	// 		p.Person = {};
	// 		p.updateMessage = data;
	// 		//$timeout(p.updateMessage,5000);
	// 		p.getPersons();
	// 	});
	// }

	p.addPersons = function(){
		console.log(p.Person);
		p.subscribe = true;
		$http.post('/person.json', p.Person).success(function(data, status, headers, config) {
   alert("Success");
	 p.updateMessage = status;
	 p.getPersons();
});
	}
	$document.ready(p.getPersons);
}



angular.module("person" ,[])
.controller("MyPerson",MyPerson);
