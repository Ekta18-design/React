import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name:"Buy Milk",
      dueDate: "01/05/2024",

    },
    {
      name:"Go to College ",
      dueDate: "12/06/2024",

    },
];

  return (
  <center>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
    
  </center>
  );
}

export default App;
