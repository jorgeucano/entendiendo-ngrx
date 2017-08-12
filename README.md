# EntendiendoNGRX


1 - Creamos el projecto <code> ng new EntendiendoNGRX </code> <br />
2 - Agregamos NGRX <code>npm install @ngrx/core @ngrx/store --save</code> (tag "01")<br />
3 - Explicación del "estado de la aplicación" <br />



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
```
export interface IAppState {
  readonly background: Background;
  readonly colors: Colors;
  readonly localization: Localization;
  readonly login: Login;
  readonly ShowMainNavigation: boolean;
}
```
`Usamos 'readonly' para asegurarnos la inmutabilidad en el tiempo de compilación, y proporciona la implementación inmutable`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.
