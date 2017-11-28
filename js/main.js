$( document ).ready(function() {
	$('#jump_alert').click(function(){
		$('body').toggleClass('jump-alert');
	});

	$('.alert-container').click(function() {
		$('body').removeClass('jump-alert');
		$('body').removeClass('confirmation-error');
	});

	$('#go_to_step2').click(function() {
		var clicks = $(this).data('clicks');
		if (clicks) {
			window.location.href = "step-2.html";
		} else {
			$('body').addClass('confirmation-error');
		}
		$(this).data("clicks", !clicks);
	});

	$('#go_to_step3').click(function() {
		window.location.href = "step-3.html";
	});

	$('#go_to_social').click(function() {
		window.location.href = "social.html";
	});

	$('#copy_button').click(function() {
		var copyText = document.getElementById("copy_link");
		copyText.select();
		document.execCommand("Copy");
		alert("Copiado el texto " + copyText.value);
	});

});