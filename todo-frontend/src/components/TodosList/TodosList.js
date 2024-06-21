import TodosListItem from "../TodosListItem/TodosListItem";

const TodosList = ({ todos, updateTodo, deleteTodo }) => {
  return (
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
  );
};

export default TodosList;