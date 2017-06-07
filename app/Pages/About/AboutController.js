var App;
(function (App) {
    var About;
    (function (About) {
        var AboutController = (function () {
            function AboutController($scope, $http, myFirebaseRef) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.showImage = true;
                this.toggleImageShow = function () {
                    _this.showImage = !_this.showImage;
                };
            }
            return AboutController;
        }());
        AboutController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
        About.AboutController = AboutController;
        angular.module('treyahope').controller('AboutController', AboutController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map