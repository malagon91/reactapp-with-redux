import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'


//La linea de abajo sustituyo esto que hacia la de abajo tiene mejor sintaxis
// y hereda de redux bindActionsCreators
// const todoChangeHandler =(val) =>{
//   store.dispatch(updateCurrent(val))
// }
//con esto se crea una accion que se asigna al dispatch del store, el objeto (updateCurrent)
// lo estoy trayendo del archivo todo en reducers


/**
 * voy a mover mas logica para que el punto de entrada solo tenga la entrada de la 
 * app y no halla logica ahi
 */
////**** Cambie todo lo commentado que hacia lo mismo, por el objeto provider 
/////*** de react-redux que simplifica las cosas y asi nuestro entry point queda 
//////////** mas redactable (voy a necesitar el objeto connect de la misma libreria)
// const render =() =>{
//    //app state is been declared here
//   const state = store.getState()
//   ReactDOM.render(<App 
//     todos ={state.todos} 
//     currentTodo = {state.currentTodo}
//     changeCurrent={actions.updateCurrent} />, 
//     document.getElementById('root'));

// }

// //render()
// //como entiendo se hace esto para que cada que cambie el state de redux 
// // se vuelva a llamar el metodo  render y pinte los cambios en pantalla
// //store.subscribe(render)

//Solo  se quedo el objeto de updateCurrent porque es una funcion no parte del 
//store
ReactDOM.render(
<Provider store ={store}>
  <App/>
</Provider>, 
  document.getElementById('root'));

 registerServiceWorker();