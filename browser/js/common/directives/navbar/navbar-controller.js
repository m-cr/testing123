app.controller('NavbarCtrl', function($rootScope, $state, $scope, AuthService, AUTH_EVENTS) {
    $scope.items = [
        { label: 'Home', state: 'home' },
        { label: 'About', state: 'about' },
        { label: 'Challenges', state: 'challenges' },
        { label: 'Create a Challenge', state: 'createchallenge', auth: true },
        { label: 'Play Around!', state: 'test' },
        { label: 'Profile', state: 'membersOnly', auth: true }
    ];

    $scope.hideMenu = () => {
        $scope.hidden = true;
    };
    
    $scope.showMenu = () => {
        $scope.hidden = false;
    };

    $scope.hidden = true;

    $scope.user = null;

    $scope.isLoggedIn = function() {
        return AuthService.isAuthenticated();
    };

    $scope.logout = function() {
        AuthService.logout().then(function() {
            $state.go('home');
        });
    };

    var setUser = function() {
        AuthService.getLoggedInUser().then(function(user) {
            $scope.user = user;
        });
    };

    var removeUser = function() {
        $scope.user = null;
    };

    setUser();

    $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
    $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
    $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

});
