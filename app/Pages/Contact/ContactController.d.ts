declare module App.Contact {
    import ModalService = App.Services.ModalService;
    class ToastMessage {
        title: string;
        subTitle: string;
        class: string;
    }
    class ContactController {
        $scope: any;
        $http: ng.IHttpService;
        modalService: ModalService;
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean;
        toastMessages: Array<ToastMessage>;
        emailRegex: RegExp;
        static $inject: string[];
        constructor($scope: any, $http: ng.IHttpService, modalService: ModalService);
        prepareToastMessages: () => void;
        sendEmail: (form: any) => void;
        footerClick: () => void;
    }
}
