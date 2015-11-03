/*globals angular*/
'use strict';

angular.module('starter')
	.controller('wordlistController', function($scope, wordlist){
		var s = $scope;
		s.wordlist = wordlist.get();
	});