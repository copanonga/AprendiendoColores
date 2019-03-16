
function mostrarElementoSeleccionado(seleccionado) {
        
    console.log('mostrarElementoSeleccionado: ' + seleccionado);

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
                            
                            if (idiomaAMostrar['idioma'] === 'es-ES') {
                                document.getElementById('colorAMostrar').innerHTML = "";
                                document.getElementById('colorAMostrar').innerHTML = idiomaAMostrar['texto'];
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
             
            }
        
    });
    
}


function getSeleccion(seleccionado) {
	
    console.log('getSeleccion: ' + seleccionado);
	
    $.getJSON('data/data.json', function(data) {

            console.log('Data: ' + data );
            console.log("Datos: " + JSON.stringify(data));
            
            var mostrarData= JSON.stringify(data);
            
            if(mostrarData['success']==0) {
                console.log("Error: success " + mostrarData['success']);
            } else {

                console.log("Success");
             
            }

            
    });
	
}

