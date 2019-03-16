
function mostrarDibujoSeleccionado(seleccionado){
        
    console.log('mostrarDibujoSeleccionado: ' + seleccionado);

    document.getElementById('dibujoSeleccionado').innerHTML = "";
    document.getElementById('dibujoSeleccionado').innerHTML = "Texto: " + seleccionado;

}

function getSeleccion(seleccionado){
	
    console.log('getSeleccion: ' + seleccionado);
	
    $.getJSON('data/data.json', function(data) {

            console.log('Data: ' + data );

    });
	
}