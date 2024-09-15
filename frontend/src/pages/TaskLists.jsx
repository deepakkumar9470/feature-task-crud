import React,{useState,useEffect} from 'react'
import { useGetAllTasksQuery } from '../redux/taskApi'
import { useSelector } from 'react-redux';
import {CirclePlus} from 'lucide-react';
const TaskLists = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {data,isLoading,isError} = useGetAllTasksQuery({userId:userInfo._id});

  if (isLoading) {
    return <div className="text-4xl text-teal-100">Loading tasks...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load tasks!</div>;
  }
  const totalTasks = data?.tasks?.length || 0;
  const pendingTasks = data?.tasks?.filter((task) => task.status === 'todo').length || 0;
  const completedTasks = data?.tasks?.filter((task) => task.status === 'done').length || 0;
  const progressTasks = data?.tasks?.filter((task) => task.status === 'inprogress').length || 0;

  return (
  <>
       <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-4xl">{totalTasks}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Completed Tasks</h2>
          <p className="text-4xl">{completedTasks}</p>
        </div>
        <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Pending Tasks</h2>
          <p className="text-4xl">{pendingTasks}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Progress Tasks</h2>
          <p className="text-4xl">{progressTasks}</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Task
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.tasks && data?.tasks.length>0 && data?.tasks?.map((task) => (
              <tr key={task.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{task.title}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {task.status}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{task.duedate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

     <button 
        className='rounded-full w-14 h-14 flex items-center justify-center 
         absolute bottom-5 right-2 bg-green-500 text-black text-xl'>
      <CirclePlus/>
     </button>
  </>
  );
};

export default TaskLists;
