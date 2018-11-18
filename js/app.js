/* show switch form*/
$(function () {
        $("button").on('click', function () {
            $("#switch-form").show();
        });
    });

/* show second switch form */
$(function () {
        $(".add").on('click', function () {
            $("#switch2").show();
        });
    });

/* show third switch form */
$(function () {
        $(".add2").on('click', function () {
            $("#switch3").show();
        });
    });

/* show cancel button with switch form */
$(function () {
        $(".add").on('click', function () {
            $(".cancel").show();
        });
    });

/* show upload interface*/
$(function () {
        $(".choose").on('click', function () {
            $("#upload").show();
        });
    });


/* hide second switch on cancel*/
$(function () {
        $(".cancel").on('click', function () {
            $("#switch2").hide();
        });
    });

/* hide third switch on cancel*/
$(function () {
        $(".cancel2").on('click', function () {
            $("#switch3").hide();
        });
    });

/* hide switch form on save*/
$(function () {
        $(".save").on('click', function () {
            $("#switch-form").hide();
        });
    });

$(function () {
        $(".save").on('click', function () {
            $(".cancel").show();
        });
    });


/* show elements dropdown when selection made */

$(document).ready(function () {
	$("layouts").change(function (){
		$("#elements").hide();
		if($(this).val() == 'video-lp') {
			$("elements").show();
		}
		else if($(this).val() == 'other') {
			$("#elements").hide();
		}
	});
});