$( document ).ready(function() {
    console.log( "ready!" );
$("#main").show()

//hide contact and portfolio info until clicked
$("#contact-form").hide()
$(".port-content").hide()

//show contact info and hide portfolo info
$("#contact-button").on("click", function() {
    $("#contact-form").show()
    $(".port-content").hide()
    $("#main").hide()
    
})

//show portfolio info and hide contact info
$("#port-button").on("click", function() {
    $(".port-content").show()
    $("#contact-form").hide()
    $("#main").hide()

})

$("#home").on("click", function() {
    $("#main").show()
    $(".port-content").hide()
    $("#contact-form").hide()
    
})




});