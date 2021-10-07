import {combineReducers} from 'redux';
import buttonReducer from "./buttonsReducer";
import syncPost from "./syncBlogReducer";
import asyncPost from "./asyncBlogReducer";

export default combineReducers({
buttonReducer,
syncPost,
asyncPost
})
