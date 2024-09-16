import React, { useState, useEffect } from "react";
import {
  useGetAllTasksQuery,
  useDeleteTaskByIdMutation,
} from "../redux/taskApi";
import { useSelector } from "react-redux";
import {
  Trash,
  Pencil,
  CirclePlus,
  FileText,
  Hourglass,
  RefreshCcw,
  SquareCheckBig,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import TaskAdd from "./TaskAdd";
import ModalContainer from "../components/ModalContainer";
import toast from "react-hot-toast";
import TaskEdit from "./TaskEdit";
import FilterTask from "../components/FilterTask";
import TableC from "../components/TableC";

const TaskLists = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading, isError ,refetch} = useGetAllTasksQuery({
    userId: userInfo._id,
  });
  const [deleteTask] = useDeleteTaskByIdMutation();
  const [openTaskAddModal, setOpenTaskAddModal] = useState(false);
  const [openTaskUpdateModal, setOpenTaskUpdateModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const [filter, setFilter] = useState("all");

  const handleOpenModal = () => {
    setOpenTaskAddModal(true);
  };
  const handleOpenUpdateModal = (data) => {
    setTaskToUpdate(data);
    setOpenTaskUpdateModal(true);
  };
  const handleFilterChange = (type) => {
    setFilter(type);
  };
  const filteredTasks = data?.tasks?.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  if (isLoading) {
    return (
      <div className="text-4xl text-center mt-60 text-teal-100">
        Loading tasks...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center mt-60">
        Failed to load tasks!
      </div>
    );
  }
  const totalTasks = data?.tasks?.length || 0;
  const pendingTasks =
    data?.tasks?.filter((task) => task.status === "todo").length || 0;
  const completedTasks =
    data?.tasks?.filter((task) => task.status === "done").length || 0;
  const progressTasks =
    data?.tasks?.filter((task) => task.status === "inprogress").length || 0;

  const handleTaskDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      if (response?.data) {
        toast.success(response.data.message);
        refetch();
        navigate("/tasklists");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "opps failed to delete task.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="px-10 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 cursor-pointer rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Total Tasks</h2>
              <span className="text-3xl">
                <FileText />
              </span>
            </div>
            <p className="mt-4 text-5xl font-extrabold">{totalTasks}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 cursor-pointer rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Completed Tasks</h2>
              <span className="text-3xl">
                <SquareCheckBig />
              </span>
            </div>
            <p className="mt-4 text-5xl font-extrabold">{completedTasks}</p>
          </div>
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-6 cursor-pointer rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Pending Tasks</h2>
              <span className="text-3xl">
                <Hourglass />
              </span>
            </div>
            <p className="mt-4 text-5xl font-extrabold">{pendingTasks}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 cursor-pointer rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Progress Tasks</h2>
              <span className="text-3xl">
                <RefreshCcw />
              </span>
            </div>
            <p className="mt-4 text-5xl font-extrabold">{progressTasks}</p>
          </div>
        </div>

        <FilterTask
          filter={filter}
          filterTasks={data}
          handleFilterChange={handleFilterChange}
        />

        <TableC
          tasksList={filteredTasks}
          handleOpenUpdateModal={handleOpenUpdateModal}
          handleTaskDelete={handleTaskDelete}
        />
      </div>

      <button
        onClick={handleOpenModal}
        className="fixed bottom-5 right-5 rounded-full w-16 h-16 flex items-center justify-center bg-green-600 text-white shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110"
      >
        <CirclePlus color="white" fontSize={45} />
      </button>

      {/* Task Add Modal Container */}
      <ModalContainer
        showModal={openTaskAddModal}
        setShowModal={setOpenTaskAddModal}
      >
        <TaskAdd refetchTasks={refetch} onClose={()=>setOpenTaskAddModal(false)}/>
      </ModalContainer>

      {/* Task Update Modal Container */}
      <ModalContainer
        showModal={openTaskUpdateModal}
        setShowModal={setOpenTaskUpdateModal}
      >
        <TaskEdit task={taskToUpdate} onClose={()=>setOpenTaskUpdateModal(false)} />
      </ModalContainer>
    </>
  );
};

export default TaskLists;
