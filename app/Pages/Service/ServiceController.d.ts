declare module App.Pages.Service {
    class ServiceController {
        $scope: any;
        numberOfPages: number;
        pageCost: number;
        databaseIntegrationCost: number;
        databaseIntegration: boolean;
        userAuthenticationCost: number;
        userAuthentication: boolean;
        websiteHostingCost: number;
        websiteHosting: boolean;
        domainNameCost: number;
        domainName: boolean;
        ecommerceCost: number;
        ecommerce: boolean;
        ongoingWebsiteMaintenanceCost: number;
        ongoingWebsiteMaintenance: boolean;
        totalCost: number;
        static $inject: string[];
        constructor($scope: any);
        calculate: () => void;
    }
}
