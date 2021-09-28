import React, {useState} from 'react';
import './NewToDoForm.css';


const NewToDoForm = ({addToDo}) => {
  const initialState = {
    task: "",
    priority: "medium"
  }
  const [inputData, setInputData] = useState(initialState);
  
  const handleChange = (evt) => {
    setInputData(inputData => ({...inputData, [evt.target.name]:evt.target.value}))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addToDo(inputData);
    setInputData(initialState);
  }


  return (
    <form className="NewToDoForm" onSubmit={handleSubmit}>
      <label htmlFor="task" className="NewToDoForm-label">New task</label>
      <input 
        type="text"
        id="task"
        name="task"
        value={inputData.task}
        onChange={handleChange}
      />
      <fieldset className="NewToDoForm-priority">
        <legend>Priority</legend>
 
        <input 
          type="radio"
          id="choice3"
          name="priority"
          value="low"
          onChange={handleChange}
        />
        <label htmlFor="choice3" className="NewToDoForm-label">Low</label>
        
        <input 
          type="radio"
          id="choice2"
          name="priority"
          value="medium"
          onChange={handleChange}
          checked
        />
        <label htmlFor="choice2" className="NewToDoForm-label">Medium</label>

        <input 
          type="radio"
          id="choice1"
          name="priority"
          value="high"
          onChange={handleChange}
        />
        <label htmlFor="choice1" className="NewToDoForm-label">High</label>

      </fieldset>

      <button className="NewToDoForm-btn">Add</button>
    </form>
  )
}

export default NewToDoForm;