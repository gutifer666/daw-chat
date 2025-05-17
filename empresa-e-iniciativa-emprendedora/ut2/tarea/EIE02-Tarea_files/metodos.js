function O(id) {
	return document.getElementById(id);
}

function cambiarContenido(contenedor, contenido) {
	$(contenedor).css("display", "none");
	$(contenedor).load(contenido, function() {
		$(contenedor).css("display", "inline");
	});
}