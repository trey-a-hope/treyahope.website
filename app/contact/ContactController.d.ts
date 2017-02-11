declare module App.Contact {
    import ModalService = App.Services.ModalService;
    class ContactController {
        $scope: any;
        $http: any;
        modalService: ModalService;
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean;
        static $inject: string[];
        constructor($scope: any, $http: any, modalService: ModalService);
        sendEmail: (form: any) => void;
    }
}
