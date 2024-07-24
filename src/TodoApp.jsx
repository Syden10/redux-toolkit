import { useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const algo = useGetTodosQuery();

  return (
    <>
      <h1>Todos RTK Query</h1>
      <hr />
      <h4>isLoading</h4>
      <pre>...</pre>
      <button>Next Todo</button>
    </>
  );
};
