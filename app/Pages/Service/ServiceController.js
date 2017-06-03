var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Service;
        (function (Service) {
            var ServiceController = (function () {
                function ServiceController($scope) {
                    this.$scope = $scope;
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