import React, {useState} from 'react';
import {connect} from "react-redux"
import { add_task } from './action-creators';

const AddTask = ({tasks, onCreateTask}) => {
    const [value, setValue] = useState('')

    return (  
        <div className='task-form'>
                <input className='input-form'
                 type="text" value={value} 
                 onChange={(e)=>setValue(e.target.value)} 
                 />
                <button onClick={
                    ()=> {onCreateTask(value); setValue('')}
                } className='form-button'>Add Task</button>
        </div>
    );
}
const mapStateToProps = (state)=> ({
   tasks: state.tasks
})
const mapDispatchToProps = dispatch => ({
   onCreateTask: text => dispatch(add_task(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);