import { AxiosInstance } from "axios";
import React from "react";

interface PropsToDoTable {
  axiosInstance: AxiosInstance;
  toDoArray: Array<ToDo>;
  pageQuantity: number;
  paginationPosition: number;
  tableOptions: SearchOptions;
  setTableOptions: React.Dispatch<React.SetStateAction<SearchOptions>>;
}

export default function ToDoTable(props: PropsToDoTable) {
  const {
    axiosInstance,
    toDoArray,
    pageQuantity,
    paginationPosition,
    tableOptions,
    setTableOptions,
  } = props;

  const updateToDo = async (
    isDone: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    try {
      if (isDone.target.checked) {
        const response = axiosInstance
          .post("/todos/" + id + "/done")
          .then((response) => {
            console.log(response.data);
          });
      } else {
        const response = axiosInstance
          .put("/todos/" + id + "/undone")
          .then((response) => {
            console.log(response.data);
          });
      }
    } catch (error) {
      isDone.target.checked = !isDone.target.checked;
      console.error(error);
    }
  };

  const handleNextPrioritySortDirection = () => {
  }

  return (
    <>
      <div className="container flex flex-col mx-auto mb-4 items-center">
        <table className="mb-4 table-auto border-collapse border w-full border-black text-sm">
          <thead>
            <tr className="bg-slate-300">
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                <input type="checkbox" disabled />
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Name
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Priority
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Due Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {toDoArray.map((toDo, index) => (
              <tr key={index}>
                <td className="border border-black p-4 py-2">
                  <input
                    type="checkbox"
                    defaultChecked={toDo.isDone}
                    onChange={(e) => updateToDo(e, toDo.id)}
                  />
                </td>
                <td className="border border-black p-4 py-2">{toDo.name}</td>
                <td className="border border-black p-4 py-2">
                  {toDo.priority.charAt(0) +
                    toDo.priority.substring(1).toLowerCase()}
                </td>
                <td className="border border-black p-4 py-2">
                  {toDo.dueDate != null
                    ? toDo.dueDate.substring(0, 10).replaceAll("-", "/")
                    : "-"}
                </td>
                <td className="border border-black p-4 py-2">Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mx-auto mb-4 py-4 px-6 border border-black flex flex-col w-2/4">
        <p className="mb-2 text-center">
          You are in page: {paginationPosition}
        </p>
        <div className="flex align-middle justify-around">
          <button className="font-medium">{"<"}</button>
          <div className="flex justify-around overflow-x-auto">
            {Array.from(Array(pageQuantity), (e, i) => {
              return (
                <button
                  className="mx-4"
                  key={i}
                  onClick={() =>
                    setTableOptions((prev) => {
                      return {
                        ...prev,
                        pageNumber: i + 1,
                      };
                    })
                  }
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <button className="font-medium">{">"}</button>
        </div>
      </div>
    </>
  );
}
