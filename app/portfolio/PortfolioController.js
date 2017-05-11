var App;
(function (App) {
    var Portfolio;
    (function (Portfolio) {
        var PortfolioController = (function () {
            function PortfolioController($scope, modalService) {
                this.$scope = $scope;
                this.modalService = modalService;
            }
            PortfolioController.$inject = ['$scope', 'ModalService'];
            return PortfolioController;
        })();
        Portfolio.PortfolioController = PortfolioController;
        angular.module('treyahope').controller('PortfolioController', PortfolioController);
    })(Portfolio = App.Portfolio || (App.Portfolio = {}));
})(App || (App = {}));
//# sourceMappingURL=PortfolioController.js.map