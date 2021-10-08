import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {increment,decrement} from '../redux/actions';
import PostAsync from "./PostAsync";


const Async = ({...props}):JSX.Element => {
const {state} = props
const dispatch = useDispatch()

    const logic = state.asyncPost.length === 0 ? <h3>Nothing to show yet</h3> : state.asyncPost.map((el:any,id:number)=> {
        return(
            <div key={el.id}>
             <PostAsync
             title = {el.title}
             body = {el.body}
             id = {el.id}
             />
              </div>
        )
    })
    return (
        <>
        <div className="bnt-wrapper">
            <span>{`Just dummy counter ${state.buttonReducer}`}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <button onClick={() => dispatch({type:"ASYNC_SAGA_CLICK"})}>Fetch</button>
            {logic}
        </>
    );
};
const mapStateToProps = (state:any) => {
    return {
        state
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Async);
