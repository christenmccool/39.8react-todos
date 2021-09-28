import React, {useState} from 'react';
import './EditToDoForm.css'

const EditToDoForm = ({id, task, priority, toggleProp, editToDo}) => {

  const initialState = {task, priority}
  const [inputData, setInputData] = useState(initialState);

  const handleChange = (evt) => {
    setInputData(inputData => ({...inputData, [evt.target.name]:evt.target.value}));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editToDo(id, inputData);
    // toggleProp('toEdit');
  }

  return (

    <form className="EditToDoForm" onSubmit={handleSubmit}>
      <label htmlFor="task" className="EditToDoForm-label">Edit task</label>
      <input 
        type="text"
        id="task"
        name="task"
        value={inputData.task}
        onChange={handleChange}
      />
      <fieldset className="EditToDoForm-priority">
        <legend>Priority</legend>
 
        <input 
          type="radio"
          id="choice3"
          name="priority"
          value="low"
          checked={inputData.priority === "low"}
          onChange={handleChange}
        />
        <label htmlFor="choice3" className="EditToDoForm-label">Low</label>
        
        <input 
          type="radio"
          id="choice2"
          name="priority"
          value="medium"
          checked={inputData.priority === "medium"}
          onChange={handleChange}
        />
        <label htmlFor="choice2" className="EditToDoForm-label">Medium</label>

        <input 
          type="radio"
          id="choice1"
          name="priority"
          value="high"
          checked={inputData.priority === "high"}
          onChange={handleChange}
        />
        <label htmlFor="choice1" className="EditToDoForm-label">High</label>

      </fieldset>

      <button className="EditToDoForm-btn">Save</button>
    </form>

  )
}

export default EditToDoForm;