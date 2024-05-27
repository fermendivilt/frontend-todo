import Averages from "@/components/averages";
import Searchbar from "@/components/searchBar";
import ToDoTable from "@/components/toDoTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24">
      <Searchbar />

      <div className="container mx-auto mb-4">
        <button
          type="button"
          className="border border-black bg-slate-300 px-2 py-1"
        >
          + New To Do
        </button>
      </div>

      <ToDoTable />

      <Averages />
    </main>
  );
}
