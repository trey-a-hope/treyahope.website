module App.About {
    export class AboutController {

        static $inject = ['$scope', '$http'];
        constructor(public $scope: any, public $http: ng.IHttpService){

        }

    }
    angular.module('treyahope').controller('AboutController', AboutController);
}