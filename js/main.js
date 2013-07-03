'use strict';


// Declare app level module which depends on filters, and services
angular.module('gameCenter', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games', {templateUrl: 'partials/games.html', controller: gamesCrtl});
  $routeProvider.when('/join', {templateUrl: 'partials/join.html', controller: gamesCrtl});
  $routeProvider.when('/create', {templateUrl: 'partials/create.html', controller: gamesCrtl});
  $routeProvider.when('/gameWaiting', {templateUrl: 'partials/gameWaiting.html', controller: gamesCrtl});
  $routeProvider.when('/game', {templateUrl: 'partials/game.html', controller: gamesCrtl});
  $routeProvider.otherwise({redirectTo: '/games'});
}]);
