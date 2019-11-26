(function (angular) {
    'use strict'
    angular.module("UserController", [])
    .controller("LoginController", function ($scope, $http) {
        $scope.input = {};
        $scope.Login = function () {
            var Url = "http://localhost/rapor/assets/CodeIgniter/UserRapor?Username=" + $scope.input.Username + "&Password=" + $scope.input.Password;
            $http({
                method: "get",
                url: Url
            }).then(function (response) {
                alert("Sukses Login");
            }, function (error) {
                console.log(error);
            })
        };
    })
})(window.angular);