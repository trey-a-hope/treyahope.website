declare module App.Pages.Service {
    class ServiceController {
        $scope: any;
        databaseIntegrationCost: number;
        databaseIntegration: boolean;
        userAuthenticationCost: number;
        userAuthentication: boolean;
        totalCost: number;
        static $inject: string[];
        constructor($scope: any);
        calculate: () => void;
    }
}
