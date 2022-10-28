import React from "react";
import PropTypes from "prop-types";
import Task from "./task";

const TaskSection = ({ section, tasks, ...rest }) => {
  if (!tasks.length && section === "Completed Tasks") return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg sm:text-xl p-3 px-5 underline decoration-blue-500 decoration-4 underline-offset-8 mb-5">
        {section}
      </h2>
      <Task tasks={tasks} {...rest} />
    </div>
  );
};

TaskSection.propTypes = {
  section: PropTypes.string,
  tasks: PropTypes.array,
  onCheck: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDragEnd: PropTypes.func,
};

export default TaskSection;
