$(document).ready(function(){
   $("#bienvenida-button4").click(function(event) {
   		event.preventDefault();
   		/***********Definición del evento****************/
   		var nombre_evento 	= window.localStorage.getItem("nombre_evento");
   		var fecha_evento 	= window.localStorage.getItem("fecha_evento");
   		var ubicacion_evento= window.localStorage.getItem("ubicacion_evento");
   		
   		/***********Toma de dato Registro ExpoEmpleo 16*/
   		var nombre_completo_expo	= window.localStorage.getItem("nombre_completo_expo");
   		var nombre_empresa_expo		= window.localStorage.getItem("nombre_empresa_expo");
   		var email_expo		 		= window.localStorage.getItem("email_expo");
   		var agregar_comentario_expo	= window.localStorage.getItem("agregar_comentario_expo");
   		var telefono_expo	 		= window.localStorage.getItem("telefono_expo");
   		var agregar_favoritos_expo	= window.localStorage.getItem("agregar_favoritos_expo");
   		var celular_expo	 		= window.localStorage.getItem("celular_expo");

		/***********Toma de dato Registro Universidad **/
   		var nombre_completo_universidad		= window.localStorage.getItem("nombre_completo_universidad");
   		var contrasena_universidad			= window.localStorage.getItem("contrasena_universidad");
   		var email_universidad 				= window.localStorage.getItem("email_universidad");
   		var agregar_comentario_universidad	= window.localStorage.getItem("agregar_comentario_universidad");
   		var telefono_universidad			= window.localStorage.getItem("telefono_universidad");
   		var agregar_favoritos_universidad	= window.localStorage.getItem("agregar_favoritos_universidad");
   		var celular_universidad				= window.localStorage.getItem("celular_universidad");

   		$.ajax({
			    // En data puedes utilizar un objeto JSON, un array o un query string
			    data: {
			    	nombre_evento : nombre_evento,
			    	fecha_evento : fecha_evento,
			    	ubicacion_evento : ubicacion_evento,
			    	nombre_completo_expo : nombre_completo_expo,
			    	nombre_empresa_expo : nombre_empresa_expo,
			    	email_expo : email_expo,
			    	agregar_comentario_expo : agregar_comentario_expo,
			    	telefono_expo : telefono_expo,
			    	agregar_favoritos_expo : agregar_favoritos_expo,
			    	celular_expo : celular_expo,
			    	nombre_completo_universidad : nombre_completo_universidad,
			    	contrasena_universidad : contrasena_universidad,
			    	email_universidad : email_universidad,
			    	agregar_comentario_universidad : agregar_comentario_universidad,
			    	telefono_universidad : telefono_universidad,
			    	agregar_favoritos_universidad : agregar_favoritos_universidad,
			    	celular_universidad : celular_universidad,
			    	controlador: "sube_bd"},
			    //Cambiar a type: POST si necesario
			    type: "POST",
			    // Formato de datos que se espera en la respuesta
			    dataType: "json",
			    // URL a la que se enviará la solicitud Ajax
			    url: "http://192.168.0.103/occmundial.com/configurar.php",
			    //url: "192.168.0.103"
			})
			 .done(function( data, textStatus, jqXHR ) {
			     if ( console && console.log ) {
			         console.log( "La solicitud se ha completado correctamente." );
			         console.log(data.nombre_evento);
			         console.log(data.fecha_evento);
			         console.log(data.ubicacion_evento);
			         console.log(data.nombre_completo_expo);
			         console.log(data.nombre_empresa_expo);
			         console.log(data.email_expo);
			         console.log(data.agregar_comentario_expo);
			         console.log(data.telefono_expo);
			         console.log(data.agregar_favoritos_expo);
			         console.log(data.celular_expo);
			         console.log(data.nombre_completo_universidad);
			         console.log(data.contrasena_universidad);
			         console.log(data.email_universidad);
			         console.log(data.agregar_comentario_universidad);
			         console.log(data.telefono_universidad);
			         console.log(data.agregar_favoritos_universidad);
			         console.log(data.celular_universidad);


			         $(".exito_guardado").show("slow");
			         $("#bienvenida-button4").hide("slow");
			         $("#bienvenida-button3").show("slow");

			     }
			     

			 })
			 .fail(function( jqXHR, textStatus, errorThrown ) {
			     if ( console && console.log ) {
			         console.log( "La solicitud a fallado: " +  textStatus);
			         //console.log(data.tipo_usuario);
			         //console.log(data.tipo_contrasena);
			         $(".error_guardado").show("slow");
			         $("#bienvenida-button4").hide("slow");
			         $("#bienvenida-button3").show("slow");
			         
			         setTimeout(function(){ 
			         	$(".usuario_clave_error").hide("slow");
			          }, 5000);


			     }
			});
   });
   $("#bienvenida-button3").click(function(event) {
   		window.location="bienvenida.html";
   });
});