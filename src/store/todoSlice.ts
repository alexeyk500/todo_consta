import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

type todoSliceType = {
  newTodoTitle: string | null;
};

const initialState: todoSliceType = {
  newTodoTitle: null,
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodoTitle = action.payload;
    },
  }
});

export const { setNewTodo } = todoSlice.actions;

export const selectorNewTodoTitle = (state: RootState) => state.todo.newTodoTitle

export default todoSlice.reducer;
