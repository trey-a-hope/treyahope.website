var TreyHope = (function () {
    function TreyHope() {
        angular.module('treyahope', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast'
        ])
            .config(['ngToastProvider', function (ngToastProvider) {
                ngToastProvider.configure({
                    animation: 'slide'
                });
            }])
            .directive('staticInclude', function ($http, $templateCache, $compile) {
            return function (scope, element, attrs) {
                var templatePath = attrs.staticInclude;
                $http.get(templatePath, { cache: $templateCache }).success(function (response) {
                    var contents = element.html(response).contents();
                    $compile(contents)(scope);
                });
            };
        });
    }
    return TreyHope;
})();
new TreyHope();
//# sourceMappingURL=TreyHope.js.map