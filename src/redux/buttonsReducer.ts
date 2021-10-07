import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './types';
const initState = 0

function buttonReducer(state = initState, action:any) {
   switch (action.type) {
       case COUNTER_INCREMENT:
          return state = state + 1
        case COUNTER_DECREMENT :
           if (state < 0){
               alert("Это поле не может быт отрицательным или нулем")
               return state
           }
           return state = state - 1

       default: return state
   }

}

export default buttonReducer;
