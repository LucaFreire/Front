

$(document).ready(function () {
    $("button").click(function () {
        var display = $(".display").val()
        $(".display").val(display + $(this).text())
    })

    $("#clear").click(function () {
        $(".display").val("")
    })

    $("#del").off()
    $("#del").click(function () {
        var display = $(".display").val()
        $(".display").val(display.slice(0, - 1))
    })

    $("#equal").off()
    $("#equal").click(function () {
        var equacao = $(".display").val()
        $(".display").val(eval(equacao))
    })
});
