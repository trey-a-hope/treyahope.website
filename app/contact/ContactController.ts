module App.Contact {
    import ModalService = App.Services.ModalService;

    export class ToastMessage {
        title: string;
        subTitle: string;
        class: string;
    }

    /* TODO: ContactController being used as main controller; refactor in future if needed. */
    export class ContactController {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean = false;
        toastMessages: Array<ToastMessage> = new Array<ToastMessage>();
        emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        static $inject = ['$scope', '$http', 'ModalService'];
        constructor(public $scope: any, public $http: ng.IHttpService, public modalService: ModalService){
            this.prepareToastMessages();
        }

        prepareToastMessages = (): void => {
            this.$http.get('json/Quotes.json')
                .then((response: any) => {
                    this.toastMessages = response.data;
                })
                .catch((error: any) => {
                    this.modalService.displayToast('Error', error.message, 'danger');
                });
        }

        sendEmail = (form: any): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                /* Create data */
                var data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    message: this.message
                };
                this.$http({
                    method: 'POST',			
                    url: 'php/sendEmail.php',			
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success((result: any) => {
                    /* Reset input fields. */
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.message = '';
                    /* Reset form. */
                    form.$setPristine();
                    this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                }).error((error: any) => {
                    this.modalService.displayToast('Error', error.message, 'danger');
                });
            }else{
                this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
            }
        }

        footerClick = (): void => {
            var rand: number = Math.floor((Math.random() * this.toastMessages.length) + 0);
            var toastMessage = this.toastMessages[rand];
            this.modalService.displayToast(toastMessage.title, toastMessage.subTitle, toastMessage.class);
        }
    }
    angular.module('treyahope').controller('ContactController', ContactController);
}