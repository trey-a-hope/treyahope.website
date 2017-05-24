module App.Comments {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class CommentsController {
        comments: Array<Comment> = new Array<Comment>();

        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
            var newComment = new Comment();
            newComment.profileName = "Daymond Johns"
            newComment.postDateTime = "2017-05-24T07:29:58";
            newComment.imageDownloadUrl = "https://avatars2.githubusercontent.com/u/8508444?v=3&s=400";
            newComment.message = "There is a forced to be reckoned with.";
            this.comments.push(newComment);
        }

        leaveAComment = (): void => {
            this.comments.push(new Comment());
        }

    }

    export class Comment{
        id: string;
        imageDownloadUrl: string;
        profileName: string;
        postDateTime: string;
        message: string;
    }

    angular.module('treyahope').controller('CommentsController', CommentsController);
}