export interface Todo {
  _id: string
  title: string
  isCompleted: boolean
}

interface TodoListPros {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListPros) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div
          className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center"
          key={`Todos-${todo._id}-${index}`}
        >
          {todo.title}
          <input
            type="button"
            className="py-2 px-3 bg-green-400 text-white rounded-md cursor-pointer"
            value="DONE"
          ></input>
        </div>
      ))}
    </>
  )
}

export default TodoList
