import React, { useEffect, useState } from "react";

interface PropsSearchBar {
  globalOptions: SearchOptions;
  setGlobalOptions: React.Dispatch<React.SetStateAction<SearchOptions>>;
}

export default function SearchBar(props: PropsSearchBar) {
  const { globalOptions, setGlobalOptions } = props;
  const [localOptions, setLocalOptions] =
    useState<SearchOptions>(globalOptions);

  const handleNameChange = (name: string) => {
    setLocalOptions((prev) => {
      return {
        ...prev,
        nameFilter: name,
      };
    });
  };
  const handlePriorityChange = (priority: PriorityFilter) => {
    setLocalOptions((prev) => {
      return {
        ...prev,
        priorityFilter: priority,
      };
    });
  };
  const handleStateChange = (isDone: StateFilter) => {
    setLocalOptions((prev) => {
      return {
        ...prev,
        stateFilter: isDone,
      };
    });
  };

  return (
    <form className="container mx-auto mb-4 p-4 border border-black grid grid-cols-12 gap-4">
      <label className="self-center">Name</label>
      <input
        className="col-span-11 border border-black p-1"
        placeholder="Text"
        onChange={(e) => handleNameChange(e.target.value)}
      />

      <label className="self-center">Priority</label>
      <select
        className="col-span-4 border border-black p-1"
        onChange={(e) => handlePriorityChange(e.target.value as PriorityFilter)}
      >
        <option value="NONE">All</option>
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>

      <label className="col-start-1 self-center">State</label>
      <select
        className="col-span-4 border border-black p-1"
        onChange={(e) => handleStateChange(e.target.value as StateFilter)}
      >
        <option value="NONE">All</option>
        <option value="DONE">Done</option>
        <option value="UNDONE">Undone</option>
      </select>

      <button
        type="button"
        className="col-end-13 col-span-1 border border-black bg-slate-300 py-1"
        onClick={e => setGlobalOptions(localOptions)}
      >
        Search
      </button>
    </form>
  );
}
