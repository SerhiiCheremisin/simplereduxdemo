import React from 'react';
import {useDispatch} from "react-redux";
import '../styles/styles.css';
import {deletePost} from '../redux/actions';


const Post = ({...props}) => {
    const {title,body,id} = props
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deletePost(id))
}
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <button onClick={deleteHandler}>Delete this post</button>
         </div>
    );
};

export default Post;
