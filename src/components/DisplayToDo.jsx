import React from "react";

import path from '../assets/Path.svg';
import xshape from '../assets/xshape.svg';

const DisplayToDo = ({ todo, index, doneTask, setDoneTask, activeTask, setActiveTask, completeTask, removeTask }) => {

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >

      <li
        className="list-group-item">
        <button
          className="done"
          onClick={() => {
            completeTask(index)
            if (todo.isCompleted) {
              const newDoneTask = doneTask + 1;
              setDoneTask(newDoneTask);
              const newActiveTask = activeTask - 1;
              setActiveTask(newActiveTask);
            } else {
              const newDoneTask = doneTask - 1;
              setDoneTask(newDoneTask);
              const newActiveTask = activeTask + 1;
              setActiveTask(newActiveTask);
            }
          }
          }
        >
          <img src={path} alt="checked" />
        </button>

        <strong>{todo.text}</strong>

        <button
          className="remove"
          onClick={() => {
            removeTask(index)
            if (activeTask !== 0) {
              const newActiveTask = activeTask - 1;
              setActiveTask(newActiveTask);
            }
          }
          }
        >
          <img src={xshape} alt="checked" />
        </button>
      </li>
    </div >
  );
};

export default DisplayToDo;