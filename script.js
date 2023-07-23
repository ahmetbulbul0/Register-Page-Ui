$(document).ready(() => {
    if ($("input#first_name").val() != "") {
        $("label[for='first_name']").css("fontSize", "12px");
        $("input#first_name").fadeIn();
    }
    if ($("input#last_name").val() != "") {
        $("label[for='last_name']").css("fontSize", "12px");
        $("input#last_name").fadeIn();
    }
    if ($("input#email").val() != "") {
        $("label[for='email']").css("fontSize", "12px");
        $("input#email").fadeIn();
    }
    if ($("input#password").val() != "") {
        $("label[for='password']").css("fontSize", "12px");
        $("input#password").fadeIn();
    }
});

$("ion-icon[name='eye-off']").on("click", () => {
    $("ion-icon[name='eye-off']").hide();
    $("ion-icon[name='eye']").show();
    $("#password").attr("type", "text");
});

$("ion-icon[name='eye']").on("click", () => {
    $("ion-icon[name='eye']").hide();
    $("ion-icon[name='eye-off']").show();
    $("#password").attr("type", "password");
});

$("label[for='first_name']").click(() => {
    $("label[for='first_name']").css("fontSize", "12px");
    $("input#first_name").fadeIn();
});
$("label[for='last_name']").click(() => {
    $("label[for='last_name']").css("fontSize", "12px");
    $("input#last_name").fadeIn();
});
$("label[for='email']").click(() => {
    $("label[for='email']").css("fontSize", "12px");
    $("input#email").fadeIn();
});
$("label[for='password']").click(() => {
    $("label[for='password']").css("fontSize", "12px");
    $("input#password").fadeIn();
});

$(document).click((e) => {
    var target = $(e.target);
    if (
        !target.is("label[for='first_name']") &&
        !target.is("input#first_name") &&
        !target.is("label[for='last_name']") &&
        !target.is("input#last_name") &&
        !target.is("label[for='email']") &&
        !target.is("input#email") &&
        !target.is("label[for='password']") &&
        !target.is("input#password") &&
        !target.is("ion-icon[name='eye-off']") &&
        !target.is("ion-icon[name='eye']")
    ) {
        if ($("input#first_name").val() == "") {
            $("input#first_name").fadeOut();
            $("label[for='first_name']").css("fontSize", "16px");
        }
        if ($("input#last_name").val() == "") {
            $("input#last_name").fadeOut();
            $("label[for='last_name']").css("fontSize", "16px");
        }
        if ($("input#email").val() == "") {
            $("input#email").fadeOut();
            $("label[for='email']").css("fontSize", "16px");
        }
        if ($("input#password").val() == "") {
            $("input#password").fadeOut();
            $("label[for='password']").css("fontSize", "16px");
        }
    }

    if (target.is("label[for='first_name']") || target.is("input#first_name")) {
        if ($("input#last_name").val() == "") {
            $("input#last_name").fadeOut();
            $("label[for='last_name']").css("fontSize", "16px");
        }
        if ($("input#email").val() == "") {
            $("input#email").fadeOut();
            $("label[for='email']").css("fontSize", "16px");
        }
        if ($("input#password").val() == "") {
            $("input#password").fadeOut();
            $("label[for='password']").css("fontSize", "16px");
        }
    }

    if (target.is("label[for='last_name']") || target.is("input#last_name")) {
        if ($("input#first_name").val() == "") {
            $("input#first_name").fadeOut();
            $("label[for='first_name']").css("fontSize", "16px");
        }
        if ($("input#email").val() == "") {
            $("input#email").fadeOut();
            $("label[for='email']").css("fontSize", "16px");
        }
        if ($("input#password").val() == "") {
            $("input#password").fadeOut();
            $("label[for='password']").css("fontSize", "16px");
        }
    }

    if (target.is("label[for='email']") || target.is("input#email")) {
        if ($("input#first_name").val() == "") {
            $("input#first_name").fadeOut();
            $("label[for='first_name']").css("fontSize", "16px");
        }
        if ($("input#last_name").val() == "") {
            $("input#last_name").fadeOut();
            $("label[for='last_name']").css("fontSize", "16px");
        }
        if ($("input#password").val() == "") {
            $("input#password").fadeOut();
            $("label[for='password']").css("fontSize", "16px");
        }
    }

    if (target.is("label[for='password']") || target.is("input#password")) {
        if ($("input#first_name").val() == "") {
            $("input#first_name").fadeOut();
            $("label[for='first_name']").css("fontSize", "16px");
        }
        if ($("input#last_name").val() == "") {
            $("input#last_name").fadeOut();
            $("label[for='last_name']").css("fontSize", "16px");
        }
        if ($("input#email").val() == "") {
            $("input#email").fadeOut();
            $("label[for='email']").css("fontSize", "16px");
        }
    }
});
