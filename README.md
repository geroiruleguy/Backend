---------------------------------- CLASE 1 ------------------------------------------------------------ 

- REPASO JS

-------Declaración de Variables------
- Let: puede ser reasignada
- Const: no puede ser reasignada. Si puedo usar funciones que modifiquen el contenido de la variable. Por ej de un array. 

Son contenedores de datos y estos datos pueden ser de cualquier tipo. 

------Diccionario (objeto):---------
- va siempre entre {} y adentro tiene key: 'value'. Ej. nombre: 'geronimo'.

-------Concepto de Mutabilidad ---------
- Los objetos que tienen cosas adentro pueden modificar su contenido. 
Ej.: array.push(6)

- ejemplo de mutabilidad (modificamos a un elemento del objeto de la siguiente manera): 
const diccionario {
    nombre: 'geronimo'
    apellido: 'iruleguy'
    rol: 'estudiante' 
}
diccionario['pais'] = 'argentina'  ; o,
diccionario.provincia = 'capital federal'


------------Funciones-----------

tipo nombre (parametros) {
    cuerpo
    return (puede estar o no)
}

function nombre (parametros){
    cuerpo
}

Funciones anónimas: funciones sin nombres que las puedo declarar igual

La declaracion de una funcion no devuelve nada pero le asigna un valor a la variable ingresada. 
ejemplo de declaración:
function mostrarPalabra(p){
    console.log (p)
};

Para que haga algo la función:
const mostrarPalabra = function (p) { console.log(p)}

Expresión de función inmediatamente invocada (IIFE):
(function(p) {console.log(p)}) ('chau') // chau

\\Evaluar una expresión: la computadora evalua lo que le ingresamos y devuelve algo (un error, resultado, contenido de la variable)\\

\\se pueden pasar funciones como parametros tanto como funciones como resultado\\

---------Concepto de Closure (Clausura)-----------


----String Template----
variabel normal: 
const nombre = 'geronimo'

variabel con string template:
const saludoEspecifico = `hola como estas {geronimo}`


---------Clases---------
son la representación de un objeto con datos de algo especifico. 
Ejemplo: 
class Cliente {
    constructor (nombre, fecha, direccion) {
        this.nombre = nombre; \\atributos de las instancias 
        this.fechaNacimiento = fecha; \\atributos de las instancias
        this.direccion = direccion; \\atributos de las instancias
    }
}

const cliente1 = new Cliente ('marian', '2002-03-17', 'Dayman5303')

static - atributo de la clase. es una caracteristica de esa clase que va para todos los objetos