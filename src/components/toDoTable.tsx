export default function ToDoTable() {
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
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
            <tr>
              <td className="border border-black p-4 py-2">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="border border-black p-4 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="border border-black p-4 py-2">Malcolm Lockyer</td>
              <td className="border border-black p-4 py-2">1961</td>
              <td className="border border-black p-4 py-2">Edit/Delete</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mx-auto mb-4 py-4 px-6 border border-black grid grid-cols-9 gap-4">
        <button className="font-medium">{"<<"}</button>
        <button className="font-medium">{"<"}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button className="font-medium">{">"}</button>
        <button className="font-medium">{">>"}</button>
      </div>
    </>
  );
}
