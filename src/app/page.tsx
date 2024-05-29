"use client";
import Averages from "@/components/averages";
import Searchbar from "@/components/searchBar";
import ToDoTable from "@/components/toDoTable";
import NewToDo from "@/components/newToDo";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    "Content-Type": "application/json",
  },
});

export default function Home() {
  const [toDoList, setToDoList] = useState<Array<ToDo>>(new Array<ToDo>());
  const [listOptions, setListOptions] = useState<SearchOptions>({
    pageNumber: 1,
    stateFilter: "NONE",
    priorityFilter: "NONE",
    nameFilter: "",
    sortingDueDate: "NONE",
    sortingPriority: "NONE",
  });
  const [pageQuantity, setPageQuantity] = useState(1);
  const [isLoading, setLoading] = useState(true);
 
  const fetchToDoList = async () => {
    try {
      const response = axiosInstance
        .get("/todos", { params: listOptions })
        .then((response) => {
          const data: GetAllResponse = response.data;
          setToDoList(data.toDos);
          setPageQuantity(data.pages);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchToDoList();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setLoading(true);
      fetchToDoList();
    }
  }, [listOptions]);

  // const fetchToDoList = async () => {
  //   const request = new Request("http://localhost:9090/todos", {
  //     method: "GET",
  //     body: JSON.stringify(listOption),
  //   });

  //   const resultBody: GetAllResponse | null = await fetch(request, {
  //     cache: "no-store",
  //   })
  //     .then(async (response): Promise<GetAllResponse> => {
  //       if (response.status === 200) {
  //         return await response.json();;
  //       } else {
  //         throw new Error("Something went wrong on API server!");
  //       }
  //     })
  //     .then((response) => {
  //       console.debug(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="flex min-h-screen flex-col items-start justify-start py-12 px-24">
      <Searchbar 
        globalOptions={listOptions}
        setGlobalOptions={setListOptions}
      />

      <NewToDo axiosInstance={axiosInstance} appendToDo={fetchToDoList} />

      <ToDoTable
        axiosInstance={axiosInstance}
        toDoArray={toDoList}
        pageQuantity={pageQuantity}
        paginationPosition={listOptions.pageNumber}
        tableOptions={listOptions}
        setTableOptions={setListOptions}
      />

      <Averages />
    </main>
  );
}
