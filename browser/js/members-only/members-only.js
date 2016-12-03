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

app.controller('MembersOnlyCtrl', function($scope, Members, Challenge){

    Members.getUser()
        .then(function(member){
            // console.log(member);
            $scope.member = member;
            $scope.completedChallenges = member.trophies;
        });

    Challenge.getCreatedChallenges()
        .then(function(challenges){
            //console.log(challenges);
            $scope.createdChallenges = challenges;
        });

});

app.factory('Members', function($http, Session){

    var Members = {};
    // var Member = {};

    Members.getUser = function(){
        console.log(Session.user.id);
        return $http.get('/api/users/' + Session.user.id)
            .then(function(response){
                // console.log(response.data);
                return response.data;
            });
    };

    return Members;

});
