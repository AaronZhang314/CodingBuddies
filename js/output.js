$(document).ready(function(){
	outputImage = $(this).siblings(".output");
	btnText = $(this).siblings(".btnText");
	if (outputImage.css('display') == 'none'){
		outputImage.css('display', 'block');
		btnText.html("Output");
	}
	else{
		outputImage.css('display', 'none');
		btnText.html("Close");
	}
});