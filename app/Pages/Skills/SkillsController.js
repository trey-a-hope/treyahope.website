var App;
(function (App) {
    var Skills;
    (function (Skills) {
        var SkillsController = (function () {
            function SkillsController($scope, $http, myFirebaseRef) {
                this.$scope = $scope;
                this.$http = $http;
                this.myFirebaseRef = myFirebaseRef;
                this.openResume = function () {
                    window.open("https://drive.google.com/open?id=1boj6YroDM8gy9eJwMQ2zq1UlRLC2LKbdWRWQAuur7hA");
                };
            }
            SkillsController.$inject = ['$scope', '$http', 'MyFirebaseRef'];
            return SkillsController;
        })();
        Skills.SkillsController = SkillsController;
        angular.module('treyahope').controller('SkillsController', SkillsController);
    })(Skills = App.Skills || (App.Skills = {}));
})(App || (App = {}));
//# sourceMappingURL=SkillsController.js.map