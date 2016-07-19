$(document).ready(function(){
    $("#nuevoEvento-button6").click(function(event) {
    //$("body").on("click","#nuevoEvento-button6",function(event)){
		event.preventDefault();
    	var nombre_completo_universidad = $("#nombre_completo_universidad").val();
		var contrasena_universidad = $("#password_universidad").val();
		var email_universidad = $('#email_universidad').val();
		var agregar_comentario_universidad = $("#agregar_comentario_universidad").val();
		var telefono_universidad = $("#telefono_universidad").val();
		var celular_universidad = $("#celular_universidad").val();
		var agregar_favoritos_universidad = true;

		if($("#agregar_favoritos_universidad").prop('checked')){
			agregar_favoritos_universidad = true;
		}else{
			agregar_favoritos_universidad = false;
		}

		if($("#checkbox-mini-0").prop('checked')){
			window.localStorage.setItem("nombre_completo_universidad",nombre_completo_universidad);
			window.localStorage.setItem("contrasena_universidad",contrasena_universidad);
			window.localStorage.setItem("email_universidad",email_universidad);
			window.localStorage.setItem("email_universidad",email_universidad);
			window.localStorage.setItem("agregar_comentario_universidad",agregar_comentario_universidad);
			window.localStorage.setItem("telefono_universidad",telefono_universidad);
			window.localStorage.setItem("celular_universidad",celular_universidad);
			window.localStorage.setItem("agregar_favoritos_universidad",agregar_favoritos_universidad);
			
			window.location="registrouniversidadcompletado.html";
		}else{
			$(".error_terminos").show("slow");
			setTimeout(function(){ 
				$(".error_terminos").hide("slow");
			}, 5000);
		}

			console.log(nombre_completo_universidad);
			console.log(contrasena_universidad);
			console.log(email_universidad);
			console.log(agregar_comentario_universidad);
			console.log(telefono_universidad);
			console.log(celular_universidad);
			console.log(agregar_favoritos_universidad);
    });
});
