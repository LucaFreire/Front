


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

    $("#dot").off()
    $("#dot").click(function () {
        if($(".display").val().includes(".")) {
            return
        }
        $(".display").val($(".display").val() + ".")
    })

    $(".simbolo").off()
    $(".simbolo").click(function () {
        var display = $(".display").val()
        if ("+-*/".includes(display.charAt(display.length - 1))){
                
        }



        
    })
});
