$(document).ready(function(){
	expand = $(".expand");
	expand.click(function(){
		console.log($(this));
		modal = $(this).siblings(".modal");
		img = $(this).siblings(".myImg");
		modalImg = modal.children(".img01");

		// modal.get(0).style.display = 'block';
		// modalImg.get(0).src = img.get(0).src;
		modal.css('display','block');
		//modalImg.attr('src', img.attr('src'));
		modalImg.attr('src', img.attr('src'));
	});
	span = $(".close");
	span.click(function() { 
	  modal.css("display", "none");
	});
});