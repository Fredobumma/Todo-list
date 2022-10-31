import React from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import StrictModeDroppable from "./strictModeDroppable";
import CheckBox from "./checkBox";
import Edit from "./edit";
import Delete from "./delete";
import TaskName from "./taskName";

const Task = ({ tasks, onDragEnd, onCheck, onEdit, onDelete }) => {
  if (!tasks.length)
    return <p className="font-medium p-5 text-xs -mt-3">No tasks added yet</p>;

  return (
    <DragDropContext onDragEnd={(e) => onDragEnd(e, tasks)}>
      <StrictModeDroppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => {
              return (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="flex flex-col items-end p-5 shadow-md rounded-xl bg-slate-50 mx-3 lg:mx-2 xl:mx-0 mb-3"
                      title="Drag and drop to rearrange tasks."
                    >
                      <span className="inline-flex items-center w-full">
                        <CheckBox task={task} onCheck={onCheck} />
                        <TaskName task={task} />
                      </span>
                      <span className="flex justify-between items-center text-xl sm:text-md w-16 h-8">
                        <Edit task={task} onEdit={onEdit} />
                        <Delete task={task} onDelete={onDelete} />
                      </span>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default Task;
