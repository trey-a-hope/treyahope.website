class TreyHope{
    constructor(){
        angular.module('treyahope', [
            'ui.bootstrap',
            'ngSanitize',
            'ngAnimate',
            //http://tamerayd.in/ngToast/#
            'ngToast'
        ]).config(['ngToastProvider', (ngToastProvider: any) => {
            ngToastProvider.configure({
                animation: 'slide' // or 'fade'
            });
        }]);
    }
}
new TreyHope();