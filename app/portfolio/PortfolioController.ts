module App.Portfolio {
    import ModalService = App.Services.ModalService;

    export class PortfolioController {

        static $inject = ['$scope', 'ModalService'];
        constructor(public $scope: any, public modalService: ModalService){
        }

    }
    angular.module('treyahope').controller('PortfolioController', PortfolioController);
}