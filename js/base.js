$(document).ready(function(){
   /*  OPEN FORM */
    $('#buyBtnRUR').on('click', function() {
		$('#paymentMethod').fadeOut('100');
		$('#paymentFormRUR').fadeIn('100');
	});
    $('#buyBtnNTZ').on('click', function() {
		$('#paymentMethod').fadeOut('100');
		$('#paymentFormNTZ').fadeIn('100');
    });

    /* OPEN METHOD */
    $('#paymentMethodLink').on('click', function() {        
		$('#paymentMethod').fadeIn('100');
		$('#paymentFormRUR').fadeOut('100');
    });
    $('#paymentMethodLink2').on('click', function() {        
		$('#paymentMethod').fadeIn('100');
		$('#paymentFormNTZ').fadeOut('100');
    });

    /* FOOTER */
    $("#year").html(new Date().getFullYear());
})