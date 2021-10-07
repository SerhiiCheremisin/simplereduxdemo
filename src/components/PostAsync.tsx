import React from 'react';
import {useDispatch} from "react-redux";
import '../styles/styles.css';
import {deleteAsyncPost} from '../redux/actions';


const PostAsync = ({...props}) => {
    const {title,body,id} = props
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteAsyncPost(id))
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h3>{body}</h3>
            <button onClick={deleteHandler}>Delete this post</button>
        </div>
    );
};

export default PostAsync;
