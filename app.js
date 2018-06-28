'use strict';
var app = angular.module("cuocvmWeb",[]);
app.controller("tinhcuoc",tinhcuoc);

tinhcuoc.$inject = ['$scope'];

function tinhcuoc($scope){
  $scope.options = false;
  var resetFee = function(){
    $scope.total = 0;
    $scope.totalCoban = -1000000000;
    $scope.totalBosung = 0;
    $scope.totalPhuphi = 0;
    $scope.totalDelivery = 0;
    $scope.totalCod = 0;
  }
  $scope.countTotal = function(){
    resetFee();
    cuocCoban();
    tinhBosung();
    $scope.total = $scope.totalCoban + $scope.totalBosung + $scope.totalPhuphi + $scope.totalDelivery + $scope.totalCod;
  }

  $scope.listLocation = [
    {text: "Hải Phòng",value:"HP"},
    {text: "Thanh Hóa - Nghệ An - Hà Tĩnh",value:"TNT"},
    {text: "Đà Nẵng",value:"DN"},
    {text: "Sài Gòn - Bình Dương",value:"SGBD"}
  ];

  $scope.listHangHoa = [
    {text:"Xe đạp người lớn",value:"S1"},
    {text:"Xe đạp điện",value:"S2"},
    {text:"Xe máy điện",value:"S3"},
    {text:"Xe máy số dưới 110cc",value:"S4"},
    {text:"Xe máy số trên 110cc",value:"S5"},
    {text:"Xe máy ga dưới 125cc",value:"S5"},
    {text:"Xe máy ga dưới 250cc",value:"S6"},
    {text:"Xe máy ga trên 250cc",value:"S7"},
    {text:"Giấy tờ - Hàng hóa",value:"S8"},
  ];
  $scope.listDelivery = [
    {text: "Hỏa tốc 24h",value:"HT24"},
    {text: "24- 32h",value:"2432h"},
    {text: "36H",value:"36H"},
    {text: "72H",value:"72H"},
    {text: "3-4 Ngày",value:"34N"},
    {text: "5-6 Ngày",value:"56N"}
  ];
  $scope.listBosung = [
    {text: "Đồ trang sức, mỹ phẩm... > 5 Tr",value:"BS1"},
    {text: "Các loại khác",value:"BSK"}
  ];

  var cuocCoban = function(){
    console.log("location: "+$scope.location);
    console.log("weight: "+$scope.weight);
    console.log("delivery: "+$scope.delivery);
      switch ($scope.location) {
        case "HP":
           if($scope.weight <= 0.5){
             $scope.totalCoban = 20000;
           } else if($scope.weight >  0.5 && $scope.weight <= 1){
             $scope.totalCoban = 30000;
           }else if($scope.weight >  1){
             $scope.totalCoban = 30000 + Math.round($scope.weight - 1)*2000;
           }
          break;
        case "TNT":
          if($scope.weight <= 0.5){
            $scope.totalCoban = 30000;
          } else if($scope.weight >  0.5 && $scope.weight <= 1){
            $scope.totalCoban = 35000;
          }else if($scope.weight >  1){
            $scope.totalCoban = 35000 + Math.round($scope.weight - 1)*2000;
          }
          break;
        case "DN":
          if($scope.weight <= 0.5){
            switch ($scope.delivery) {
              case "HT24":
                $scope.totalCoban = 30000;
                break;
              case "36H":
                $scope.totalCoban = 25000;
                break;
              case "34N":
                $scope.totalCoban = 20000;
                break;
              default:
              break;
            }

          } else if($scope.weight >  0.5 && $scope.weight <= 1){
            switch ($scope.delivery) {
              case "HT24":
                $scope.totalCoban = 120000;
                break;
              case "36H":
                $scope.totalCoban = 35000;
                break;
              case "34N":
                $scope.totalCoban = 30000;
                break;
              default:
              break;
            }
          }else if($scope.weight >  1){
            switch ($scope.delivery) {
              case "HT24":
                $scope.totalCoban = 120000 + Math.round($scope.weight - 1)*22000;
                break;
              case "36H":
                $scope.totalCoban = 35000 + Math.round($scope.weight - 1)*4500;
                break;
              case "34N":
                $scope.totalCoban = 30000 + Math.round($scope.weight - 1)*4000;
                break;
              default:
              break;
            }
          }
          break;
          case "SGBD":
            if($scope.weight <= 0.5){
              switch ($scope.delivery) {
                case "HT24":
                  $scope.totalCoban = 90000;
                  break;
                case "36H":
                  $scope.totalCoban = 70000;
                  break;
                case "72H":
                  $scope.totalCoban = 30000;
                  break;
                case "56N":
                  $scope.totalCoban = 25000;
                  break;
                default:
                break;
              }

            } else if($scope.weight >  0.5 && $scope.weight <= 1){
              switch ($scope.delivery) {
                case "HT24":
                  $scope.totalCoban = 120000;
                  break;
                case "36H":
                  $scope.totalCoban = 90000;
                  break;
                case "72H":
                  $scope.totalCoban = 40000;
                  break;
                case "56N":
                  $scope.totalCoban = 40000;
                  break;
                default:
                break;
              }
            }else if($scope.weight >  1){
              switch ($scope.delivery) {
                case "HT24":
                  $scope.totalCoban = 120000 + Math.round($scope.weight - 1)*22000;
                  break;
                case "36H":
                  $scope.totalCoban = 90000 + Math.round($scope.weight - 1)*15000;
                  break;
                case "72H":
                  $scope.totalCoban = 40000 + Math.round($scope.weight - 1)*7000;
                  break;
                case "56N":
                  $scope.totalCoban = 40000 + Math.round($scope.weight - 1)*4500;
                  break;
                default:
                break;
              }
            }
            break;
        default:

      }
  }

  var tinhBosung = function(){
    if($scope.delivery == "HT24"){
      if($scope.bosung == "BS1"){
        $scope.totalBosung = $scope.price * 0.015;
      } else {
        $scope.totalBosung = $scope.price * 0.004;
      }
    }
    else {
      if($scope.bosung == "BS1"){
        $scope.totalBosung = $scope.price * 0.004;
      } else {
        $scope.totalBosung = $scope.price * 0.002;
      }

    }
  };

  $scope.showOptions = function(){
    resetFee();
    $scope.options = false;
    switch($scope.loaihang){
      case "S1":
        $scope.total = 150000;
      break;
      case "S2":
        $scope.total = 200000;
      break;
      case "S3":
        $scope.total = 250000;
      break;
      case "S4":
        $scope.total = 300000;
      break;
      case "S5":
        $scope.total = 350000;
      break;
      case "S6":
        $scope.total = 400000;
      break;
      case "S7":
        $scope.total = 500000;
      break;
      case "S8":
        $scope.options = true;
      break;
    }
  }



}
