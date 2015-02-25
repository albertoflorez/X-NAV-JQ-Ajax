jQuery(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "text",
	    cache: false
    }).done(function(texto) {
        $( "#hola" ).append( texto );
    });
    $("#adios").click(function(){
	$.ajax({
	    type: "GET",
	    url: "text2",
	    cache: false
	}).done(function( text ) {
	    $("#adios").html(text);
	});	
    });
    
});
