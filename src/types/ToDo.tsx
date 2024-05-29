type SearchOptions = {
  pageNumber: number;
  stateFilter: StateFilter;
  priorityFilter: PriorityFilter;
  nameFilter: string;
  sortingDueDate: SortDirection;
  sortingPriority: SortDirection;
};

type ToDo = {
  id: number;
  name: string;
  priority: Priority;
  isDone: boolean;
  dueDate: string | null;
  doneDate: string;
  creationDate: string;
};

type GetAllResponse = {
    toDos: Array<ToDo>;
    pages: number;
}

type Priority = "LOW" | "MEDIUM" | "HIGH";
type PriorityFilter = "NONE" | "LOW" | "MEDIUM" | "HIGH";

type StateFilter = "NONE" | "DONE" | "UNDONE";

type SortDirection =
  | "NONE"
  | "ASCENDING" //lowest to highest
  | "DESCENDING"; //highest to lowest
