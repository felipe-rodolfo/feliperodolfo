$(document).ready(function(){
	$('.js--section-hello').waypoint(function(direction){
		$('.js--section-hello').addClass('animated fadeIn');
	}, {offset: '50%'});
	$('.js--section-why').waypoint(function(direction){
		$('.js--section-why').addClass('animated fadeInDown');
	}, {offset: '50%'});
	$('.js--section-where-left').waypoint(function(direction){
		$('.js--section-where-left').addClass('animated fadeInLeft');
	}, {offset: '50%'});
	$('.js--section-where-right').waypoint(function(direction){
		$('.js--section-where-right').addClass('animated fadeInRight');
	}, {offset: '50%'});
});