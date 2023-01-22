import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import classes from "./Task.module.css";

// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

export default function Task(props) {
  const { task, index } = props;
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`${classes["task-container"]} ${
            snapshot.isDragging ? classes.isDragging : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* <Handle {...provided.dragHandleProps} /> */}
          {task.content}
        </div>
      )}
    </Draggable>
  );
}
