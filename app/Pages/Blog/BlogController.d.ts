declare module App.Pages.Blog {
    import MyFirebaseRef = Services.MyFirebaseRef;
    class BlogController {
        $scope: any;
        $http: ng.IHttpService;
        myFirebaseRef: MyFirebaseRef;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, myFirebaseRef: MyFirebaseRef);
        viewBlog: () => void;
    }
}
