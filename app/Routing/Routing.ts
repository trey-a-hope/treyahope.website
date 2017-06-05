'use strict'

module Routing {
    export class Route {

        constructor(public $stateProvider: ng.ui.IStateProvider, public $urlRouteProvider: ng.ui.IUrlRouterProvider) {
            /* Landing Page */
            this.$stateProvider.state('home', {
                url: '/',
                templateUrl: 'app/Pages/Home/HomeTemplate.html',
                controller: 'HomeController',
                controllerAs: 'vm'
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

            /* Projects */
            this.$stateProvider.state('projects', {
                url: '/projects',
                templateUrl: 'app/Pages/Projects/ProjectsTemplate.html',
                controller: 'ProjectsController',
                controllerAs: 'vm'
            });

            /* Reviews */
            this.$stateProvider.state('reviews', {
                url: '/reviews',
                templateUrl: 'app/Pages/Comments/CommentsTemplate.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });

            /* Blog */
            this.$stateProvider.state('blog', {
                url: '/blog',
                templateUrl: 'app/Pages/Blog/BlogTemplate.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            });

            /* Contact */
            this.$stateProvider.state('contact', {
                url: '/contact',
                templateUrl: 'app/Pages/Contact/ContactTemplate.html',
                controller: 'ContactController',
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
