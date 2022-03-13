$(document).ready(function () {
    $(".design-image").click(function () {
        $(".design-image").toggle("slow", "linear").hide();
        $("#design").show();
    });
    $("#design").click(function () {
        $("#design").toggle("swing");
        $(".design-image").toggle("slow", "swing");
    })
});

$(document).ready(function () {
    $(".dev-image").click(function () {
        $(".dev-image").toggle("slow", "linear").hide();
        $("#development").show();
    });
    $("#development").click(function () {
        $("#development").toggle("swing");
        $(".dev-image").toggle("slow", "swing");
    });
});
$(document).ready(function () {
    $(".product-image").click(function () {
        $(".product-image").toggle("slow", "linear").hide();
        $("#management").show();
    });
    $("#management").click(function () {
        $("#management").toggle("swing");
        $(".product-image").toggle("slow", "swing");
    });
});

$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#textHover1").show();
    }).mouseout(function () {
        $("#textHover1").hide();
    });
    $("#work3").mouseover(function () {
        $("#textHover2").show();
    }).mouseout(function () {
        $("#textHover2").hide();
    });
    $("#work2").mouseover(function () {
        $("#textHover3").show();
    }).mouseout(function () {
        $("#textHover3").hide();
    });
    $("#work1").mouseover(function () {
        $("#textHover4").show();
    }).mouseout(function () {
        $("#textHover4").hide();
    });
    $("#work5").mouseover(function () {
        $("#textHover5").show();
    }).mouseout(function () {
        $("#textHover5").hide();
    });
    $("#work6").mouseover(function () {
        $("#textHover6").show();
    }).mouseout(function () {
        $("#textHover6").hide();
    });
    $("#work7").mouseover(function () {
        $("#textHover7").show();
    }).mouseout(function () {
        $("#textHover7").hide();
    });
    $("#work8").mouseover(function () {
        $("#textHover8").show();
    }).mouseout(function () {
        $("#textHover8").hide();
    });
});

$(document).ready(function () {
    $("#form-submit").submit(function () {
        let name = $("input#name").val();
        let email = $("input#email").val();
        let comments = $("input#comments").val();

        if ($("input#name").val() && $("input#email").val()) {
            alert(name + "  we have received your message. Thank you for reaching out to us.");
        }else {
            alert("Please enter your name and email")
        }
    });
});


$(document).ready(function(){
    $("#form-submit").mouseover(function () {
        $("#btn").show();
    }).mouseout(function () {
        $("#btn").hide();
    });
})