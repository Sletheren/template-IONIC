
angular.module('camSec', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
 $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
 .state('login', {
    url: '/login',
	templateUrl: 'templates/login.html',
	controller: 'LoginCtrl'  
  })
  
  .state('sign-up', {
    url: '/signup',
	templateUrl: 'templates/sign-up.html',
	controller: 'SignupCtrl'  
  })
  
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.cams', {
      url: '/cams',
      views: {
        'tab-cams': {
          templateUrl: 'templates/tab-cams.html',
          controller: 'CamsCtrl'
        }
      }
    })
    .state('tab.cam-detail', {
      url: '/cams/:camId',
      views: {
        'tab-cams': {
          templateUrl: 'templates/cam-detail.html',
          controller: 'CamDetailCtrl'
        }
      }
    })

  .state('tab.info', {
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: 'InfoCtrl'
      }
    }
  })
	
.state('tab.add', {
    url: '/add',
    views: {
      'tab-add': {
        templateUrl: 'templates/tab-add.html',
        controller: 'AddCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
