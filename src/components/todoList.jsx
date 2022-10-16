import React from "react";

const TodoList = () => {
  return (
    <section className="min-h-screen bg-blue max-w-5xl mx-auto">
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-1 xl:py-6">
        <h2 className="font-bold text-slate-900 text-2xl sm:text-4xl -mb-1 mt-5 truncate ...">
          Welcome, Skywalker {null}
        </h2>
        <p className="text-slate-600 pb-8 mt-2">
          You've got xyz {null} task(s) coming up in the next days.
        </p>
        <form>
          <div className="flex items-center max-w-100 shadow-sm">
            <input
              className="grow-2 focus:border-b-2 focus:border-blue-400 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-5 mr-3"
              type="text"
              placeholder="Add new task..."
            />
            <a
              href="/new"
              className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 mr-0.5 shadow-sm w-20"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New
            </a>
          </div>
        </form>
      </header>
      <ul>
        <li className="flex flex-col items-end p-5 pl-7 shadow-md rounded-xl bg-slate-50 mx-3 sm:mx-0 mb-3">
          <span className="inline-flex w-full">
            <span className="fa-solid fa-square-check text-xl text-blue-500 mr-3 sm:mr-5"></span>
            <span className="truncate ...">
              This is the first task sdadsfdasfddsdfdfdffsdsfsdfd
            </span>
          </span>
          <span className="text-xl sm:text-md">
            <span class="fa-solid fa-pen-to-square text-blue-300"></span>
            <span class="fa-solid fa-trash-can text-slate-500 ml-5"></span>
          </span>
        </li>
      </ul>
      <ul>
        <li className="flex flex-col items-end p-5 pl-7 shadow-md rounded-xl bg-slate-50 mx-3 sm:mx-0 mb-3">
          <span className="inline-flex w-full">
            <span className="fa-solid fa-square-check text-xl text-blue-500 mr-3 sm:mr-5"></span>
            <span className="truncate ...">This is the first task</span>
          </span>
          <span className="text-xl sm:text-md">
            <span class="fa-solid fa-pen-to-square text-blue-300"></span>
            <span class="fa-solid fa-trash-can text-slate-500 ml-5"></span>
          </span>
        </li>
      </ul>
      <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 text-sm leading-6 mt-5">
        <li className="flex">
          <a
            href="/new"
            className="mx-auto max-w-md hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
          >
            <svg
              className="group-hover:text-blue-500 mb-1 text-slate-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New task
          </a>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
