(function () {
  'use strict';

  angular
    .module('vday')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
}());
