$(document).ready(function(){
   $("#login").click(function(event) {
   		event.preventDefault();
   		var usuario = $("#usuario").val();
   		var contrasena = $("#contrasena").val();
   		contrasena = $.md5(contrasena);
   		$.ajax({
			    // En data puedes utilizar un objeto JSON, un array o un query string
			    data: {usuario : usuario, contrasena : contrasena, controlador: "login"},
			    //Cambiar a type: POST si necesario
			    type: "POST",
			    // Formato de datos que se espera en la respuesta
			    dataType: "json",
			    // URL a la que se enviará la solicitud Ajax
			    url: "http://192.168.0.103/occmundial.com/login.php",
			    //url: "192.168.0.103"
			})
			 .done(function( data, textStatus, jqXHR ) {
			     if ( console && console.log ) {
			         console.log( "La solicitud se ha completado correctamente." );
			         console.log(data);
			         window.sessionStorage.setItem("usuario",data.usuario);
			     	 window.sessionStorage.setItem("tipo",data.tipo);			     
			     	 window.sessionStorage.setItem("id_usuario",data.id_usuario);
			     	 window.location="bienvenida.html";
			     }


			 })
			 .fail(function( jqXHR, textStatus, errorThrown ) {
			     if ( console && console.log ) {
			         console.log( "La solicitud a fallado: " +  textStatus);
			         $(".usuario_clave_error").show("slow");
			         
			         setTimeout(function(){ 
			         	$(".usuario_clave_error").hide("slow");
			          }, 5000);


			     }
			});
   });
});