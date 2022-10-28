import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import Heading from "./common/heading";
import AddTaskInput from "./common/addTaskInput";
import TaskSection from "./common/taskSection";

const TodoList = () => {
  const [tasksObj, setTasksObj] = useState({
    sections: [{ name: "Tasks" }, { name: "Completed Tasks" }],
    tasks: [],
    inputQuery: "",
  });
  const obj = { ...tasksObj };
  const unique_id = uuid().slice(0, 8);

  const handleChange = ({ target: { value } }) => {
    obj.inputQuery = value;
    setTasksObj(obj);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (obj.inputQuery) {
      obj.tasks.unshift({
        name: obj.inputQuery,
        section: tasksObj.sections[0].name,
        id: unique_id,
      });
      obj.inputQuery = "";
    } else toast("Please add a new task.");

    setTasksObj(obj);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !obj.inputQuery) {
      toast("Please add a new task.");
      event.preventDefault();
    }

    if (event.key === "Enter" && obj.inputQuery) {
      obj.tasks.unshift({
        name: obj.inputQuery,
        section: tasksObj.sections[0].name,
        id: unique_id,
      });
      obj.inputQuery = "";
      event.preventDefault();
    }

    setTasksObj(obj);
  };

  const handleCheckBox = (task) => {
    const index = obj.tasks.indexOf(task);
    obj.tasks[index].checkBox = !obj.tasks[index].checkBox;
    obj.tasks[index].section = obj.tasks[index].checkBox
      ? tasksObj.sections[1].name
      : tasksObj.sections[0].name;

    setTasksObj(obj);
  };

  const handleEdit = (task) => {
    const index = obj.tasks.indexOf(task);
    obj.inputQuery = obj.tasks[index].name;
    obj.tasks.splice(index, 1);

    setTasksObj(obj);
  };

  const handleDelete = (task) => {
    const index = obj.tasks.indexOf(task);
    obj.tasks.splice(index, 1);
    setTasksObj(obj);
  };

  const handleDragEnd = ({ source, destination: end, draggableId }) => {
    if (!end) return;

    const currentTask = obj.tasks.find((t) => t.id === draggableId);
    const endTask = obj.tasks
      .filter((t) => t.section === currentTask.section)
      .findIndex((t, index) => index === end.index);
    const endTaskIndex = end.index > source.index ? endTask + 1 : endTask;

    obj.tasks.splice(obj.tasks.indexOf(currentTask), 1);
    obj.tasks.splice(endTaskIndex, 0, currentTask);

    setTasksObj(obj);
  };

  const { state } = useLocation();
  const tasksCount = tasksObj.tasks.filter(
    (task) => task.section === tasksObj.sections[0].name
  ).length;

  if (!state) return <Navigate to="/login" />;
  return (
    <section className="min-h-screen bg-blue max-w-5xl mx-1 lg:mx-auto">
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-1 xl:py-6">
        <Heading username={state.data.username} tasksCount={tasksCount} />
        <form>
          <AddTaskInput
            text={tasksObj.inputQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />
        </form>
      </header>
      {tasksObj.sections.map(({ name }) => (
        <TaskSection
          key={name}
          section={name}
          tasks={tasksObj.tasks.filter((task) => task.section === name)}
          onCheck={handleCheckBox}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDragEnd={handleDragEnd}
        />
      ))}
    </section>
  );
};

export default TodoList;
