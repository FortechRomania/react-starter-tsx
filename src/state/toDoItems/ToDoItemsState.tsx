export type ToDoItemsState = {
  done: any;
  inProgress: any;
};

export const initialToDoItemsState: any = {
  done: [{ id: 1, title: "Shopping" }, { id: 2, title: "Cooking" }],
  inProgress: [
    { id: 1, title: "Groceries" },
    { id: 2, title: "Cleaning" },
    { id: 3, title: "Creating a website" }
  ]
};
