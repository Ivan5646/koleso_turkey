$(document).ready(function(){
    // open rur form
    $('#cardBtn').on('click', function() {
        $('#formOverlay').fadeIn();
        $('#paymentFormRUR').fadeIn();
    })

    // open ntz form
    $('#ntzdBtn').on('click', function() {
        $('#formOverlay').fadeIn();
        $('#paymentFormNTZ').fadeIn();
    })

    // close rur form
    $('#closeRurForm').on('click', function() {
        $('#formOverlay').fadeOut();
        $('#paymentFormRUR').fadeOut();
    })

    // close ntz form
    $('#closeNTZForm').on('click', function() {
        $('#formOverlay').fadeOut();
        $('#paymentFormNTZ').fadeOut();
    })
    
    // scroll to payment
    $('#headerToPaymentBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
    })
    $('#middleToPaymentBtn').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
    })
})