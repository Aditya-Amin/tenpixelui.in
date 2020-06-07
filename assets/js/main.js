$(document).ready(function(){



    // switch interactions
    $( '#toggle' ).click( function(){
        if( $( this ).prop( 'checked' ) == true ){
            $( '.inactive' ).addClass( 'active-sw' );
        }else{
            $( '.active-sw' ).addClass( 'inactive' );
            $( '.active-sw' ).removeClass( 'active-sw' );
        }
    })


    // dropdowns

    $( '.dropdown' ).click( function(){
        $( this ).next( '.sub-menu' ).slideToggle( 200, 'linear' );
    })


    // mobile menu 
    $( '#hamburger' ).click( function(){

        $( '#mobile-menu' ).animate({
            left:0
        }, 300);
        
    });

    $( '#menu-close' ).click( function(){
        $( '#mobile-menu' ).animate({
            left:-400
        }, 300)
    });
})