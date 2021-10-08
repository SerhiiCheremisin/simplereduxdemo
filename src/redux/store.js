import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../saga/index'
const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(rootSaga)
export default store;
