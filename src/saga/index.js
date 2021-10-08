import {take,call,put} from 'redux-saga/effects'
import {POST_ASYNC} from "../redux/types";

async function request() {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    const response = await request.json()
    return response
}

export function* rootSaga() {
yield sagaWatcher()
}

export function* sagaWatcher() {
     yield take('ASYNC_SAGA_CLICK')
     yield sagaWorker()
}

export function* sagaWorker() {
     const state = yield call(request)
     yield put({type:POST_ASYNC, payload:state})
}
