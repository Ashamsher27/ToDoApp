import TodosListItem from "../TodosListItem/TodosListItem";

const TodosList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <>
      {/* <img src="/images/test-screenshot.png" alt="Tester image" /> */}
      <ul>
        {todos.map(({ _id, task, completed }, i) => (
          <TodosListItem
            key={i}
            _id={_id}
            task={task}
            completed={completed}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodosList;