import React from 'react'
import axios from 'axios'
import { Todo } from './TodoList'

interface TodoFormProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const TodoForm = ({ todos, setTodos }: TodoFormProps) => {
  const [title, setTitle] = React.useState<string>('')
  const onSubmit = () => {
    if (title?.length > 0) {
      axios
        .post(
          '/todo',
          { title: title },
          { headers: { token: localStorage.getItem('token') } }
        )
        .then((res) => {
          let todo = res.data.todo
          setTodos([...todos, todo])
          setTitle('')
        })
    }
  }

  return (
    <div className="flex justify-between mb-8">
      <input
        type="text"
        className="w-full px-3 py-2 border border-green-400 rounded-md mr-4"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        className={`py-2 px-5 text-white rounded-md cursor-pointer ${
          title.length > 0 ? 'bg-green-400' : 'bg-gray-400'
        }`}
        value="Add"
        disabled={title.length > 0 ? false : true}
        onClick={onSubmit}
      >
        Add
      </button>
    </div>
  )
}

export default TodoForm
