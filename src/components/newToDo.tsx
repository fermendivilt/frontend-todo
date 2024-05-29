"use client";
import { AxiosInstance } from "axios";
import React, { useEffect, useState } from "react";
import Swal, { SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const emptyToDo: ToDo = {
  id: -1,
  name: "",
  priority: "LOW",
  isDone: false,
  dueDate: null,
  doneDate: "",
  creationDate: "",
};

interface PropsNewToDoModal {
  toDo: ToDo;
  setToDo: React.Dispatch<React.SetStateAction<ToDo>>;
  axiosInstance: AxiosInstance;
}

const NewToDoModal = async (props: PropsNewToDoModal): Promise<boolean> => {
  const { toDo, setToDo, axiosInstance } = props;

  const handleNameChange = (value: string): void => {
    setToDo((prev) => {
      return {
        ...prev,
        name: value,
      };
    });
  };
  const handlePriorityChange = (value: Priority): void => {
    setToDo((prev) => {
      return {
        ...prev,
        priority: value,
      };
    });
  };
  const handleDueDateChange = (value: string): void => {
    setToDo((prev) => {
      return {
        ...prev,
        dueDate: new Date(value).toISOString().replace("Z", ""),
      };
    });
  };

  return await MySwal.fire({
    title: "New To Do",
    html: (
      <form
        className="flex flex-col justify-start gap-y-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="name" className="self-center">
          To do&apos;s name
        </label>
        <input
          type="text"
          id="name"
          className="border border-black p-1"
          placeholder="Task to do"
          onChange={(e) => handleNameChange(e.target.value)}
          maxLength={120}
          required
        />
        <label htmlFor="priority" className="self-center">
          Priority
        </label>
        <select
          id="priority"
          className="border border-black p-1"
          onChange={(e) => handlePriorityChange(e.target.value as Priority)}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <label htmlFor="duedate" className="self-center">
          Due date
        </label>
        <input
          id="duedate"
          type="datetime-local"
          className="border border-black p-1"
          onChange={(e) => handleDueDateChange(e.target.value)}
        />
      </form>
    ),
    showCancelButton: true,
  }).then((swalResult) => {
    if (swalResult.isConfirmed) {
      setToDo((prev) => {
        return {
          ...prev,
          creationDate: new Date().toISOString().replace("Z", ""),
        };
      });
      return true;
    }

    return false;
  });
};

interface PropsNewToDo {
  axiosInstance: AxiosInstance;
  appendToDo: () => Promise<void>;
}

export default function NewToDo(props: PropsNewToDo) {
  const { axiosInstance, appendToDo } = props;
  const [toDo, setToDo] = useState<ToDo>({ ...emptyToDo });
  const [confirmedToDo, setConfirmedToDo] = useState<boolean>(false);

  useEffect(() => {
    if (confirmedToDo) {
      axiosInstance.post("/todos", toDo).then((response) => {
        if(response.data.id > -1){
          appendToDo();
        }
      });
      setConfirmedToDo(false);
    }
  }, [confirmedToDo]);

  return (
    <div className="container mx-auto mb-4">
      <button
        type="button"
        className="border border-black bg-slate-300 px-2 py-1"
        onClick={async () =>
          setConfirmedToDo(await NewToDoModal({ toDo, setToDo, axiosInstance }))
        }
      >
        + New To Do
      </button>
    </div>
  );
}
