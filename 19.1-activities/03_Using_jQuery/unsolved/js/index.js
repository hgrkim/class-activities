// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color","pink")

// Use jQuery to target the blue class and make it blue.
$(".blue").css("color","teal")

// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html("Hello");

$('#addMe').on('click', function() {
    $("h1").css("color","red");
    $(".blue").css("color", "blue");
    $("#addMe").html("See ya");
});
