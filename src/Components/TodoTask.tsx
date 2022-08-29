import React from "react";
import { ITask } from "../Interfaces";
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      {/*displaying task and deadline*/}
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        className="deleteButton"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
      {/*displaying task and deadline*/}
      {/* {task.taskName} {task.deadline}*/}
    </div>
  );
};

export default TodoTask;
