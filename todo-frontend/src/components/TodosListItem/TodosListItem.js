const TodosListItem = ({ _id, task, completed, updateTodo, deleteTodo }) => {
    return (
      <li
        onClick={e => updateTodo(e, _id)}
        className={completed ? "completed" : ""}
      >
        {task} <button onClick={e => deleteTodo(e, _id)}>delete</button>
        <button onClick={e => updateTodo(e, _id)}>completed</button>

      </li>
    );
  };
  
  export default TodosListItem;