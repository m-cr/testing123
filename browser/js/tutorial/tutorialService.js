app.factory('TutorialService', function($http){
	var TutorialService = {};

	TutorialService.advance = function(currentIndex){
		return currentIndex + 1;
	}

	return TutorialService;
});