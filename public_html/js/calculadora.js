var calculadora = (function(){
    var resultado = 0;
    var producto = 0;
    var cociente = 0;
    var teclas = document.getElementsByClassName('tecla');
    var pantalla =  document.getElementById('display');
    var auxiliar = '0';
    var dotCount = 0;
        
        /**
         * Inicialización de calculadora
         * @returns {undefined}
         */
        var inicializar = function() {
            
            for (var i = 0; i < teclas.length; i++) {
                var tecla = teclas[i];
                tecla.onmousedown = function() {                   
                   comportamientoBoton(this);
                   reducirBoton(this);
                };
                
                tecla.onmouseup = function(){
                   resetBoton(this); 
                };
            }
        };
        
        /**
         * Comportamiento de teclas.
         * @param {type} objeto
         * @returns {undefined}
         */
        var comportamientoBoton = function(objeto){
            console.log('tecla: ' + objeto.id);
            
            switch (objeto.id) {
                case '0':
                    setAuxiliar('0');
                    break;
                case '1':
                    setAuxiliar('1');
                    break;
                case '2':
                    setAuxiliar('2');
                    break;
                case '3':
                    setAuxiliar('3');
                    break;
                case '4':
                    setAuxiliar('4');
                    break;
                case '5':
                    setAuxiliar('5');
                    break;
                case '6':
                    setAuxiliar('6');
                    break;
                case '7':
                    setAuxiliar('7');
                    break;
                case '8':
                    setAuxiliar('8');
                    break;
                case '9':
                    setAuxiliar('9');
                    break;
                case 'punto':
                    setAuxiliar('.');
                    break;
                case 'on':
                    resetPantalla();
                    break;
                case 'signo':
                    break;
                case 'raiz':
                    break;
                case 'dividido':
                    break;
                case 'por':
                    break;
                case 'menos':
                    break;  
                case 'suma':
                    break;    
                case 'igual':
                    break;
            }
            
            
        };
        
        /**
         * 
         * @param {type} aux
         * @returns {undefined}
         */
        var setAuxiliar = function(aux) {
            
            if (auxiliar.length < 8) { //LIMITE A 8 CARACTERES
                if (auxiliar === '0' && aux !== '.' ) { //SE EVITAN CEROS A LA IZQUIERDA
                    auxiliar = aux;
                } else {             
                    if (aux ==='.') { //SE EVITA QUE SE PONGA MAS DE 1 PUNTO
                        if (dotCount === 0) {
                            dotCount += 1;
                        } else {
                            aux = '';
                        }
                    }
                    
                    auxiliar += aux;
                }     
                
            }
            
            console.log('Len: ' + auxiliar.length);
            console.log('auxiliar: ' + auxiliar);
            
            setPantalla(auxiliar);
        };
        
        /**
         * Devuelve el display a valor inicial.
         * @returns {undefined}
         */
        var resetPantalla =  function() {
            auxiliar = '0';
            dotCount = 0;
            console.log('auxiliar: ' + auxiliar);
            setPantalla(auxiliar);
        };
        
        /**
         * Asigna valor al display
         * @param {type} valor
         * @returns {undefined}
         */
        var setPantalla = function(valor) { 
            pantalla.innerHTML =  valor;
        }
        
        /**
         * Reducir el tamaño del botón.
         * @param {type} objeto
         * @returns {undefined}
         */
        var reducirBoton = function(objeto){
            objeto.style = 'transform: scale(0.9)';
        };
        
        /**
         * Devolver el tamaño original al botón.
         * @param {type} objeto
         * @returns {undefined}
         */
        var resetBoton =  function(objeto){
            objeto.style = 'transform: scale(1)';
        };
                
        /**
         * Realiza operación aritmética de suma.
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
         * Realizar la operación aritmética de resta.
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
         * Realizar la operación aritmétrica de multiplicación.
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
         * Realizar la operación aritmética de división.
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
        init : function () {
            inicializar();
        }    
    };

})();