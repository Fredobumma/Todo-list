import React from "react";
import _ from "lodash";

const Heading = ({ username }) => {
  return (
    <div>
      <h2 className="font-bold text-slate-900 text-2xl sm:text-4xl mt-5 truncate ...">
        Welcome, {_.capitalize(username)}
      </h2>
      <p className="text-slate-600 pb-8 mt-3">
        You've got xyz {null} task(s) coming up in the next days.
      </p>
    </div>
  );
};

export default Heading;
