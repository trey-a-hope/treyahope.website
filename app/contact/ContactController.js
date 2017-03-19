var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var ToastMessage = (function () {
            function ToastMessage() {
            }
            return ToastMessage;
        })();
        Contact.ToastMessage = ToastMessage;
        var ContactController = (function () {
            function ContactController($scope, $http, modalService) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.modalService = modalService;
                this.attemptedSend = false;
                this.toastMessages = new Array();
                this.prepareToastMessages = function () {
                    _this.$http.get('json/Quotes.json')
                        .then(function (response) {
                        _this.toastMessages = response.data;
                    })
                        .catch(function (error) {
                        _this.modalService.displayToast('Error', error.message, 'danger');
                    });
                };
                this.sendEmail = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
                        _this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                        var data = {
                            firstName: _this.firstName,
                            lastName: _this.lastName,
                            email: _this.email,
                            message: _this.message
                        };
                        _this.$http({
                            method: 'POST',
                            url: 'php/sendEmail.php',
                            data: data,
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        }).success(function (result) {
                            _this.firstName = '';
                            _this.lastName = '';
                            _this.email = '';
                            _this.message = '';
                            form.$setPristine();
                            _this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                        }).error(function (error) {
                            _this.modalService.displayToast('Error', error.message, 'danger');
                        });
                    }
                    else {
                        _this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
                    }
                };
                this.footerClick = function () {
                    var rand = Math.floor((Math.random() * _this.toastMessages.length) + 0);
                    var toastMessage = _this.toastMessages[rand];
                    _this.modalService.displayToast(toastMessage.title, toastMessage.subTitle, toastMessage.class);
                };
                this.prepareToastMessages();
            }
            ContactController.$inject = ['$scope', '$http', 'ModalService'];
            return ContactController;
        })();
        Contact.ContactController = ContactController;
        angular.module('treyahope').controller('ContactController', ContactController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=ContactController.js.map