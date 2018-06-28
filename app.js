'use strict';
var app = angular.module("cuocvmWeb",[]);
app.controller("tinhcuoc",tinhcuoc);

tinhcuoc.$inject = ['$scope'];
function tinhcuoc($scope){
  $scope.options = false;
  $scope.listHangHoa = [
    {text:"Xe máy dưới 50cm3",value:"S1"},
    {text:"Xe máy trên 50cm3 dưới 250",value:"S2"},
    {text:"Xe máy trên 250cm3",value:"S3"},
    {text:"Hàng khác",value:"S4"},
  ];

  $scope.showOptions = function(){
    $scope.total = -1;
    $scope.options = false;
    switch($scope.loaihang){
      case "S1":
        $scope.total = 150000;
      break;
      case "S2":
        $scope.total = 250000;
      break;
      case "S3":
        $scope.total = 300000;
      break;
      case "S4":
        $scope.options = true;
      break;
    }

  }



}
