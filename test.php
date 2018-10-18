<?php 

?>

<html ng-app="tutorialApp">
<head>
  <meta charset="utf8mb4" />
  <title>AngularJS Tutorial</title>
  <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
  
  <style>
  
  	.cart-item.ng-enter {
	  -webkit-transition:0.5s linear all;
	  transition:0.5s linear all;
	  background-color: yellow;
	}
	.cart-item.ng-enter-active {
	  background-color: white;
	}
  
  </style>
  
</head>
<body>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-animate.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-route.js"></script>
  <script src="app.js"></script>
  
  	<p class="well">
	  <a href="#/">Start</a> | <a href="#/about">&Uuml;ber</a>
	</p>
	<div ng-view></div>
  
  
</body>
</html>


