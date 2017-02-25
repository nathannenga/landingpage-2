angular.module('app').controller('mainCtrl',function($scope, mainService){

var newUser = {};

$scope.submit = function(){
  newUser.email = $scope.email;
};

$scope.newUser = newUser;


});
