
function mostrarElementoSeleccionado(seleccionado) {
        
    console.log('mostrarElementoSeleccionado: ' + seleccionado);
    document.getElementById('idColorSeleccionado').value = seleccionado;
    var elementoIdiomaSeleccionado = document.getElementById('idiomaSeleccionado').value;

    $.getJSON('data/data.json', function(data) {

            //console.log("Datos: " + JSON.stringify(data));
            
            if(data['success']==0) {
                console.log("Error: success " + data['success']);
            } else {

                console.log("Success");
                
                var coloresObtenidos = data['colores'];
                
                for ( var i = 0 ; i < coloresObtenidos.length ; i++) {
                    
                    var colorObtenido = coloresObtenidos[i];
                    
                    if (colorObtenido['id'] === seleccionado) {
                        
                        var idiomaObtenido = colorObtenido['idioma'];
                        
                        for ( var j = 0 ; j < idiomaObtenido.length ; j++) {
                            
                            var idiomaAMostrar = idiomaObtenido[j];
                            
                            if (idiomaAMostrar['idioma'] == elementoIdiomaSeleccionado) {

                                document.getElementById('colorAMostrar').innerHTML = "";
                                document.getElementById('colorAMostrar').innerHTML = idiomaAMostrar['texto'];
                                
                                document.getElementById("dibujoAMostrar").src=colorObtenido['imagen'];

                            }
                            
                        }
                        
                    }
                    
                }
                
            }
        
    });

}

function inicializarBotoneraSeccionInferior() {
    
    var elementoBotoneraSeccionInferior = document.getElementById('botoneraSeccionInferior');
    elementoBotoneraSeccionInferior.innerHTML = "";
    
    $.getJSON('data/data.json', function(data) {

            //console.log("Datos: " + JSON.stringify(data));
            
            if(data['success']==0) {
                console.log("Error: success " + data['success']);
            } else {

                console.log("Success");
                
                var coloresObtenidos = data['colores'];
                
                var objetosBotonera = "";
                for ( var i = 0 ; i < coloresObtenidos.length ; i++) {
                    
                    var colorObtenido = coloresObtenidos[i];
                    objetosBotonera = objetosBotonera + '<span style="background-color:' + colorObtenido['hex'] + '" class="rounded-circle circulo" onclick="mostrarElementoSeleccionado(' + colorObtenido['id'] + ')"></span>';
                    
                }

                elementoBotoneraSeccionInferior.innerHTML = objetosBotonera;
                
                mostrarElementoSeleccionado(1);
                document.getElementById('idColorSeleccionado').value = 1;
             
            }
        
    });
    
}


function reproducirTexto() {
	
    var seleccionado = document.getElementById('idColorSeleccionado').value;
    console.log('getSeleccion: ' + seleccionado);
    var elementoIdiomaSeleccionado = document.getElementById('idiomaSeleccionado').value;
	
    $.getJSON('data/data.json', function(data) {

            //console.log("Datos: " + JSON.stringify(data));
            
            if(data['success']==0) {
                console.log("Error: success " + data['success']);
            } else {

                console.log("Success");
                
                var coloresObtenidos = data['colores'];
                
                for ( var i = 0 ; i < coloresObtenidos.length ; i++) {
                    
                    var colorObtenido = coloresObtenidos[i];
                    
                    if (colorObtenido['id'] == seleccionado) {
                        
                        var idiomaObtenido = colorObtenido['idioma'];
                        
                        for ( var j = 0 ; j < idiomaObtenido.length ; j++) {
                            
                            var idiomaAMostrar = idiomaObtenido[j];
                            
                            if (idiomaAMostrar['idioma'] == elementoIdiomaSeleccionado) {
                                
                                responsiveVoice.speak(idiomaAMostrar['texto'],"Spanish Female");

                            }
                            
                        }
                        
                    }
                    
                }
                
            }
        
    });
	
}

