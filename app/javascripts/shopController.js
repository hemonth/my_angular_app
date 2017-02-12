var ShopController = function($filter){
  var myCtrl = this;
   myCtrl.total = 0;
    myCtrl.shop = [
{name:'Eggs', price: '10'},
{name:"Jam", price: "6"},
{name:"Onion", price: "7"},
{name:"Butter", price: "3"},
{name:"Apple", price: "4"},
{name:"Milk", price: "15"},
{name:"Orange", price: "4.5"}
];
  myCtrl.addToShop ={name :'',price :''};

myCtrl.buy = function (price) {
  myCtrl.total = Number(price)+Number(myCtrl.total);
     return myCtrl.total;
  }
myCtrl.shopList = function () {
  var filter = $filter('orderBy');
     return filter(myCtrl.shop, 'name' ,false);
  }

  myCtrl.isValid = function () {
       return ((myCtrl.addToShop.name !== '')&&(myCtrl.addToShop.price !==''));
    }
  myCtrl.addShopItem = function () {
      if(myCtrl.isValid() == true){
      myCtrl.shop.push(myCtrl.addToShop);
      }
      }

};

  angular.module("shop",['shopManager'])
  .controller("ShopController",ShopController);
