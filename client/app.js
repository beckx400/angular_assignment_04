/**
 * Created by Dave on 9/29/15.
 */
var app = angular.module('myApp', []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.handleList = [];

    var nounsList = [];
    var adjectivesList = [];

    $http.get("/getNouns").then(function(response){
        //console.log(response.data);
        nounsList = response.data;
    });

    $http.get("/getAdjectives").then(function(response){
        adjectivesList = response.data;

        for(var i = 0; i < 10; i++){
            var randomNumber = function(){
                return Math.floor(Math.random() * 10);
            };

            $scope.handleList.push(adjectivesList[randomNumber()] + nounsList[randomNumber()]);

        };
    });




    console.log($scope.handleList);
}]);