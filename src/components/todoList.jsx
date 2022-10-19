import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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

  const {
    state: { data },
  } = useLocation();

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

  return (
    <section className="min-h-screen bg-blue max-w-5xl mx-auto">
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-1 xl:py-6">
        <Heading
          username={data.username}
          tasksCount={
            tasksObj.tasks.filter(
              (task) => task.section === tasksObj.sections[0].name
            ).length
          }
        />
        <form>
          <AddTaskInput
            text={tasksObj.inputQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />
        </form>
      </header>
      {tasksObj.sections.map((section) => (
        <TaskSection
          key={section.name}
          section={section.name}
          tasks={tasksObj.tasks.filter((task) => task.section === section.name)}
          onCheck={handleCheckBox}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </section>
  );
};

export default TodoList;
