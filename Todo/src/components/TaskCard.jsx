import { MdDelete } from "react-icons/md";

function TaskCard({ handleDlate, tasks,Show }) {
  return (
    <div>
      <ul className="list-group text-2xl">
        {Show && tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="w-75 d-flex justify-content-between align-items-center">
              {task.task}
              <span className={`badge ${task.completed ? 'bg-success' : 'bg-danger'}`}>
                {task.completed ? 'Completed' : 'Incomplete'}
              </span>
            </span>
            <button onClick={() => handleDlate(task.id)} className="btn btn-danger">
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskCard;
