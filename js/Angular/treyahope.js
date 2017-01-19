var app = angular.module('treyahope', []);
/* Contact Controller */
app.controller('Contact', function($scope, $http) {
    $scope.attemptedSend = false;
    /* Sends contact form to my email. */
    $scope.sendEmail = function(form){
        $scope.attemptedSend = true;
        if(form.$valid){
            /* Create data */
            var data = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                message: $scope.message
            };
            /* Send data to script. */
            $http({			
                method: 'POST',			
                url: 'php/sendEmail.php',			
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}		
            }).success(function(res) {	
                alert('Message sent, I will respond shortly.')
            }).error(function(err) {
                alert('Message could not send, please try again.')
            });	
        }else{
            alert("There were errors in your submission.")
        }
    }
});