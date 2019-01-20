$( document ).ready(function() {
    console.log( "ready!" );

//click portfolio button to show images and links to work
//click resume button to link to pdf 
//click contact to show contact form

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