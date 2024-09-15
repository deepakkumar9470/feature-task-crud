import React from "react";
import { Trash, Pencil } from "lucide-react";
const TableC = ({ tasksList, handleOpenUpdateModal, handleTaskDelete }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-2">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-secBg text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-secBg text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-secBg text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-secBg text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-secBg text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasksList?.map((task) => (
                  <tr key={task.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-mainBg text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">
                        {task.title}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-mainBg text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">
                        {task.desc}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-mainBg text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">
                        {task.duedate}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-mainBg text-sm">
                      <span
                        className={`relative inline-block px-3 py-1  font-semibold text-black rounded-3xl ${
                          task.status === "done"
                            ? "bg-green-500"
                            : task.status === "inprogress"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                        } leading-tight`}
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">{task.status}</span>
                      </span>
                    </td>
                    <td className="flex items-center gap-2 px-5 py-5 border-0 bg-mainBg text-sm">
                      <Trash
                        onClick={() => handleTaskDelete(task.id)}
                        className="cursor-pointer hover:scale-110 transform transition duration-150"
                        color="#ff0000"
                        fontSize={18}
                      />
                      <Pencil
                        onClick={() => handleOpenUpdateModal(task)}
                        className="cursor-pointer hover:scale-110 transform transition duration-150"
                        color="#009dff"
                        fontSize={18}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableC;
