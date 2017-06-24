"use strict";
var JavaCtrl = function($http){
   var jc = this;
   jc.name = "hemo";
   jc.rename = "";
   jc.output = "";
   jc.clickMe = function(){
       jc.rename = "jethin";
       $http.get('http://localhost:8080/persons')
               .success(function(data){
                   jc.output = data;
       });
   }

};

angular.module("Java",[])
.controller("JavaCtrl",JavaCtrl);

