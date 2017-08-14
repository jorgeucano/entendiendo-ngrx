# FirstExample

<ul>
  <li> 1 - <code> npm install @ngrx/store --save </code>
  <li> 2 - creamos <code> app/counter.ts </code>
  <li> 3 - importamos el <code>StoreModule</code> y el <code>counterReducer</code> en el AppModule.
  <li> 4 - Agregamos a los imports <code> StoreModule.provideStore({ counter: counterReducer }) </code>
  <li> 5 - Injectamos el Store y usamos nuestras funciones en el app.component
</ul>
