import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewToDo from "@/components/newToDo";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
// Set up a mock for axios.create to return the mocked instance
mockedAxios.create = jest.fn(() => mockedAxios);

describe("NewToDo component", () => {
  const appendToDo = jest.fn();

  it("renders the NewToDo button", () => {
    render(<NewToDo axiosInstance={mockedAxios} appendToDo={appendToDo} />);
    const button = screen.getByText("+ New To Do");
    expect(button).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<NewToDo axiosInstance={mockedAxios} appendToDo={appendToDo} />);
    const button = screen.getByText("+ New To Do");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole("form")).toBeInTheDocument();
    });
  });

  it("fills out the form", async () => {
    const toDo = {
      id: 1,
      name: "New To Do",
      priority: "HIGH",
      dueDate: "2023-12-31T23:59",
    };
    mockedAxios.post.mockResolvedValue({ data: toDo });

    render(<NewToDo axiosInstance={mockedAxios} appendToDo={appendToDo} />);
    const button = screen.getByText("+ New To Do");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole("form")).toBeInTheDocument();
    });

    const nameInput = screen.getByLabelText("To do's name");
    const prioritySelect = screen.getByLabelText("Priority");
    const dueDateInput = screen.getByLabelText("Due date");

    fireEvent.change(nameInput, { target: { value: toDo.name } });
    fireEvent.change(prioritySelect, { target: { value: toDo.priority } });
    fireEvent.change(dueDateInput, { target: { value: toDo.dueDate } });

    await waitFor(() => {
      expect(nameInput).toHaveValue(toDo.name);
      expect(prioritySelect).toHaveValue(toDo.priority);
      expect(dueDateInput).toHaveValue(toDo.dueDate);
    });
  });

  it("post to do with the correct data", async () => {
    const toDo = {
      name: "Test Task",
      priority: "HIGH",
      dueDate: "2023-12-31T23:59"
    };
    mockedAxios.post.mockResolvedValue({ data: toDo });

    render(<NewToDo axiosInstance={mockedAxios} appendToDo={appendToDo} />);
    const button = screen.getByText("+ New To Do");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole("form")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("To do's name"), {
      target: { value: toDo.name },
    });
    fireEvent.change(screen.getByLabelText("Priority"), {
      target: { value: toDo.priority },
    });
    fireEvent.change(screen.getByLabelText("Due date"), {
      target: { value: toDo.dueDate },
    });

    fireEvent.click(screen.getByText(/OK/));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "/todos",
        expect.objectContaining<ToDo>({
            id: expect.any(Number),
            name: expect.any(String),
            priority: expect.any(String),
            dueDate: expect.any(String),
            isDone: expect.any(Boolean),
            creationDate: expect.any(String),
            doneDate: expect.any(String),
        })
      );
    });
  });

  it("calls appendToDo after successful submission", async () => {
    const toDo = {
      id: 0,
      title: "Test Task",
      priority: "HIGH",
      dueDate: "2023-12-31T23:59",
    };
    mockedAxios.post.mockResolvedValue({ data: toDo });
    appendToDo.mockImplementationOnce(() => Promise.resolve());

    render(<NewToDo axiosInstance={mockedAxios} appendToDo={appendToDo} />);
    const button = screen.getByText("+ New To Do");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole("form")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("To do's name"), {
      target: { value: toDo.title },
    });
    fireEvent.change(screen.getByLabelText("Priority"), {
      target: { value: toDo.priority },
    });
    fireEvent.change(screen.getByLabelText("Due date"), {
      target: { value: toDo.dueDate },
    });

    fireEvent.click(screen.getByText(/OK/i));

    await waitFor(() => {
      expect(appendToDo).toHaveBeenCalled();
    });
  });
});
