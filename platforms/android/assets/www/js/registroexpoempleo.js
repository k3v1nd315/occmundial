$(document).ready(function(){
	$("#nuevoEvento-button6").click(function(event) {
		event.preventDefault();
	//$("body").on("click","#nuevoEvento-button6",function(event)){
	//	event.preventDefault();
    	var nombre_completo_expo = $("#nombre_completo_expo").val();
		var nombre_empresa_expo = $("#nombre_empresa_expo").val();
		var email_expo = $('#email_expo').val();
		var agregar_comentario_expo = $("#agregar_comentario_expo").val();
		var telefono_expo = $("#telefono_expo").val();
		var celular_expo = $("#celular_expo").val();
		var agregar_favoritos_expo = true;

		if($("#agregar_favoritos_expo").prop('checked')){
			agregar_favoritos_expo = true;
		}else{
			agregar_favoritos_expo = false;
		}

		if($("#checkbox-mini-0").prop('checked')){
			window.localStorage.setItem("nombre_completo_expo",nombre_completo_expo);
			window.localStorage.setItem("nombre_empresa_expo",nombre_empresa_expo);
			window.localStorage.setItem("email_expo",email_expo);
			window.localStorage.setItem("agregar_comentario_expo",agregar_comentario_expo);
			window.localStorage.setItem("telefono_expo",telefono_expo);
			window.localStorage.setItem("celular_expo",celular_expo);
			window.localStorage.setItem("agregar_favoritos_expo",agregar_favoritos_expo);
			
			window.location="registroempleocompletado.html";
		}else{
			$(".error_terminos").show("slow");
			setTimeout(function(){ 
				$(".error_terminos").hide("slow");
			}, 5000);
		}

			/*console.log(nombre_completo_expo);
			console.log(nombre_empresa_expo);
			console.log(email_expo);
			console.log(agregar_comentario_expo);
			console.log(telefono_expo);
			console.log(celular_expo);
			console.log(agregar_favoritos_expo);*/
    });
		
	
});