$(document).ready(function() {

    $("#content").append("<div>");
    $("div").attr("class", "duck");
    $(".duck").css({
        "background-color": "red",
        "width": "50px",
        "height": "50px",
        "position": "absolute",
        "transition": "1s",
    });

    setInterval(move, 1200);
    $(".duck").each(function move() {})

    function move() {
        $(".duck").css("top", Math.floor(Math.random() * 90) + "%");
        $(".duck").css("left", Math.floor(Math.random() * 90) + "%");

    };

    $(".duck").click(shoot);
    $(".duck").each(function shoot() {})

    function shoot(){
        $(".duck").css("display", "none");
    }










});
