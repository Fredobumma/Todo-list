import React from "react";
import Heading from "./common/heading";
import AddTaskInput from "./common/addTaskInput";
import Task from "./common/task";

const TodoList = () => {
  return (
    <section className="min-h-screen bg-blue max-w-5xl mx-auto">
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-1 xl:py-6">
        <Heading />
        <form>
          <AddTaskInput />
        </form>
      </header>
      <Task />
    </section>
  );
};

export default TodoList;
