'use strict';
var Routing;
(function (Routing) {
    var Route = (function () {
        function Route($stateProvider, $urlRouteProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouteProvider = $urlRouteProvider;
            this.$stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/Pages/Home/HomeTemplate.html'
            });
            this.$stateProvider.state('about', {
                url: '/about',
                templateUrl: 'app/Pages/About/AboutTemplate.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('service', {
                url: '/service',
                templateUrl: 'app/Pages/Service/ServiceTemplate.html',
                controller: 'ServiceController',
                controllerAs: 'vm'
            });
            this.$stateProvider.state('testimonials', {
                url: '/testimonials',
                templateUrl: 'app/Pages/Comments/CommentsTemplate.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });
            this.$urlRouteProvider.otherwise('/');
        }
        return Route;
    }());
    Routing.Route = Route;
})(Routing || (Routing = {}));
angular.module('treyahope').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        return new Routing.Route($stateProvider, $urlRouterProvider);
    }]);
//# sourceMappingURL=Routing.js.map