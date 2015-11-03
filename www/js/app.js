// Ionic Starter App


/*global angular, cordova, StatusBar*/
'use strict';
angular.module('starter', ['ionic'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            // .state('main',{
            //     url: '/app',
            //     abstract: true,
            //     templateUrl: './templates/book.html'
            // })
            .state('book',{
                url: '/book',
                views:{
                    "book":{
                        templateUrl: './templates/book.html',
                        controller: function(){
                            console.log("Hey");
                        }
                    }
                },
                onEnter:function(){
                    console.log('In state main.book');
                }
            })
            .state('about',{
                url: '/about',
                views:{
                    "about":{
                        template: '<ion-view view-title="About"><ion-content><p>About</p></ion-content></ion-view>',
                        controller: function(){
                            console.log("About");
                        }
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/book');
    });
