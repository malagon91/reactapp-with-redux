import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/todo'

export default createStore(
    reducer,
    applyMiddleware(thunk)
)
/**
 * applyMiddleware(thunk)
)se agregaron para poder hacer asincrono las funciones del store redux (comenzamos a usar api calls)
 */