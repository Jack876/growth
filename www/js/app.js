angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.blog', {
        url: '/blog',
        views: {
          'menuContent': {
            templateUrl: 'templates/detail.html',
            controller: 'BlogCtrl'
          }
        }
      })
      .state('app.seven', {
        url: '/seven',
        views: {
          'menuContent': {
            templateUrl: 'templates/seven.html'
          }
        }
      })

      .state('app.day1', {
        url: '/day/1',
        views: {
          'menuContent': {
            templateUrl: 'templates/day1.html',
            controller: 'DayCtrl1'
          }
        }
      })
      .state('app.day2', {
        url: '/day/2',
        views: {
          'menuContent': {
            templateUrl: 'templates/day2.html',
            controller: 'DayCtrl2'
          }
        }
      })
      .state('app.day3', {
        url: '/day/3',
        views: {
          'menuContent': {
            templateUrl: 'templates/day3.html',
            controller: 'DayCtrl3'
          }
        }
      })
      .state('app.day4', {
        url: '/day/4',
        views: {
          'menuContent': {
            templateUrl: 'templates/day4.html',
            controller: 'DayCtrl4'
          }
        }
      })
      .state('app.day5', {
        url: '/day/5',
        views: {
          'menuContent': {
            templateUrl: 'templates/day5.html',
            controller: 'DayCtrl5'
          }
        }
      })
      .state('app.day6', {
        url: '/day/6',
        views: {
          'menuContent': {
            templateUrl: 'templates/day6.html',
            controller: 'DayCtrl6'
          }
        }
      })
      .state('app.day7', {
        url: '/day/7',
        views: {
          'menuContent': {
            templateUrl: 'templates/day7.html',
            controller: 'DayCtrl7'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/blog');
  });