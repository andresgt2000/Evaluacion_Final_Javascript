var calculadora = (function(){
    var resultado = 0;
    var producto = 0;
    var cociente = 0;
    
    var comportamientoTecla = (function() {
        var teclas = document.getElementsByClassName('tecla');
        
        function mouseOver() {
            teclas.style= 'width=75%;';
        }
        
        function mouseOut() {
            teclas.style= 'width=100%;';
        }
        
        teclas.onmouseover = mouseOver();
        
        teclas.onmouseout = mouseOut();
    });
    
    var inicializar = (function(){
        comportamientoTecla();
    });
    
    return {
        sumar : function(sumando1, sumando2){
            resultado = sumando1 + sumando2;
            console.log('EL RESULTADO DE ' + sumando1 + ' + ' 
                    + sumando2 + ' = ' + resultado);
            return resultado;
        },
        restar : function(minuendo, sustraendo) {
            resultado = minuendo - sustraendo;
            console.log('EL RESULTADO DE ' + minuendo + ' - ' 
                    + sustraendo + ' = ' + resultado);
            return  resultado;
        },
        multiplicar : function(multiplicando, multiplicador) {
            producto =  multiplicando * multiplicador;
            console.log('EL RESULTADO DE ' + multiplicando + ' * ' 
                    + multiplicador + ' = ' + producto);
            return  producto;
        },
        dividir : function(dividendo, divisor) {
            if (divisor !== 0) {
               cociente =  dividendo / divisor;
            } else {
                cociente = 'NaN';
            }
            console.log('EL RESULTADO DE ' + dividendo + ' / ' 
                    + divisor + ' = ' + cociente);
            return cociente;
        },
        signo : function (operando) {
            resultado = 0;
            if (operando !== 0) {
                resultado = operando * -1;
            }
            console.log('CAMBIANDO EL SIGNO (+/-) DE ' 
                    + operando + ' = ' + resultado);
            return resultado;
        },     
        init : inicializar
    }

})();