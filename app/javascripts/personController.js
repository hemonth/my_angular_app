var MyPerson = function($http,$filter,$document,$timeout){
	var p =this;
        p.findUser="";
	p.persons = [];
	p.Person = {name:"",email:"",place:""};
	p.subscribeMessage = "";
	p.updateMessage = "fill the below details";
	 p.filter = function(x){
	            var orderBy = $filter('orderBy');
				return orderBy(x,['name','age'],false);
	}
       // -----------------------------------------------------------------------
//     p.getPersons = function(){
//		$http.get('http://localhost:8080/persons')
//		.success(function(data){
//			p.persons = data;
//		});
//	}
        
        //------------------------------------------------------------------------
             p.getPersons = function(){
                 p.Person = {name:"",email:"",place:""};
		$http.get('http://localhost:8080/person/get')
		.success(function(data){
			p.persons = data;
		});
	}
            p.findPerson = function(){
                p.Person = {name:"",email:"",place:""};
                alert('http://localhost:8080/person/find/'+p.findUser);
                $http.get('http://localhost:8080/person/find/'+p.findUser)
                        .success(function(data){
                       p.persons = data;     
                });
            }
        //------------------------------------------------------------------------
//	 p.addPersons = function(){
//	 		p.updateMessage = "updating..";
//	 	$http.post('http://localhost:8080/person/save',p.Person).then(successCallback
//	 	.success(function(data){
//	 		p.Person = {};
//	 		p.updateMessage = data;
//	 		//$timeout(p.updateMessage,5000);
//	 		p.getPersons();
//	 	})
//	 }

	p.addPersons = function(){
		console.log(p.Person);
		p.subscribe = true;
		$http.post('http://localhost:8080/person/save', p.Person).success(function(data, status, headers, config) {
         $timeout(p.subscribeMessage= "Thanks for subscribing!!",5);
	 p.updateMessage = status;
	 p.getPersons();
});                   
	}
	$document.ready(p.getPersons);
}



angular.module("person" ,[])
.controller("MyPerson",MyPerson);
