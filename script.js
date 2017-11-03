$("video").prop('muted', true);

$(".mutevideo").click( function (){
    if( $("video").prop('muted') ) {
        $("video").prop('muted', false);
        $( ".mutevideo" ).css({
            "background-position" : "top center"
        });
    } else {
        $("video").prop('muted', true);
        $( ".mutevideo" ).css({
            "background-position" : "bottom center"
        });
    }

});


