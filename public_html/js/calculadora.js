var calculadora = (function(){
    //var resultado = 0;
    var producto = 0;
    var cociente = 0;
    var teclas = document.getElementsByClassName('tecla');
    var pantalla =  document.getElementById('display');
    var auxiliar = '0';
    var dotCount = 0;
    var operacion = '';
    var operando1 = 0;
    var operando2 = 0;
        
        /**
         * INICIALIZACIÓN DE CALCULADORA
         * ASIGNACIÓN DE COMPORTAMIENTO DE BOTONOES
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
                case 'sign':
                    setSigno();
                    break;
                case 'raiz': 
                    getRaiz2();
                    break;
                case 'dividido':
                    setOperacion('/');
                    break;
                case 'por':
                    setOperacion('*');
                    break;
                case 'menos':
                    setOperacion('-');
                    break;  
                case 'mas':
                    setOperacion('+');
                    break;    
                case 'igual':
                    computoNumerico();
                    break;
            }
        };
        
        /**
         * Asigna los valores a auxiliar
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
            setPantalla(auxiliar);
        };
        
        /**
         * 
         * @param {type} elemental
         * @returns {undefined}
         */
        var setOperacion = function (elemental) {
            operando1 = 0;
            operacion = elemental;
            operando1 = stringToNumber(auxiliar);
            resetPantalla();
        };
        
        /**
         * Devuelve el display a valor inicial.
         * @returns {undefined}
         */
        var resetPantalla = function() {
            auxiliar = '0'; //SE INICIALIZA AUXILIAR A 0
            dotCount = 0; //SE INICIALIZA CONTADOR DE PUNTOS
            setPantalla(auxiliar);
        };
        
        /**
         * Cambia el signo del operando
         * @returns {undefined}
         */
        var setSigno = function() {
            var temp = 0;        
            temp = operacionCambiarSigno(stringToNumber(auxiliar));
            auxiliar  = temp.toString();
            setPantalla(auxiliar);
        };
        
        /**
         * Asigna valor al display
         * @param {type} valor
         * @returns {undefined}
         */
        var setPantalla = function(valor) { 
            pantalla.innerHTML =  valor;
            console.log('DISPLAY: ' + valor);
        }
        
        /**
         * Convierte las cadenas a su valor numerico
         * @param {type} cadena
         * @returns {Number}
         */
        var stringToNumber =  function(cadena) {
            var numero = 0;
            if (cadena.indexOf('.') !== '') { //BUSCA UN PUNTO PARA IDENTIFICAR ENTEROS O FLOTANTES
                numero = parseFloat(cadena);
            } else {
                numero  = parseInt(cadena);
            }
            return numero;
        };
        
        /**
         * Obtener la raiz cuadrada de un numero.
         * @returns {undefined}
         */
        var getRaiz2 =  function () {
            var resultado = 0;
            resultado = operacionRaizCuadrada(stringToNumber(auxiliar));
            auxiliar = resultado;
            setPantalla(auxiliar);
        };
        
        /**
         * Realizar el computo numérico.
         * @returns {undefined}
         */
        var computoNumerico = function() {
            var resultado = 0;
            operando2 = stringToNumber(auxiliar);
            switch (operacion) {
                case '+':
                    resultado = operacionAritmeticaSuma(operando1,operando2);
                    break;
                case '-':
                    resultado = operacionAritmeticaResta(operando1,operando2);
                    break;
                case '*':
                    resultado = operacionAritmeticaMultiplicar(operando1,operando2);
                    break;
                case '/':
                    resultado = operacionAritmeticaDividir(operando1,operando2);
                    break;
            }
            
            //SE VALIDA QUE EL RESULTADO NO EXCEDA LOS 
            /*if (resultado.toString().length > 6) {
                resultado = resultado.toFixed(6);
            }*/
            
            auxiliar = resultado.toString();
            setPantalla(auxiliar);
        };
        
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
         * Convierte un número a negativo o positivo,
         * @param {type} operando
         * @returns {Number|resultado}
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
        
        /**
         * Devuelve la raiz cuadrada de un numero
         * @param {type} operando
         * @returns {sumando1|Number|resultado|sumando2}
         */
        var operacionRaizCuadrada = function (operando) {
            resultado = 0;
            resultado = Math.sqrt(operando);
            if (resultado.toString().length > 6) {
                resultado = resultado.toFixed(6);
            }
            console.log('LA RAIZ CUADRADA DE ' 
                    + operando + ' ES ' + resultado);
            
            /*console.log('LA RAIZ CUADRADA DE ' 
                    + operando + ' ES ' + resultado.toFixed(8));*/
            
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
        raiz : function (a) {
            return  operacionRaizCuadrada(a);
        },
        init : function () {
            inicializar();
        }    
    };

})();