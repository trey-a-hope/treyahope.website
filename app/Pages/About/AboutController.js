var App;
(function (App) {
    var About;
    (function (About) {
        var AboutController = (function () {
            function AboutController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
            }
            AboutController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            return AboutController;
        })();
        About.AboutController = AboutController;
        angular.module('treyahope').controller('AboutController', AboutController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map