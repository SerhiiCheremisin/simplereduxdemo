import {POST_ADDER, POST_DELETER} from './types';

const syncPosts:[] = []

function syncPost(state:any = syncPosts, action:any ) {
  switch (action.type) {
    case POST_ADDER:
     state = [...state,...action.payload]
    return state
      case POST_DELETER:
       let id = action.payload;
       const newState = state.filter((el:any) => el.id !== id )
       return state = newState
    default:return state
  }

}

export default syncPost;
