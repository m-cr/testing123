app.config(function ($stateProvider) {

    $stateProvider.state('membersOnly', {
        url: '/members-area',
        templateUrl: '/js/members-only/members-only.html',
        controller: 'MembersOnlyCtrl',
        // The following data.authenticate is read by an event listener
        // that controls access to this state. Refer to app.js.
        data: {
            authenticate: true
        }
    });

});

app.controller('MembersOnlyCtrl', function($scope, Members){
    
    Members.getUser()
        .then(function(member){
            console.log(member);
            $scope.member = member;
        });

});

app.factory('Members', function($http, Session){

    var Members = {};
    var Member = {};

    Members.getUser = function(){
        console.log(Session.user.id);
        return $http.get('/api/users/' + Session.user.id)
            .then(function(response){
                // console.log(response.data);
                return response.data;
            });
    };

//     AccountService.getChallenges = function(){
//         return $http.get('/api/account/orders')
//             .then(function(response){
//                 return response.data;
//             });
//     };

//     AccountService.getShipping = function(){
//         return $http.get('/api/address/shipping')
//             .then(function(response){
//                 return response.data;
//             });
//     };

//     AccountService.getBilling = function(){
//         return $http.get('/api/address/billing')
//             .then(function(response){
//                 return response.data;
//             });
//     };

//     AccountService.saveShipping = function(address){
//         return $http.post('/api/address/shipping', address);
//     };

//     AccountService.saveBilling = function(address){
//         return $http.post('/api/address/billing', address);
//     };

//     AccountService.clearShipping = function(){
//         return $http.delete('/api/address/shipping');
//     };

//     AccountService.clearBilling = function(){
//         return $http.delete('/api/address/billing');
//     };

//     return AccountService;
// });

    return Members;

});
