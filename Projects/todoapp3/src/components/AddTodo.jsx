import { useState } from "react";

function AddTodo({ onNewItem }){

const [todoName, setTodoName] = useState("");
const [dueDate, setDueDate] = useState("");

const handleNameChange = (event) => {
  setTodoName(event.target.value);
};
const handleDateChange = (event) => {
  setDueDate(event.target.value);

};
const handleAddButtonClicked = (event) => {
  event.preventDefault();
  onNewItem(todoName,dueDate);
  setTodoName("");
  setDueDate("");
      
};

return (
<div class="container">
      <form class="row kg-row" onSubmit={handleAddButtonClicked}>
        
        <div class="col-4">
          <input type="text" placeholder="Enter Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div class="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>

        <div class="col-2">
          <button type="submit" class="btn btn-success kg-button" >
            Add
            </button>
        </div>
      </form>
      </div>
);
};
export default AddTodo;