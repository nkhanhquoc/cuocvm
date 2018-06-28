'use strict';
var app = angular.module("cuocvmWeb",[]);
app.controller("tinhcuoc",tinhcuoc);

tinhcuoc.$inject = ['$scope'];
function tinhcuoc($scope){
  $scope.listHangHoa = [{text:"Xe máy dưới 50cm3",value:"S1"},{text:"Xe máy trên 50cm3 dưới 250",value:"S2"},{text:"Xe máy trên 250cm3",value:"S3"}];
}
