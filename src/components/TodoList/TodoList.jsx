import {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from 'redux/todos-api';

const TodoList = () => {
  const { data } = useGetTodosQuery();
  const [updateTodo, { isLoading: updateLoading }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();

  const isBlocked = updateLoading || deleteLoading;

  const handleCheckBox = todo => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    updateTodo(updatedTodo);
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      {data?.map(item => (
        <li
          style={{
            border: '1px solid gray',
            padding: '20px',
            borderRadius: '5px',
          }}
          key={item.id}
        >
          {isBlocked ? (
            <p>Loading...</p>
          ) : (
            <>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => handleCheckBox(item)}
                disabled={isBlocked}
              />
              <button
                type="button"
                onClick={() => deleteTodo(item.id)}
                disabled={isBlocked}
              >
                Delete
              </button>
            </>
          )}
          <h3>{item.name}</h3>
          <p>{item.address}</p>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
