var TreyHope = (function () {
    function TreyHope() {
        angular.module('treyahope', [
            'ui.router',
            'ngSanitize'
        ])
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
}());
new TreyHope();
//# sourceMappingURL=TreyHope.js.map