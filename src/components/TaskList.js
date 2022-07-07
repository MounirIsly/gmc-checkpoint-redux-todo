import React from 'react';
import { connect } from 'react-redux';
import Task from './Task'
import { remove_task } from './action-creators';
import AddTask from './AddTask';
const TaskList = ({tasks = [], onRemovePressed}) => {
    return ( 
        <div>
            <div>
            <AddTask />
            </div>
        <div className='task-list'>
            {tasks.map((task, key)=><Task key={key} task={task} onRemovePressed={onRemovePressed}/>)}
        </div>
        </div>
     );
}
const mapStateToProps = (state) => {
   return {
    tasks: state.tasks
   }
}
const mapDispatchToProps = dispatch => {
    return {
        onRemovePressed: text => dispatch(remove_task(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);