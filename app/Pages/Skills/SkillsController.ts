module App.Skills {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class SkillsController {
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
        }

        openResume = (): void => {
            window.open("https://drive.google.com/open?id=1boj6YroDM8gy9eJwMQ2zq1UlRLC2LKbdWRWQAuur7hA"); 
        }

    }
    angular.module('treyahope').controller('SkillsController', SkillsController);
}