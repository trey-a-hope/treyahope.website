var App;
(function (App) {
    var About;
    (function (About) {
        var AboutController = (function () {
            function AboutController($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
            }
            AboutController.$inject = ['$scope', '$http'];
            return AboutController;
        })();
        About.AboutController = AboutController;
        angular.module('treyahope').controller('AboutController', AboutController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map