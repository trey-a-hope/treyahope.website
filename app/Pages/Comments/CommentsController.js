var App;
(function (App) {
    var Comments;
    (function (Comments) {
        var CommentsController = (function () {
            function CommentsController($scope, $http, myFirebaseRef) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.comments = new Array();
                this.leaveAComment = function () {
                    _this.comments.push(new Comment());
                };
                var newComment = new Comment();
                newComment.profileName = "Daymond Johns";
                newComment.postDateTime = "2017-05-24T07:29:58";
                newComment.imageDownloadUrl = "https://avatars2.githubusercontent.com/u/8508444?v=3&s=400";
                newComment.message = "There is a forced to be reckoned with.";
                this.comments.push(newComment);
            }
            CommentsController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            return CommentsController;
        })();
        Comments.CommentsController = CommentsController;
        var Comment = (function () {
            function Comment() {
            }
            return Comment;
        })();
        Comments.Comment = Comment;
        angular.module('treyahope').controller('CommentsController', CommentsController);
    })(Comments = App.Comments || (App.Comments = {}));
})(App || (App = {}));
//# sourceMappingURL=CommentsController.js.map