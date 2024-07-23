import React, { useState } from 'react';

function AddTask({setTasks,tasks}) {
  const [text, setText] = useState('');
  const[Progress,setProgress]= useState(true);

  const addTask = (event) => {
    setText(event.target.value);
  };

  const resetTask = () => {
    setText("");
  };

  const updateTask = () => {

   const task= {
    id : Math.floor(Math.random()*1000),
    task : text,
    completed : Progress
   }
   setTasks([...tasks,task]);
   resetTask();
  
  }
  return (
    <>
      <div className="flex justify-center gap-x-4 items-center p-5 bg-slate-200 mt-3 w-3/4 m-auto m-5">
        <input
          type="text"
          id="task-input"
          onChange={addTask}
          className="w-50 h-10 flex items-center text-xl px-2"
          value={text}
        />
        <select onChange={(event) => setProgress(event.target.value === 'true')} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-2 rounded-sm font-bold font-bold">
         <option value="true">Complate</option>
         <option value="false">Panding</option>
        </select>
        <button
          onClick={() => updateTask()}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-2 rounded-sm font-bold"
        >
          Add
        </button>
        <button
          onClick={resetTask}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-2 rounded-sm font-bold"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default AddTask;
