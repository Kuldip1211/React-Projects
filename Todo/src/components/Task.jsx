import { useState } from "react";

import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
function Task() {
  const [tasks, setTasks] = useState([
   
  ]);
  const[Show,setShow] = useState(false);

 function handleDlate(id){
  // filer is uder to remove the task but that also in the object 
  setTasks(tasks.filter(task => id !== task.id))
 }

  return (
   <>
   <AddTask setTasks={setTasks} tasks={tasks}/>
   <div className="mt-4 border-2 border-slate-100 p-4 w-3/4 m-auto">
     <div className="flex justify-center items-center">
       <h1 className="text-3xl text-center mb-4 font-bold">Task List</h1>
       </div>
       <button className= "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... px-8 py-2 rounded-sm font-bold mb-4" onClick={()=> setShow(!Show)}>{Show ? "Hide" : "Show"}</button>
     <div className="container w-4/2">
       <TaskCard handleDlate={handleDlate} tasks={tasks} Show={Show}/> 
     </div>
   </div>
   </>
    
  );
}

export default Task;
