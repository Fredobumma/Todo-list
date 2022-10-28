import React, { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";

const StrictModeDroppable = ({ droppableId: id, children }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) return null;
  return <Droppable droppableId={id}>{children}</Droppable>;
};

export default StrictModeDroppable;
