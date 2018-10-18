angular.module('tutorialApp', ['ngAnimate','ngRoute'])

	.config(function($routeProvider) {
	  $routeProvider
	    .when('/', { templateUrl: 'articles.html' })
	    .when('/about', { template: '&Uuml;ber unsere Pizzeria' })
	    .otherwise({ redirectTo: '/' });
	})

	.factory('Cart', function() {
		
	    var items = [];
	    
	    return {
	    	
	      getItems: function() {
	        return items;
	      },
	      
	      addArticle: function(article) {
	        items.push(article);
	      },
	      
	      sum: function() {
	        return items.reduce(function(total, article) {
	          return total + article.price;
	        }, 0);
	      }
	      
	    };
	    
	})
	
	.controller('ArticlesCtrl', function($scope, Cart){
		
		$scope.cart = Cart;
		
		$scope.articles = [
		  { id: 1, name: "Pizza Vegetaria", price: 5 },
		  { id: 2, name: "Pizza Salami",    price: 5.5 },
		  { id: 3, name: "Pizza Thunfisch", price: 6 },
		  { id: 4, name: "Pizza Hawaii", price: 0 }
	    ];
		
	 })
	
	.controller('CartCtrl', function($scope, Cart){
		$scope.cart = Cart;
	})
	
	.directive('price', function(){
	  return {
	    restrict: 'E',
	    scope: {
	      value: '='
	    },
	    template: '<span ng-show="value == 0">kostenlos</span>' +
	      '<span ng-show="value > 0">{{value | currency}}</span>'
	  }
	})

;


