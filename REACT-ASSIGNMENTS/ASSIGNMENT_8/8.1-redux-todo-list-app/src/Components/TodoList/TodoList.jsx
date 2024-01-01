// ToDoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../store/actions/index';
import TaskCard from '../TaskCard/TaskCard';
import './TodoList.css';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task.trim()));
            setTask('');
        }
    };

    return (
        <div className="todo-list">
            <h1>ToDo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="New task..."
                />
                <button className="add-task" onClick={handleAddTask}>Add Task</button>
            </div>
            {tasks.length === 0 ? (
                <p className="no-tasks">No Tasks Added</p>
            ) : (
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            )}
        </div>
    );
};

export default ToDoList;
