// JavaScript source code
$("#sidemenu").click(function () {
    $("#sidenav").toggle(100);
    var classname = $('#containerData').attr('class')
    if (classname == "col-md-12 col-lg-12") {
        $("#containerData").removeClass("col-md-12 col-lg-12");
        $("#containerData").addClass("col-md-10 col-lg-10");
    }
    else {
        $("#containerData").removeClass("col-md-10 col-lg-10");
        $("#containerData").addClass("col-md-12 col-lg-12");
    }
    return false;
})
$("#containerData").click(function () {
    if ($('#sidenav').is(':hidden')) {
    }
    else {
        $("#sidenav").hide(100);
        var classname = $('#containerData').attr('class')
        if (classname == "col-md-12 col-lg-12") {
            $("#containerData").removeClass("col-md-12 col-lg-12");
            $("#containerData").addClass("col-md-10 col-lg-10");
        }
        else {
            $("#containerData").removeClass("col-md-10 col-lg-10");
            $("#containerData").addClass("col-md-12 col-lg-12");
        }
    }
})

$("#chckEsop").click(function () {
    if ($("#txtEspo").attr("disabled") == "disabled") {
        $('#txtEspo').removeAttr("disabled")
    }
    else {
        $('#txtEspo').attr("disabled",true);
    }
})
$(".chkoverseas").click(function () {
    $(".overseas").toggle(100);
})




$("#txtCurrentCTC").keypress(function () {
    var $this = $(this);
    var num = $this.val().replace(/[^0-9]+/g, '').replace(/,/gi, "").split("").reverse().join("");
    var num2 = RemoveRougeChar(num.replace(/(.{3})/g, "$1,").split("").reverse().join(""));
    $this.val(num2);
});

$("#txtBonus").keypress(function () {
    var $this = $(this);
    var num = $this.val().replace(/[^0-9]+/g, '').replace(/,/gi, "").split("").reverse().join("");
    var num2 = RemoveRougeChar(num.replace(/(.{3})/g, "$1,").split("").reverse().join(""));
    $this.val(num2);
});

$("#txtExpectedCTC").keypress(function () {
    var $this = $(this);
    var num = $this.val().replace(/[^0-9]+/g, '').replace(/,/gi, "").split("").reverse().join("");
    var num2 = RemoveRougeChar(num.replace(/(.{3})/g, "$1,").split("").reverse().join(""));
    $this.val(num2);
});

function RemoveRougeChar(convertString) {
    if (convertString.substring(0, 1) == ",") {
        return convertString.substring(1, convertString.length)
    }
    return convertString;
}


