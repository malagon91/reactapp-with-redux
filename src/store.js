import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import messagereducer from './reducers/messages'
import Todoreducer from './reducers/todo'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    todo: Todoreducer,
    message: messagereducer
})

export default createStore(
    reducer,
    composeWithDevTools(
    applyMiddleware(thunk)
    )
)
/**
 * applyMiddleware(thunk)
)se agregaron para poder hacer asincrono las funciones del store redux (comenzamos a usar api calls)
 */

 /**
  *  composeWithDevTools(
    applyMiddleware(thunk)
    )
    agregue el composerWithDevTools para poder hacer debuggin de redux en el navegador.
    solo se necesitaria para un sitio de dev, no produccion
  */