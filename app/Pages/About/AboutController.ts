module App.About {
    import MyFirebaseRef = Services.MyFirebaseRef;

    export class AboutController {
        showImage: boolean = true;
        static $inject = ['$scope', '$http', 'MyFirebaseRef'];
        constructor(public $scope: any, public $http: ng.IHttpService, public myFirebaseRef: MyFirebaseRef){
            // var spotifyApi = new SpotifyWebApi();
            // spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
            //     .then(function(data) {
            //         console.log('Albums information', data);
            //     }, function(err) {
            //         console.error(err);
            //     });
        }

        toggleImageShow = (): void => {
            this.showImage = !this.showImage;
        }

    }
    angular.module('treyahope').controller('AboutController', AboutController);
}