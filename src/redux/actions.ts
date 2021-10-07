import {COUNTER_INCREMENT, COUNTER_DECREMENT, POST_ADDER, POST_DELETER, POST_ASYNC,ASYNC_POST_DELETER} from './types';


export function increment () {
  return{
      type : COUNTER_INCREMENT
  }
}

export function decrement() {
   return{
       type : COUNTER_DECREMENT
   }
}

export function addPost(post:object) {
    return{
        type : POST_ADDER,
        payload: post
    }
}

export function deletePost(id:any) {
    return{
        type : POST_DELETER,
        payload: id
    }
}

export function deleteAsyncPost(id:any) {
    return{
        type : ASYNC_POST_DELETER,
        payload: id
    }
}

export function asyncRun() {
   return async (dispatch:any) => {
       const request = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
       const response = await request.json()
       dispatch({type : POST_ASYNC, payload :response })
   }
}



