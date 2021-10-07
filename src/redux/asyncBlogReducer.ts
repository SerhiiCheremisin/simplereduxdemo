import {POST_ASYNC,ASYNC_POST_DELETER} from './types';

const asyncPosts:[] = []

function asyncPost(state = asyncPosts, action:any) {
    switch (action.type) {
        case POST_ASYNC:
        return state = action.payload
        case ASYNC_POST_DELETER:
        let id = action.payload
        let newState :any = state.filter((el:any) => el.id !== id)
        return state = newState
        default: return state
    }


}

export default asyncPost;
