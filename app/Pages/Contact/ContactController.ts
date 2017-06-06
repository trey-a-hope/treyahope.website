declare var toastr: any;


module App.Contact {
    import EmailService = App.Services.EmailService;
    import ModalService = App.Services.ModalService;

    export class ToastMessage {
        title: string;
        subTitle: string;
        class: string;
    }

    export class ContactController {
        fullName: string;
        email: string;
        message: string = '';        
        messageLimit: number = 400;
        attemptedSend: boolean = false;
        toastMessages: Array<ToastMessage> = new Array<ToastMessage>();
        emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        static $inject = ['$scope', '$http', '$location', 'EmailService'];
        constructor(public $scope: any, public $http: ng.IHttpService, public $location: ng.ILocationService, public emailService: EmailService){
            this.prepareToastMessages();
        }

        prepareToastMessages = (): void => {
            this.$http.get('json/Quotes.json')
                .then((response: any) => {
                    this.toastMessages = response.data;
                })
                .catch((error: any) => {
                });
        }

        sendEmail = (form: any): void =>{
            this.attemptedSend = true;
            if(form.$valid){
                var to: string = 'tr3umphant.designs@gmail.com';
                var subject: string = 'New Contact - ' + this.fullName + ' via ' + this.email;
                var body: string = this.message;

                this.emailService.sendEmail(to, subject, body)
                    .then((result: any) => {
                        form.$setPristine();
                        toastr.success('Message sent.');
                    })
                    .catch((error: any) => {
                        toastr.error('Could not send message at this time.');
                    });
            }else{
                toastr.error('There were errors in your submission.');
            }
        }

        share = (provider: string): void => {
            var url: string = this.$location.absUrl();
            var text: string = 'Check out this service called Tr3umphant.Designs!';
            switch(provider){
                case 'TWITTER':
                    window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                case 'FACEBOOK':
                    window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&title='+encodeURIComponent(text)+'&description='+encodeURIComponent('Check out this blog I found on Intercom.com'), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                case 'LINKEDIN':
                    window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                    break;
                default:
                    break;
            }
        }

        footerClick = (): void => {
            var rand: number = Math.floor((Math.random() * this.toastMessages.length) + 0);
            var toastMessage = this.toastMessages[rand];
        }
    }
    angular.module('treyahope').controller('ContactController', ContactController);
}