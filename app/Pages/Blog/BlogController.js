var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var Blog;
        (function (Blog) {
            var BlogController = (function () {
                function BlogController($scope, $http, myFirebaseRef) {
                    this.$scope = $scope;
                    this.$http = $http;
                    this.myFirebaseRef = myFirebaseRef;
                }
                return BlogController;
            }());
            BlogController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            Blog.BlogController = BlogController;
            angular.module('treyahope').controller('BlogController', BlogController);
        })(Blog = Pages.Blog || (Pages.Blog = {}));
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=BlogController.js.map