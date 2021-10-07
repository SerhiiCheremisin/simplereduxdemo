import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {addPost} from '../redux/actions';
import Post from "./Post";


const Sync = ({...props}):JSX.Element => {
    const {state} = props

 const [title, setTitle] = useState<string>('');
 const [body, setBody] = useState<string>('');
 const dispatch = useDispatch();

 const logic = state.syncPost.length === 0 ? <h3>We have no posts for now</h3> :  state.syncPost.map((el:any, id:number) => {
     return(
         <Post key={el.id}
             title = {el.title}
             body = {el.body}
             id = {el.id}
         />
     )
 })
    const formHandler = (e:any) => {
        e.preventDefault();
        if (!title || !body){
            alert("Fill all fields")
            return
        }
        let tempObject = [{
            title : title,
            body: body,
            id : new Date().toLocaleString()
        }]
        dispatch(addPost(tempObject))
        setBody('')
        setTitle('')
    }

    return (
        <>
            <h2>This is non async blog</h2>
            <form action="#" onSubmit={formHandler}>
                <label>Post Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
                <label>Post Body</label>
                <input value={body} onChange={(e) => setBody(e.target.value)} type="text"/>
                <button type="submit">ADD new Post</button>
            </form>
            {logic}
        </>
    );
};

const mapStateToProps = (state:any) => {
    return{
        state
    }
}
export default connect(mapStateToProps)(Sync);
