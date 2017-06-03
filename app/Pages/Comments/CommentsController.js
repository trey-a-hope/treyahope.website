var App;
(function (App) {
    var Comments;
    (function (Comments) {
        var CommentsController = (function () {
            function CommentsController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.comments = new Array();
            }
            return CommentsController;
        }());
        CommentsController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
        Comments.CommentsController = CommentsController;
        var Comment = (function () {
            function Comment() {
            }
            return Comment;
        }());
        Comments.Comment = Comment;
        angular.module('treyahope').controller('CommentsController', CommentsController);
    })(Comments = App.Comments || (App.Comments = {}));
})(App || (App = {}));
//# sourceMappingURL=CommentsController.js.map