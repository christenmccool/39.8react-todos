import React, {useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';


const ToDoList = () => {
  const initalState = JSON.parse(localStorage.getItem("toDoList")) || [];
  const [toDoList, setToDoList] = useState(initalState);
  useEffect(() => localStorage.setItem("toDoList", JSON.stringify(toDoList)), [toDoList]);

  const renderToDos = () => (
    toDoList.map(toDo => (
      <ToDo 
        id={toDo.id}
        key={toDo.id}
        task={toDo.task} 
        priority={toDo.priority} 
        complete={toDo.complete}
        fadeout={toDo.fadeout}
        toEdit={toDo.toEdit}
        deleteToDo={() => deleteToDo(toDo.id)}
        toggleProp={(prop) => toggleProp(toDo.id, prop)}
        editToDo={editToDo}
      />
    ))
  );

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter(toDo => toDo.id !== id));
  }

  const addToDo = (taskObj) => {
    setToDoList([...toDoList, {...taskObj, complete: false, fadeout: false, toEdit: false, id: uuid()}]);

    // localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  const toggleProp = (id, prop) => {
    const targetToDo = toDoList.find(toDo => toDo.id === id);

    targetToDo[prop] = !targetToDo[prop];
    setToDoList(toDoList.map(todo => todo.id === id ? targetToDo : todo));
  }

  const editToDo = (id, newData) => {
    const targetToDo = toDoList.find(toDo => toDo.id === id);
    const editedToDo = {...targetToDo, ...newData, toEdit: false};

    setToDoList(toDoList.map(todo => todo.id === id ? editedToDo : todo));
  }


  return (
    <div className="ToDoList">
      <h1 className="ToDoList-title">To Do List</h1>

      <div className="ToDoList-newform">
        <NewToDoForm 
          addToDo={addToDo}
        />
      </div>

      <div className="ToDoList-list">
        {renderToDos()}
      </div>
    </div>
  )
}

export default ToDoList;