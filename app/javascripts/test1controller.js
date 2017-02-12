
var TestController = function() {
  var ctrl = this;
    ctrl.names=[
{image:'German',name:'Sebastin Vettel',brand:'Red Bull',count:'397',desc:'Red Bull is an energy drink'},
{image:'India',name:'Shanmuga Sundaram',brand:'Kingfisher',count:'242',desc:'Kingfisher is favourite brand in India'},
{image:'Brazilian',name:'Mark Webber',brand:'Kingcobra',count:'199',desc:'Kingcobra is very worst brand i ever drink'},
{image:'Spanish',name:'Lewis Hamilton',brand:'Budweiser',count:'189', desc:'Budweiser is Best brand i ever drink'},
{image:'German',name:'Kimi Raikonnan',brand:'Fosters',count:'183', desc:'Fosters is next to  brand Budweiser'}
];
ctrl.displayDescription = function(x){
  return x.desc;
}

};

angular.module('TestApp',[])
.controller('TestController',TestController);
