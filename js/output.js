$(document).ready(function(){
	btnText = $(".showMore");

	btnText.click(function(){
		moreText = $(this).siblings(".moreText");
		btnText = $(this);
		btnText.toggleClass("btn-primary")
		
		if (moreText.css('display') == 'none'){
			moreText.css('display', 'block');
			btnText.html("Close");
		}
		else{
			moreText.css('display', 'none');
			btnText.html("Show Code Example");
		}
	});
});