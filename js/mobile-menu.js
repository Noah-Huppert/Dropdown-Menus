$(document).ready(function(e){
	$('.mobile-menu div').click(function(){
		if($(this).attr('active') == "true"){
			$(this).removeAttr('active');
		} else{
			$(this).attr('active', true);
		}
		return false; 
	});

	$('button').click(function(e){
		var mobileMenu = '#' + $(this).attr('data-menu');
		if($(mobileMenu).attr('active') == "true"){
			$(mobileMenu).removeAttr('active');
		} else{
			$(mobileMenu).attr('active', true);
		}
	});
});