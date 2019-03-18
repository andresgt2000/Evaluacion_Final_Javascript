var calculadora = (function(){
    var resultado = 0;
    var producto = 0;
    var cociente = 0;
    var teclas = document.getElementsByClassName('tecla');    
        
        var comportamientoTeclas = function() {
            
            console.log(teclas.length);
        };
        
        /*var inicializar = function() {
           comportamientoTeclas();
           return 0;
        };*/
        
        /**
         * 
         * @param {type} sumando1
         * @param {type} sumando2
         * @returns {Number|sumando1|sumando2}
         */
        var operacionAritmeticaSuma =  function(sumando1, sumando2) {
            resultado = sumando1 + sumando2;
            console.log('EL RESULTADO DE ' + sumando1 + ' + ' 
                    + sumando2 + ' = ' + resultado);
            return resultado;
        };
        
        /**
         * 
         * @param {type} minuendo
         * @param {type} sustraendo
         * @returns {Number|sumando1|sumando2}
         */
        var operacionAritmeticaResta = function(minuendo,sustraendo) {
            resultado = minuendo - sustraendo;
            console.log('EL RESULTADO DE ' + minuendo + ' - ' 
                    + sustraendo + ' = ' + resultado);
            return  resultado;
        };
        
        /**
         * 
         * @param {type} multiplicando
         * @param {type} multiplicador
         * @returns {Number}
         */
        var operacionAritmeticaMultiplicar = function(multiplicando, multiplicador) {
            producto =  multiplicando * multiplicador;
            console.log('EL RESULTADO DE ' + multiplicando + ' * ' 
                    + multiplicador + ' = ' + producto);
            return  producto;
        };
        
        /**
         * 
         * @param {type} dividendo
         * @param {type} divisor
         * @returns {Number|String}
         */
        var operacionAritmeticaDividir = function (dividendo, divisor) {
            if (divisor !== 0) {
               cociente =  dividendo / divisor;
            } else {
                cociente = 'NaN';
            }
            console.log('EL RESULTADO DE ' + dividendo + ' / ' 
                    + divisor + ' = ' + cociente);
            return cociente;
        };
        
        /**
         * 
         * @param {type} operando
         * @returns {Number|sumando1|sumando2}
         */
        var operacionCambiarSigno =  function (operando) {
            resultado = 0;
            if (operando !== 0) {
                resultado = operando * -1;
            }
            console.log('CAMBIANDO EL SIGNO (+/-) DE ' 
                    + operando + ' = ' + resultado);
            return resultado;
        };
    
    return {     
        sumar : function(a, b){
            return operacionAritmeticaSuma(a,b);
        },
        restar : function(a, b) {
            return operacionAritmeticaResta(a,b);
        },
        multiplicar : function(a,b) {
            return operacionAritmeticaMultiplicar(a,b);
        },
        dividir : function(a,b) {
            return operacionAritmeticaDividir(a,b);
        },
        signo : function (a) {
            return operacionCambiarSigno(a);
        },
        exete : function () {
            comportamientoTeclas();
        }    
    };

})();