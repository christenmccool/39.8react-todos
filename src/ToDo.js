import React from 'react';
import './ToDo.css';
import EditToDoForm from './EditToDoForm';

const ToDo = ( {id, task, priority, complete, toEdit, fadeout, deleteToDo, toggleProp, editToDo} ) => {
  let taskClassName = complete ? "ToDo-task ToDo-task-complete" : "ToDo-task";
  taskClassName = priority==="high" ? `${taskClassName} ToDo-task-high` : taskClassName;
  taskClassName = priority==="low" ? `${taskClassName} ToDo-task-low` : taskClassName;
  taskClassName = priority==="low" ? `${taskClassName} ToDo-task-low` : taskClassName;
  
  let ToDoclassName = fadeout ? "ToDo-fadeout" : "ToDo";

  const formStyle = toEdit ? {display: 'block'} : {display: 'none'};

  const handleDelete = () => {
    toggleProp("fadeout");
    setTimeout(() => deleteToDo(), 2500);
    // deleteToDo();
  }

  return (
    <div className={ToDoclassName}>
      <div className="ToDo-main">
        <div className={taskClassName}>{task}</div>
        
        <button className="ToDo-complete-btn" onClick={()=>toggleProp('complete')}>
          Complete
        </button>

        <button className="ToDo-delete-btn" onClick={handleDelete}>
          X
        </button>

        <button className="ToDo-edit-btn" onClick={()=>toggleProp('toEdit')}>
          Edit
        </button>
      </div>

      <div className="ToDo-editform" style = {formStyle}>
        <EditToDoForm 
          id={id}
          task={task}
          priority={priority}
          toggleProp={toggleProp}
          editToDo={editToDo}
        />
      </div>
    </div>
  )
}

export default ToDo;