$(document).ready(function(){
	var headerNombreUsuario = window.sessionStorage.getItem("usuario");
	var headerTipoUsuario	= window.sessionStorage.getItem("tipo");
	//	console.log(headerNombreUsuario);
	$(".header_nombre_usuario").append(headerNombreUsuario);
});