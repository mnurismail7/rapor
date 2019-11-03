(function (anngular) {
    'use strict'
    angular.module("MyController",[])
    .controller("HomeController", function($scope, $http){
        $scope.Data = [];
        $scope.Init = function() {
            var Url = "http://localhost/rapor/assets/CodeIgniter/Siswa";
            $http({
                method: "get",
                url: Url
            }).then(function(response){
                $scope.Data = response.data;
            },function(error){
                alert(error.message);
            });
        }
    });
})(window.angular);