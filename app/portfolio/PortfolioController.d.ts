declare module App.Portfolio {
    import ModalService = App.Services.ModalService;
    class PortfolioController {
        $scope: any;
        modalService: ModalService;
        static $inject: string[];
        constructor($scope: any, modalService: ModalService);
    }
}
