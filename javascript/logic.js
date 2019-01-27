$( document ).ready(function() {
    console.log( "ready!" );

//hide contact and portfolio info until clicked
$("#contact-form").hide()
$(".port-content").hide()

//show contact info and hide portfolo info
$("#contact-button").on("click", function() {
    $("#contact-form").toggle()
    $(".port-content").hide()
    
})

//show portfolio info and hide contact info
$("#port-button").on("click", function() {
    $(".port-content").toggle()
    $("#contact-form").hide()

})


});