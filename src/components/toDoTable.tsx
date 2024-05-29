import React from "react";

interface PropsToDoTable {
  toDoArray: Array<ToDo>;
  pageQuantity: number;
  paginationPosition: number;
  setTableOptions: React.Dispatch<React.SetStateAction<SearchOptions>>;
}

export default function ToDoTable(props: PropsToDoTable) {
  const { toDoArray, pageQuantity, paginationPosition, setTableOptions } =
    props;

  return (
    <>
      <div className="container flex flex-col mx-auto mb-4 items-center">
        <table className="mb-4 table-auto border-collapse border w-full border-black text-sm">
          <thead>
            <tr className="bg-slate-300">
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Name
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Priority
              </th>
              <th className="border-b-2 border-r border-black font-medium p-4 py-2 text-left">
                Due Date
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
                  <input type="checkbox" checked={toDo.isDone} />
                </td>
                <td className="border border-black p-4 py-2">{toDo.name}</td>
                <td className="border border-black p-4 py-2">
                  {toDo.priority}
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
