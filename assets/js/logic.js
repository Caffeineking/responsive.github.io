  $("#learnmore").click(function(e) {
	e.preventDefault();
	
	var position = $("#recentwork").offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

var form_id = "jquery_form";

var data = {
    "access_token": "dhlyl53uz1o8jcw1udmti4g3"
};

function onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = $("#" + form_id + " [name='send']");

function send() {
    sendButton.val('Sending…');
    sendButton.prop('disabled',true);

    var subject = $("#" + form_id + " [name='subject']").val();
    var message = $("#" + form_id + " [name='text']").val();
    data['subject'] = subject;
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);

    return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function( event ) {
    // event.preventDefault();
});

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});