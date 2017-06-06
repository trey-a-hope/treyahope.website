declare var firebase: any;

class TreyHope{
    constructor(){
        /* Module Setup */
        angular.module('treyahope', [
            'ui.router',
            'ngSanitize'
        ])
        /* Directive - Static Include - Used for ng-include to keep parent scope through templates */
        .directive('staticInclude', ($http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService) => {
            return (scope: ng.IScope, element: any, attrs: any): any => {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success((response: any) => {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
}
new TreyHope();