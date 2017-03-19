var TreyHope = (function () {
    function TreyHope() {
        angular.module('treyahope', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            'ngToast'
        ]).config(['ngToastProvider', function (ngToastProvider) {
                ngToastProvider.configure({
                    animation: 'slide'
                });
            }]);
    }
    return TreyHope;
})();
new TreyHope();
//# sourceMappingURL=TreyHope.js.map