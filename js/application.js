angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'home.html'})
    .when('/logos', {templateUrl:'logos.html'})
    .when('/flex-grid', {templateUrl:'flex-grid.html'})
    .when('/inputs', {templateUrl:'inputs.html'})
    .when('/buttons', {templateUrl:'buttons.html'})
    .when('/toggles', {templateUrl:'toggles.html'})
    .when('/tables', {templateUrl:'tables.html'})
    .when('/alerts', {templateUrl:'alerts.html'})
    .otherwise({redirectTo:'/'});
});
