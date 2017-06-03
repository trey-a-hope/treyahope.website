module App.Pages.Service {

    export class ServiceController {
        static $inject = ['$scope'];
        constructor(public $scope: any){
        }

    }
    angular.module('treyahope').controller('ServiceController', ServiceController);
}