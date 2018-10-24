$(".thumb").on("click", function () {
    $(this).find(".map").css("position", "initial").appendTo($(".poptrox-popup"));
    $(".poptrox-popup").css("overflow", "hidden");
    
});
