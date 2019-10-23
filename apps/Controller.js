(function (anngular) {
    'use strict'
    angular.module("MyController", [])
    .controller("MyController", function($scope, $http){
        $scope.Data = [];
        $scope.Init = function() {
            var Url = "http://localhost/web_ii/api/Mahasiswa/Panggil";
            $http({
                method: "get",
                url: Url
            }).then(function(response){
                $scope.Data = response.data;
            }, function(error){
                alert(error.message);
            });
        }
    });
})(window.angular);