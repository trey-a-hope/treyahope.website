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
                    this.numberOfPages = 0;
                    this.pageCost = 25.99;
                    this.databaseIntegrationCost = 99.99;
                    this.databaseIntegration = false;
                    this.userAuthenticationCost = 79.99;
                    this.userAuthentication = false;
                    this.websiteHostingCost = 59.99;
                    this.websiteHosting = false;
                    this.domainNameCost = 9.99;
                    this.domainName = false;
                    this.ecommerceCost = 189.99;
                    this.ecommerce = false;
                    this.ongoingWebsiteMaintenanceCost = 29.99;
                    this.ongoingWebsiteMaintenance = false;
                    this.calculate = function () {
                        _this.totalCost = 0;
                        _this.totalCost += _this.numberOfPages * _this.pageCost;
                        _this.domainName ? _this.totalCost += _this.domainNameCost : null;
                        _this.databaseIntegration ? _this.totalCost += _this.databaseIntegrationCost : null;
                        _this.userAuthentication ? _this.totalCost += _this.userAuthenticationCost : null;
                        _this.websiteHosting ? _this.totalCost += _this.websiteHostingCost : null;
                        _this.ecommerce ? _this.totalCost += _this.ecommerceCost : null;
                        _this.ongoingWebsiteMaintenance ? _this.totalCost += _this.ongoingWebsiteMaintenanceCost : null;
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