$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")) {
        $("#theme").attr("href","css/blank.css")
        onsole.log("it's regular")
    }

    else if ($(this).hasClass("blue")) {
        $("#theme").attr("href","css/blue.css")
        console.log("it's blue")
    }

    else if ($(this).hasClass("dark")) {
        $("#theme").attr("href","css/dark.css")
        onsole.log("it's dark")
    }

})

