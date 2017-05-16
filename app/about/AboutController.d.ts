declare module App.About {
    class AboutController {
        $scope: any;
        $http: ng.IHttpService;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService);
    }
}
