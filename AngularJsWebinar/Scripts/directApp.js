
function SubController($scope)
{
    $scope.SubMessage = 'SubMessage directApp Controller!!!';
}

var directApp = angular.module("directApp", []);
directApp.controller('SubController', SubController);

directApp.filter("chekcMark", function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    }
});
directApp.directive("userDetail", function () {
    return {
        restrict: 'E',
        template: '<div>Image:<img ng-src="{{User.avatar_url}}" width="200" title="{{User.name}}" /><textarea rows="20" cols="100">{{User | json}}</textarea></div>'
    };
});
directApp.directive("searchUser", function () {
    return {
        restrict: 'A',
        template: 'Search User:<input type="text" placeholder="seacrh user.." autofocus ng-model="searchKey"><input type="button" value="Search User" ng-click="Search(searchKey)" />'
    };
});