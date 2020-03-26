export const userInitialState: UserState = {
  name: "Initial name",
  age: 0
};

export interface UserState {
  name: string;
  age: number;
}
