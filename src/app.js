var mainModule = angular.module('nfdash.main', [
    'ngNewRouter',
    'nfdash.current',
    'chart.js'
]);
function mainController($router) {
  $router.config([
    {path: '/', component: 'current'},
    {path: '/challenges', component: 'challenges'},
    {path: '/challenge/:id', component: 'challenge'},
    {path: '/trends', component: 'trends'},
    {path: '/profile', component: 'profile'},
  ]);
}
mainModule.controller('mainController', ['$router', mainController]);

