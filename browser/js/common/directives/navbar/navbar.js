app.directive('navbar', function() {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        controller: 'NavbarCtrl'
    };

});

$(document).ready(function() {

    $(".toggle_menu").mouseover(function() {
        $(".sidebar_menu").animate({ 'margin-left':'0px' }, 50, () => {} );
        $(".toggle_menu").removeClass("opacity_one");
        $("#main").animate({ 'margin-left':'230px' }, 50,() => {} );
        $("#footer").animate({ 'margin-left':'230px' }, 400, () => {} );
	});

    $(".fa-times").click(function() {
        $(".sidebar_menu").animate({ 'margin-left':'-230px' }, 50, () => {} );
        $(".toggle_menu").addClass("opacity_one");
        $("#main").animate({ 'margin-left':'0px' }, 50, () => {} );
        $("#footer").animate({ 'margin-left':'0px' }, 400, () => {} );
    });

    $(".sidebar_menu").click(function(){
    	$(".sidebar_menu").animate({ 'margin-left':'-230px' }, 50, () => {} );
        $(".toggle_menu").addClass("opacity_one");
        $("#main").animate({ 'margin-left':'0px' }, 50, () => {} );
        $("#footer").animate({ 'margin-left':'0px' }, 400, () => {} );
    });
});
