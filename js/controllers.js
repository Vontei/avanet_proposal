var app = angular.module('avanetDemo', ['rzModule', 'ui.bootstrap']);


app.controller('compassController', function($scope){
  var vm = this;
  $scope.searchableDegrees = [];

  vm.toggle = function () {
    vm.visible = !vm.visible;
    if (vm.visible)
      vm.refreshSlider();
  };

  vm.visible = false;

  $scope.minRangeSlider = {
         minValue: 0,
         maxValue: 45,
         options: {
             ceil: 45,
             floor: 0,
             draggableRange: true
         }
    };

  $scope.toggle = function () {
    vm.visible = !vm.visible;
    if (vm.visible)
      vm.refreshSlider();
  };

  vm.refreshSlider = function () {
    $timeout(function () {
      $scope.$broadcast('rzSliderForceRender');
    });
  };

  var compass = {
    n: false,
    s: false,
    e: false,
    w: false,
    nw: false,
    ne: false,
    se: false,
    sw: false
  }

  var addDegrees = function(x,y,bearing){
    for(i=x; i<=y; i++){
      $scope.searchableDegrees.push(i);
    }
    compass[bearing] = true;
    console.log($scope.searchableDegrees)
  }

  var removeDegrees = function(x,y,bearing){
    for(i=0;i<=$scope.searchableDegrees.length-1;i++){
      for(j=x; j<=y; j++){
        if($scope.searchableDegrees[i]===j){
          $scope.searchableDegrees.splice(i,1);
        }
      }
    }
    compass[bearing] = false;
    console.log($scope.searchableDegrees)
  }



  $scope.getBearing = function (string) {
    switch (string) {
      case 'n':
        compass[string] ? (removeDegrees(340,360,string), removeDegrees(0,20,string)) : (addDegrees(340,360,string),addDegrees(0,20,string));
        break;
      case 'ne':
        compass[string] ? removeDegrees(21,70,string) : addDegrees(21,70,string);
        break;
      case 'e':
        compass[string] ? removeDegrees(71,110,string) : addDegrees(71,110,string);
        break;
      case 'se':
        compass[string] ? removeDegrees(111,159,string) : addDegrees(111,159,string);
        break;
      case 's':
        compass[string] ? removeDegrees(160,199,string) : addDegrees(160,199,string);
        break;
      case 'sw':
        compass[string] ? removeDegrees(200,249,string) : addDegrees(200,249,string);
        break;
      case 'w':
        compass[string] ? removeDegrees(250,289,string) : addDegrees(250,289,string);
        break;
      case 'nw':
        compass[string] ? removeDegrees(290,339,string) : addDegrees(290,339,string);
        break;
    }
  }

})
