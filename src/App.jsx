import { useEffect, useState } from "react"
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import toast from "react-hot-toast";
 function App() {
  const[tasks, setTasks] = useState([]);
 console.log("tasks", tasks);
 useEffect(() =>{
 setTasks(JSON.parse(localStorage.getItem("tasks")))
 },[]);
 const handleToast = (message) => {
  toast(message);
};

  return (
    <DndProvider backend={HTML5Backend}>
    
    <div className="bg-slate-100 w-screen h-screen flex flex-col ite
    items-center pt-3 gap-16">
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTask tasks={tasks} setTasks={setTasks}/>
      
    </div>
    </DndProvider>
  )
}
export default App;