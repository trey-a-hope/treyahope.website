module App.Pages.Service {

    export class ServiceController {
        databaseIntegrationCost: number = 60.59;
        databaseIntegration: boolean = false;
        userAuthenticationCost: number = 49.24;
        userAuthentication: boolean = false;
        totalCost: number;
        static $inject = ['$scope'];
        constructor(public $scope: any){
        }

        calculate = (): void => {
            this.totalCost = 0;
            this.databaseIntegration ? this.totalCost += this.databaseIntegrationCost : null;
            this.userAuthentication ? this.totalCost += this.userAuthenticationCost : null;
        }

    }
    angular.module('treyahope').controller('ServiceController', ServiceController);
}