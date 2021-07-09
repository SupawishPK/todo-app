import React from 'react'
import Navbar from '../components/Narbar/Navbar'
import axios from 'axios'

interface Todo {
  title: string
  isCompleted: boolean
}

const TodoList: Todo[] = [
  {
    title: 'Todo 1',
    isCompleted: false
  },
  {
    title: 'Todo 2',
    isCompleted: false
  },
  {
    title: 'Todo 3',
    isCompleted: false
  },
  {
    title: 'Todo 4',
    isCompleted: false
  },
  {
    title: 'Todo 5',
    isCompleted: false
  },
]

const Dashboard = () => {
  React.useEffect(() => {
    axios
      .get('/user', { headers: { token: localStorage.getItem('token') } })
      .then((res) => console.log(res))
  }, [])

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto pt-12">
        <h1 className="font-bold text-green-400 text-center text-xl mb-12">My Todos Dashboard</h1>
        <div className="flex justify-between mb-8">
          <input type="text" className="w-full px-3 py-2 border border-green-400 rounded-md mr-4"></input>
          <input type="button" className="py-2 px-5 bg-green-400 text-white rounded-md cursor-pointer" value="Add" />
        </div>
        {TodoList.map(todo => (
          <div className="border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center">
            {todo.title} 
            <input type="button" className="py-2 px-3 bg-green-400 text-white rounded-md cursor-pointer" value="DONE"></input>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard
