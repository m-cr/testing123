app.factory('TutorialService', function(){
	var TutorialService = {};

	TutorialService.advance = function(currentIndex){
		return currentIndex + 1;
	};

	return TutorialService;
});
