export default function SearchBar() {
  return (
    <form className="container mx-auto mb-4 p-4 border border-black grid grid-cols-12 gap-4">
      <label className="self-center">Name</label>
      <input
        className="col-span-11 border border-black p-1"
        placeholder="Text"
      />

      <label className="self-center">Priority</label>
      <select className="col-span-4 border border-black p-1">
        <option value="NONE">None</option>
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <label className="col-start-1 self-center">State</label>
      <select className="col-span-4 border border-black p-1">
        <option value="NONE">All</option>
        <option value="DONE">Done</option>
        <option value="UNDONE">Undone</option>
      </select>

      <button
        type="button"
        className="col-end-13 col-span-1 border border-black bg-slate-300 py-1"
      >
        Search
      </button>
    </form>
  );
}
