$("img").on("mouseenter", function(){
    $(this).animate ({
        opacity: "75%",
    }, 2000)
})

$("img").on("mouseout", function(){
    $(this).animate ({
        opacity: "100%",
    }, 2000)
})