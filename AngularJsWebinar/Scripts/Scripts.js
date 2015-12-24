
//Javascript Abstraction
/*var DoCoding = function (f) {
    f();
};

var coding1 = function () {
    console.log("Codin1 Start!!");
    try {
        console.log("Coding1");
    }
    catch (ex) {
        console.log(ex);
    }
    console.log("Codin1 End!!");
};

var coding2 = function () {
    console.log("Coding2");
};

DoCoding(coding1);
DoCoding(coding2);
*/
//Javascript Modules
/*
(function () {
    var CreateCoder = function () {
        var counter = 0;
        var task1 = function () {
            counter++;
            console.log("task1 :" + counter);
        };
        var task2 = function () {
            counter++;
            console.log("task2 :" + counter);
        };
        return {

            Job1: task1,
            Job2: task2
        };
    };

    var coder = CreateCoder();
    coder.Job1();
    coder.Job2();
    coder.Job2();
    //coder.Job2();
})();
*/

(function (angular) {
    function MainController($scope, $http, $log, $interval) {
        //$scope.Message = "AngularJs Öğreniyorum!!";
        //$scope.User = {
        //    Name: 'Bora KAŞMER',
        //    Location: 'Turkey/Istanbul',
        //    Image: 'https://pbs.twimg.com/profile_images/3085556825/36071342737554785798977a9828e2c6_bigger.jpeg'
        //};
        $scope.orderKey = "-stargazers_count";
        $scope.searchKey = "angular";
        $scope.counter = 5;
        var countBack = function () {
            $scope.counter--;
            if ($scope.counter < 1) {
                $scope.Search($scope.searchKey);
                $scope.counter = null;
            }
        };
        var intervalCount = null;
        var Count = function () {
            intervalCount = $interval(countBack, 1000, $scope.counter);
        }
        Count();

        $scope.Search = function (key) {
            $http.get("https://api.github.com/users/" + key).success(function (response) {
                $log.info("All User Data Taken!");
                $scope.User = response;
                if (intervalCount) {
                    $interval.cancel(intervalCount);
                    $scope.counter = null;
                }
                $http.get($scope.User.repos_url).success(function (data) {
                    $log.info("All User Repos Data Taken!");
                    $scope.repos = data;
                }).error(function (ex) {
                    $log.info(ex);
                })
            }).error(function (ex) {
                $.log.info(ex);
            });
        }
    };

    var app = angular.module("app", ['directApp']);
    app.controller("MainController", MainController);
   
})(angular);