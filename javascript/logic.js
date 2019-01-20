$( document ).ready(function() {
    console.log( "ready!" );


$("#contact-form").hide()
$(".port-content").hide()


$("#contact-button").on("click", function() {
    $("#contact-form").toggle()
    $(".port-content").hide()
    
})

$("#port-button").on("click", function() {
    $(".port-content").toggle()
    $("#contact-form").hide()

})


});