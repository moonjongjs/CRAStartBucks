(($)=>{
	
	$('.myBtn').on({
		click:	function(){
			$(this).next().slideToggle(500);
			$(this).toggleClass('addMup');
		}
	});
	
	
})(jQuery); //mobile.js