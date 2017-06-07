module App.About {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class PortfolioController {
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }
    }
    angular.module('treyahope').controller('PortfolioController', PortfolioController);
}