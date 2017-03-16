var App;
(function (App) {
    var Contact;
    (function (Contact) {
        var ContactController = (function () {
            function ContactController($scope, $http, modalService) {
                var _this = this;
                this.$scope = $scope;
                this.$http = $http;
                this.modalService = modalService;
                this.attemptedSend = false;
                this.sendEmail = function (form) {
                    _this.attemptedSend = true;
                    if (form.$valid) {
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
                            _this.modalService.displayToast('Got It', 'Message sent, I will respond shortly.', 'success');
                        }).error(function (error) {
                            _this.modalService.displayToast('Error', error.message, 'danger');
                        });
                    }
                    else {
                        _this.modalService.displayToast('Error', 'There were erros in your submission.', 'danger');
                    }
                };
            }
            ContactController.$inject = ['$scope', '$http', 'ModalService'];
            return ContactController;
        })();
        Contact.ContactController = ContactController;
        angular.module('treyahope').controller('ContactController', ContactController);
    })(Contact = App.Contact || (App.Contact = {}));
})(App || (App = {}));
//# sourceMappingURL=ContactController.js.map