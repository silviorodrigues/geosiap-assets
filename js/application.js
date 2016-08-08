angular.module('app', ['ngRoute', 'gist']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'home.html'})
    .when('/logos', {templateUrl:'logos.html'})
    .when('/icons', {templateUrl:'icons.html'})
    .when('/flex-grid', {templateUrl:'flex-grid.html'})
    .when('/inputs', {templateUrl:'inputs.html', controller:'InputController as vm'})
    .when('/buttons', {templateUrl:'buttons.html'})
    .when('/toggles', {templateUrl:'toggles.html'})
    .when('/tables', {templateUrl:'tables.html'})
    .when('/alerts', {templateUrl:'alerts.html'})
    .when('/cards', {templateUrl:'cards.html'})
    .when('/menus', {templateUrl:'menus.html'})
    .otherwise({redirectTo:'/'});
});

angular.module('app').controller('InputController', function() {
    $('#select2').select2();
    $('#datepicker').MonthPicker();
})
