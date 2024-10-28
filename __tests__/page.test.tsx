import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import axios from "axios";

// Mocking Axios instance
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
// Set up a mock for axios.create to return the mocked instance
mockedAxios.create = jest.fn(() => mockedAxios);

test("Should render all child components", async () => {
  mockedAxios.get.mockResolvedValue({
    data: { toDos: [], pages: 1 },
  });
  render(<Home axiosInstanceTest={mockedAxios} />);

  // Verify loading text appears initially
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument(), { timeout: 4000 });

  // Check if child components are rendered
  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(screen.getAllByText("Name")[0]).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText(/You are in page: 1/i)).toBeInTheDocument());
});