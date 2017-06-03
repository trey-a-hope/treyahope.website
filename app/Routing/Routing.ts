'use strict'

module Routing {
    export class Route {

        constructor(public $stateProvider: ng.ui.IStateProvider, public $urlRouteProvider: ng.ui.IUrlRouterProvider) {
            /* Landing Page */
            this.$stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/Pages/Home/HomeTemplate.html'
            });

            /* About */
            this.$stateProvider.state('about', {
                url: '/about',
                templateUrl: 'app/Pages/About/AboutTemplate.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            });

            /* Service */
            this.$stateProvider.state('service', {
                url: '/service',
                templateUrl: 'app/Pages/Service/ServiceTemplate.html',
                controller: 'ServiceController',
                controllerAs: 'vm'
            });
            this.$urlRouteProvider.otherwise('/');
        }
    }
}

angular.module('treyahope').config(
    ['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            return new Routing.Route($stateProvider, $urlRouterProvider);
        }]
    );
