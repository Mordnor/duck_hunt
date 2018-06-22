$(document).ready(function() {

    var up = 100;
    var ducksTab = [];
    var duckNumb = prompt('How much ducks?');

    for (var i = 0; i < duckNumb; i++) {
      $("#content").append("<div>");
      ducksTab.push(Math.floor(Math.random() * 100) + "%");
    }

    console.log(ducksTab);

    $("div").attr("class", "duck");
    $(".duck").css({
        "background-color": "red",
        "width": "50px",
        "height": "50px",
        "position": "absolute",
        "transition": "1s",
    });
    $(".duck").css("top", up + "%");

    setInterval(move, 1000);
    $(".duck").each(function move() {})

    $(".duck").each(function(i){
      $(this).css("top", ducksTab[i]) // à mettre en left
    })

    function move() {
      console.log($(".duck"));
        up -= 8;
        $(this).css("top", up + "%");
        $(this).css("left", Math.floor(Math.random() * 100) + "%");
    };

    $(".duck").click(shoot);
    $(".duck").each(function shoot() {})

    function shoot(){
        $(".duck").css("display", "none");
    }










});
