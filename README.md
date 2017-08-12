# EntendiendoNGRX


1 - Creamos el projecto <code> ng new EntendiendoNGRX </code> <br />
2 - Agregamos NGRX <code>npm install @ngrx/core @ngrx/store --save</code> (tag "01")<br />
3 - Explicación del "estado de la aplicación" <br />
4 - Creacion de nuestros estado de aplicación <br />
5 - Lectura de los estados de la aplicación mediante selectores <br />
6 - Modificación del estado de la aplicación mediante acciones de distribución. <br />
7 - Revisión de Reductores(reducers) y Funciones Puras <br />

# Explicaciones

<h3> Pasos 1 y 2 : </h3>
Creación del proyecto mediando el CLI y npm de los modulos que necesitamos. <br /><br />

<h3> Paso 3: </h3>
Definición del estado de la aplicación: <br />
Cuando creamos una aplicación usando Redux, tenemos que pensar en ¿Qué estados queremos almacenar? <br />
Deberiamos capturar todo el estado de la aplicación para que pueda ser accesible desde cualquer lugar. <br />
Cuando hablamos del "estado de la aplicación" tenemos que pensar que vamos a almacenar cosas como: <br />
<ul>
  <li> Datos que viene de la API </li>
  <li> Inputs que escriba el usuario </li>
  <li> Estados de visualización, como botones, funcionalidades y menu </li>
  <li> Preferencias de la aplicación </li>
  <li> ... </li>
</ul>
<br />
Para definir el estado de la aplicación, hay que utilizar una interfaz llamada `AppState` o `IAppState` de acuerdo
con las convenciones de nomenclatura utilizada en su proyecto.
<br />
app/models/IappState.ts
<code>
export interface IAppState { <br />
  readonly background: Background; <br />
  readonly colors: Colors; <br />
  readonly localization: Localization; <br />
  readonly login: Login; <br />
  readonly ShowMainNavigation: boolean; <br />
}
</code>
`Usamos 'readonly' para asegurarnos la inmutabilidad en el tiempo de compilación, y proporciona la implementación inmutable`
  <br />

<h3> Paso 4 </h3>

Vamos a empezar con un simple counter, para ello vamos a crear 'app/models/IAppState.ts' y 'app/models/ICounter.ts' <br />
En ICounter simplemente vamos a declarar que tiene un valor actual del tipo number y en IAppState vamos a declarar que tiene
un counter del tipo ICounter.

 
<h3> paso 5 </h3>

Para leer el estado de una aplicación en Redux, necesitamos del método select() que esta en la clase de ngrx's store. <br />
Este método crea y devuelve un Observable que está enlazado a una propiedad especifica en el estado de la aplicación. <br />
<br />
<code> store.select('counter'); // Returns Observable<Counter> </code>
<br />
Y para obtener el valor actual, podemos pasar en un String Array, en la que cada posición tiene una sola propiedad del estado
de la aplicación, una a la vez en el orden especificado: 
<br />
<code>store.select(['counter', 'currentValue']); // Returns Observable<number></code>
<br />
Mientras que select() permite que varias variaciones del string sean pasadas, tiene su defectos, es decir,
no sabremos realmente si está funcionando correctamnete hasta que ejecutemos el código. <br />
Debito a esto, select() le permite seleccionar valores usando funciones tambien, lo que 
hace que las cosas sean más seguras y sus selectores serán más "reactorables".

<code> store.select(appState => appState.counter.currentValue); </code>

<h5>Creando un servicio para el counter</h5>

Si bien podemos inyectar el Store y elegir lo valores directamente en nuestro componente, se considera que es una práctica 
recomendable incluir esta funcionalidad en servicios independientes.
Este enfoque encapsula toda la lógica de selección y elimina cualquier duplicación donde la ruta de selección se repite en 
toda la aplicación.
<br />
Para esto veamos el archivo 'app/services/counter.service.ts' <br />
Debido a que select() devuelve un Observable, el método getCurrentValue() también aplica un 
filter() para asegurar que los suscriptores no reciben valores falsos. 
Esto simplifica grandemente el código y las plantillas en sus componentes, puesto que no tienen que 
considerar repetidamente el caso del falsey dondequiera que se utilice el valor.
<br />
 
 <h3>Modificación del estado de la aplicación mediante acciones de distribución</h3>
La mayoría de las aplicaciones Redux tienen un conjunto de funciones, llamadas "creadores de acciones"(action creators), que se utilizan para configurar y enviar acciones.
En Angular, es conveniente definir a sus creadores de acción como servicios @Injectable(), desacoplando el despacho, la creación y la lógica de efectos secundarios de las clases @Component en su aplicación.
<br />
<h5> Actions sincronos </h5>
Para eso vayamos a <code>app/store/counter/counter.actions.ts</code> <br />
Como se puede ver, los creadores de acciones son funciones simples que distribuyen objetos de acción que contienen más información que describe la modificación de estado. <br />

Claro <code>app/store/CreateAction</code> no existe, para eso vamos a crearlo y vemos que hace <br/>
La propiedad type es un String que se utilizada para identificar de forma exclusiva su acción en su aplicación. Es una convención común usar lisp-case (como MY_ACTION), sin embargo, usted es libre de usar cualquier estilo de cubierta que haga a su equipo, siempre y cuando sea consistente en todo el proyecto.
La propiedad de payload proporciona una forma de pasar datos adicionales a otras partes de Redux, y es totalmente opcional.


<h5> Actions asyncronos </h5>

Este patrón "ActionCreatorService" es útil si debe manejar acciones asíncronas o condicionales.

En el creador de acciones incrementIfOdd(), creamos una suscripción única al currentValue del contador en el estado de la aplicación. A partir de ahí, verificamos si es extraño antes de enviar una acción.
En el creador de acción incrementAsync(), estamos retrasando la llamada real a dispatch(). Hemos creado una promesa que se resolverá después de la demora. Una vez que se resuelve la Promesa, podemos enviar una acción para incrementar el contador.
 
<h3> 7 - Revisión de Reductores(reducers) y Funciones Puras </h3>

<code>
let x = [1, 2, 3].reduce((sum, number) => sum + number, 0);
// x == 6
</code>



 <br /> <br /> <br />

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.
