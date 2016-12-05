app.directive('navbar', function() {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        controller: 'NavbarCtrl'
    };

});

$(document).on("page:load ready", function() {

    var appear = function(){
        $(".sidebar_menu").animate({ 'margin-left':'0px' }, 50, () => {} );
        $(".toggle_menu").removeClass("opacity_one");
        $("#main").animate({ 'margin-left':'230px' }, 50,() => {} );
        $("#footer").animate({ 'margin-left':'230px' }, 400, () => {} );
    };

    var disappear = function(){
        $(".sidebar_menu").animate({ 'margin-left':'-230px' }, 50, () => {} );
        $(".toggle_menu").addClass("opacity_one");
        $("#main").animate({ 'margin-left':'0px' }, 50, () => {} );
        $("#footer").animate({ 'margin-left':'0px' }, 400, () => {} );
    };

    $(".toggle_menu").mouseover(appear).click(appear);

    $(".fa-times").click(disappear);

    $(".sidebar_menu").click(disappear);
});
