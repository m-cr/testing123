app.component('tutorialText', {
	bindings: {},
	template:`
	  <div class="container">
	    <p ng-if="$ctrl.index === 0" class="slide">Hello</p>
	    <p ng-if="$ctrl.index === 1" class="slide">it's me</p>
	    <button ng-click="$ctrl.advance($ctr.index)">{{$ctrl.index}}</button>
	  </div>
	`,
	controller: function(){
		var that = this;
		this.index = 0;
		this.advance = function(){
			return that.index++;
		};
	}
});

// app.animation('.slide', [function(){
// 	return {
// 	  enter: function(element, doneFn) {
// 	 		   jQuery(element).fadeIn(1000, doneFn);
// 	   },
// 	  move: function(element, doneFn) {
// 	 		       jQuery(element).fadeIn(1000, doneFn);
// 	   },
// 	  leave: function(element, doneFn) {
// 	 		       jQuery(element).fadeOut(1000, doneFn);
// 	   }
// 	}
// }])