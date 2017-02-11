module App.Contact {
    import ModalService = App.Services.ModalService;

    export class ContactController {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        attemptedSend: boolean = false;

        static $inject = ['$scope', '$http', 'ModalService'];
        constructor(public $scope: any, public $http: any, public modalService: ModalService){

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
                }).success((result: any)=>{
                    alert('Message sent, I will respond shortly.');
                }).error((error: any) =>{
                    alert('Message could not send, please try again.');
                })
            }else{
                this.modalService.displayNotification('There were erros in your submission.', 'Error', 'OK', true);
            }
        }
    }
    angular.module('treyahope').controller('ContactController', ContactController);
}