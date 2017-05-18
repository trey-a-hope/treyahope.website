module App.About {
    export class AboutController {

        static $inject = ['$scope', '$http'];
        constructor(public $scope: any, public $http: ng.IHttpService){
            // var spotifyApi = new SpotifyWebApi();
            // spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
            //     .then(function(data) {
            //         console.log('Albums information', data);
            //     }, function(err) {
            //         console.error(err);
            //     });
        }

    }
    angular.module('treyahope').controller('AboutController', AboutController);
}