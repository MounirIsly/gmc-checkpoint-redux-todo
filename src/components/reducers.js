
import { ADD_TASK, REMOVE_TASK } from './action-types';

const tasks = (state = [{text: "hello"}], action) => {
    switch(action.type) {
        case ADD_TASK:  {
            const {text} = action.payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo)
        }
        case REMOVE_TASK: {
            const {text} = action.payload;
            return state.filter(task => task.text !== text)
        }
        default: return state
    }
}

export default tasks