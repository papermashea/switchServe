$(function () {
        $("button").on('click', function () {
            $("#switch-form").show();
        });
    });

$(function () {
        $(".add").on('click', function () {
            $("#switch2").show();
        });
    });

$(function () {
        $(".add").on('click', function () {
            $(".cancel").show();
        });
    });


$(function () {
        $(".cancel").on('click', function () {
            $("#switch2").hide();
        });
    });