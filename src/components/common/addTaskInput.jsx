import React from "react";

const AddTaskInput = ({ text, onChange, onKeyDown, onClick }) => {
  return (
    <div className="flex items-center max-w-100 max-h-100 shadow-sm box-border mb-2">
      <input
        className="grow-2 border-b-2 border-transparent focus:border-b-2 focus:border-blue-400 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-5 mr-3"
        type="text"
        placeholder="Add new task..."
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={text}
      />
      <span
        className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 mr-0.5 shadow-sm w-20 cursor-pointer"
        onClick={onClick}
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
      </span>
    </div>
  );
};

export default AddTaskInput;
