import React,{useState,useEffect} from 'react'
import { useGetAllTasksQuery } from '../redux/taskApi'

const TaskLists = () => {
  const r = useGetAllTasksQuery()
  console.log(r)
  return (
    <div className='text-4xl text-teal-100'>TaskLists</div>
  )
}

export default TaskLists