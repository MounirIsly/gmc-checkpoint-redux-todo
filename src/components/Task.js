import React from 'react';

const Task = ({task, onRemovePressed}) => {
    return ( 
        <div className='task'>
            <span className='task-title'> {task.text} </span>
            <div className='task-buttons'>
                <button className='completed-button'>Completed</button>
                <button onClick={()=> onRemovePressed(task.text)} className='remove-button'>Remove Task</button>
            </div>
        </div>
     );
}
 
export default Task;