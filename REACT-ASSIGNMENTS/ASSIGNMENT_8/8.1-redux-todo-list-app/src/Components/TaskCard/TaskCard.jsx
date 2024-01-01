// TaskCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../store/actions/index';
import './TaskCard.css';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleTask(task.id));
    const handleDelete = () => dispatch(deleteTask(task.id));

    return (
        <div className={`task-card ${task.completed ? 'task-card-completed' : ''}`}>
            <span className={task.completed ? 'task-text completed' : 'task-text'}>
                {task.text}
            </span>
            <div className="task-card-actions">
                <button className="toggle-task" onClick={handleToggle}>
                    {task.completed ? 'Uncomplete' : 'Complete'}
                </button>
                <button className="delete-task" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
