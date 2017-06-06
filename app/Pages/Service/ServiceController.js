var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Service;
        (function (Service) {
            var ServiceController = (function () {
                function ServiceController($scope) {
                    var _this = this;
                    this.$scope = $scope;
                    this.databaseIntegrationCost = 60.59;
                    this.databaseIntegration = false;
                    this.userAuthenticationCost = 49.24;
                    this.userAuthentication = false;
                    this.calculate = function () {
                        _this.totalCost = 0;
                        _this.databaseIntegration ? _this.totalCost += _this.databaseIntegrationCost : null;
                        _this.userAuthentication ? _this.totalCost += _this.userAuthenticationCost : null;
                    };
                }
                return ServiceController;
            }());
            ServiceController.$inject = ['$scope'];
            Service.ServiceController = ServiceController;
            angular.module('treyahope').controller('ServiceController', ServiceController);
        })(Service = Pages.Service || (Pages.Service = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=ServiceController.js.map