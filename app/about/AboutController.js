var App;
(function (App) {
    var About;
    (function (About) {
        var AboutController = (function () {
            function AboutController($scope, $http) {
                this.$scope = $scope;
                this.$http = $http;
                var spotifyApi = new SpotifyWebApi();
                spotifyApi.setAccessToken('BQD9cmXNprxoB4GT875jDVAjgneg7Xmmf_CiGViOWs0nTkwuCL5bKSENPouGW2aflIwY3oBoZnGVt8I_k52Rc9n-zgjY8htJGgXNZ8Ll73qm6UtDIwZNB2EV0reFBs6KWrFcAwX9aDsntOnz3L_6VPSUHANkvH7DTvkIz1nW5f6erAxRZIOB14vUmvsF1bSYR1H2y977GwhIPSU5LooKYML4da3-Yb7339chQ3q-a3svRISRrwsZfEMQoFllaRP5_p-VnL3_SBqk-KUPHHNgP1noZQyqRx6JoGsAKf5PMisSw8efzgp5GaX1ijAUbA-tlnaDroA');
                spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }, function (error, result) {
                    debugger;
                });
            }
            AboutController.$inject = ['$scope', '$http'];
            return AboutController;
        })();
        About.AboutController = AboutController;
        angular.module('treyahope').controller('AboutController', AboutController);
    })(About = App.About || (App.About = {}));
})(App || (App = {}));
//# sourceMappingURL=AboutController.js.map