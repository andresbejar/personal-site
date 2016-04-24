'use strict';

/**
 * @ngdoc overview
 * @name personalSiteApp
 * @description
 * # personalSiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngParallax'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/objetivos', {
        templateUrl: 'views/objetivos.html',
        controller: 'ObjetivosCtrl'
      })
      .when('/pasatiempos', {
        templateUrl: 'views/pasatiempos.html',
        controller: 'PasatiemposCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/computacion', {
        templateUrl: 'views/computacion.html',
        controller: 'MainCtrl'
      })
      .when('/cursos', {
        templateUrl: 'views/cursos.html',
        controller: 'MainCtrl'
      })
      .when('/profesores', {
        templateUrl: 'views/profesores.html',
        controller: 'MainCtrl'
      })
      .when('/descargas', {
        templateUrl: 'views/descargas.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
