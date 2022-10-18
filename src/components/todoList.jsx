import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Heading from "./common/heading";
import AddTaskInput from "./common/addTaskInput";
import TaskSection from "./common/taskSection";

const TodoList = () => {
  const {
    state: { data },
  } = useLocation();

  const [tasks, setTasks] = useState([
    { label: "Tasks", content: [], text: "" },
    { label: "Completed Tasks", content: [] },
  ]);
  const incomingTasks = tasks[0];

  const handleChange = ({ target: { value } }) => {
    const newTasks = [...tasks];
    newTasks[0].text = value;
    setTasks(newTasks);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    if (newTasks[0].text) {
      newTasks[0].content.unshift(incomingTasks.text);
      newTasks[0].text = "";
    } else toast("Please add a new task");

    setTasks(newTasks);
  };

  const handleKeyDown = (event) => {
    const newTasks = [...tasks];
    if (event.key === "Enter" && !newTasks[0].text) {
      toast("Please add a new task");
      event.preventDefault();
    }

    if (event.key === "Enter" && newTasks[0].text) {
      newTasks[0].content.unshift(incomingTasks.text);
      newTasks[0].text = "";
      event.preventDefault();
    }

    setTasks(newTasks);
  };

  return (
    <section className="min-h-screen bg-blue max-w-5xl mx-auto">
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-1 xl:py-6">
        <Heading
          username={data.username}
          tasksCount={incomingTasks.content.length}
        />
        <form>
          <AddTaskInput
            text={incomingTasks.text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />
        </form>
      </header>
      {tasks.map((task) => (
        <TaskSection
          key={task.label}
          label={task.label}
          content={task.content}
        />
      ))}
    </section>
  );
};

export default TodoList;
