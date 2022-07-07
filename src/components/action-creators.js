
import { ADD_TASK, REMOVE_TASK } from './action-types';
export const add_task = (task) => ({
    type: ADD_TASK,
    payload: {
       text: task
    }
})
export const remove_task = (task) => ({
    type: REMOVE_TASK,
    payload: {
        text: task
    }
})