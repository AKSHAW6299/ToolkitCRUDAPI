import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.todo);
  console.log('data :', data);
  

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-red-500 text-xl font-semibold">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="flex justify-center mb-5">
        <button
          onClick={() => dispatch(fetchTodos())}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition"
        >
          Fetch Todos
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
            >
              <h2 className="text-lg font-semibold text-gray-800">{todo.title}</h2>
              <p className="text-gray-600">User ID: {todo.userId}</p>
              <p className="text-gray-700 font-medium">
                Completed:{" "}
                <span className={todo.completed ? "text-green-600" : "text-red-600"}>
                  {todo.completed ? "✅ Yes" : "❌ No"}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No todos available</p>
        )}
      </div>
    </div>
  );
}

export default App;
