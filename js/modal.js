$(document).ready(function(){
	expand = $(".expand");
	expand.click(function(){
		modal = $(this).siblings(".modal");
		img = $(this).siblings(".myImg");
		modalImg = modal.children(".img01");
		modal.css('display','block');
		modalImg.attr('src', img.attr('src'));
	});
	span = $(".close");
	span.click(function() { 
	  modal.css("display", "none");
	});
});