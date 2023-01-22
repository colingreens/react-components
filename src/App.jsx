import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "../components/DragAndDrop/Column";
import initialData from "../components/DragAndDrop/initial-data";

const Container = styled.div`
  display: flex;
`;

function App() {
  const [state, setState] = useState(initialData);

  // function onDragStart() {
  //   document.body.style.color = "orange";
  //   document.body.style.transition = "background-color 0.2s ease";
  // }

  // function onDragUpdate(update) {
  //   const { destination } = update;
  //   const opacity = destination
  //     ? destination.index / Object.keys(state.tasks).length
  //     : 0;
  //   document.body.style.backgroundColor = `rgba(153,141,217, ${opacity})`;
  // }

  function onDragEnd(result) {
    // document.body.style.color = "inherit";
    // document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    //moving within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }
    //moving to another column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  }

  return (
    <DragDropContext
      // onDragStart={onDragStart}
      // onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Container>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;
