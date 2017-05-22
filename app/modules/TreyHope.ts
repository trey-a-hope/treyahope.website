
class TreyHope{
    constructor(){
        /* Module Setup */
        angular.module('treyahope', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            //http://tamerayd.in/ngToast/#
            'ngToast'
        ])
        /* Configuration for Toast Provider */
        .config(['ngToastProvider', (ngToastProvider: any) => {
            ngToastProvider.configure({
                animation: 'slide' // or 'fade'
            });
        }])
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