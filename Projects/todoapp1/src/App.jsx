import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  

  return (
  <center>
    <AppName></AppName>
    <div className= "items-container">
    <AddTodo></AddTodo>
    
    <TodoItem1></TodoItem1>
    <TodoItem2></TodoItem2>
    </div>
    
  </center>
  );
}

export default App;
