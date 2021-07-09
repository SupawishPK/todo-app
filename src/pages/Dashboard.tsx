import React from 'react'
import axios from 'axios'
import Navbar from '../components/Narbar/Navbar'
import TodoForm from '../components/todo/TodoForm'
import TodoList, { Todo } from '../components/todo/TodoList'

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([])

  React.useEffect(() => {
    axios
      .get('/todos', { headers: { token: localStorage.getItem('token') } })
      .then((res) => {
        if (res.status === 200) {
          setTodoList(res.data.todos)
        }
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto pt-12">
        <h1 className="font-bold text-green-400 text-center text-xl mb-12">
          My Todos Dashboard
        </h1>
        <TodoForm />
        <TodoList todos={todoList} />
      </div>
    </>
  )
}

export default Dashboard
