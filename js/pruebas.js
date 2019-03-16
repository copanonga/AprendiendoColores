
function inicializarSeccionInferior() {
    
    var elementoBotoneraSeccionInferior = document.getElementById('botoneraSeccionInferior');
    elementoBotoneraSeccionInferior.innerHTML = "";
    
    var objetosBotonera = "";
    for ( var i = 0 ; i < 20 ; i++) {
        
        objetosBotonera = objetosBotonera + '<span class="rounded-circle circulo" onclick="mostrarElementoSeleccionado(' + i + ')"></span>';
        
    }
    
    elementoBotoneraSeccionInferior.innerHTML = objetosBotonera;
    
}

function mostrarElementoSeleccionado(seleccionado){
        
    console.log('mostrarElementoSeleccionado: ' + seleccionado);

    document.getElementById('dibujoSeleccionado').innerHTML = "";
    document.getElementById('dibujoSeleccionado').innerHTML = "Texto: " + seleccionado;

}

function getSeleccion(seleccionado){
	
    console.log('getSeleccion: ' + seleccionado);
	
    $.getJSON('data/data.json', function(data) {

            console.log('Data: ' + data );

    });
	
}

