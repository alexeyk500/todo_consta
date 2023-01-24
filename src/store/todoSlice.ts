import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TodoItemType, TodoStatusEnum, TodoTypeEnum } from '../Components/types/types';

type todoSliceType = {
  newTodoTitle: string | null;
  todoList: TodoItemType[];
  todoType: TodoTypeEnum;
};

const initialState: todoSliceType = {
  newTodoTitle: null,
  todoList: [],
  todoType: TodoTypeEnum.all,
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    setNewTodoTitle: (state, action) => {
      state.newTodoTitle = action.payload;
    },
    addNewTodo: (state, action) => {
      state.todoList.push({
        id: Date.now(),
        title: action.payload,
        status: TodoStatusEnum.notDone,
      });
      state.newTodoTitle = null;
    },
    toggleStatusTodo: (state, action) => {
      const todoItem = state.todoList.find((item) => item.id === action.payload);
      if (todoItem) {
        if (todoItem.status === TodoStatusEnum.done) {
          todoItem.status = TodoStatusEnum.notDone;
        } else {
          todoItem.status = TodoStatusEnum.done;
        }
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    },
    setTodoType: (state, action) => {
      state.todoType = action.payload as TodoTypeEnum;
    },
  },
});

export const { setNewTodoTitle, addNewTodo, toggleStatusTodo, deleteTodo, setTodoType } = todoSlice.actions;

export const selectorNewTodoTitle = (state: RootState) => state.todo.newTodoTitle;
export const selectorTodoList = (state: RootState) => state.todo.todoList;
export const selectorTodoType = (state: RootState) => state.todo.todoType;

export const selectorFilteredTodos = createSelector([selectorTodoList, selectorTodoType], (todoList, todoType) => {
  if (todoType === TodoTypeEnum.done) {
    return todoList.filter((item) => item.status === TodoStatusEnum.done);
  }
  if (todoType === TodoTypeEnum.todo) {
    return todoList.filter((item) => item.status === TodoStatusEnum.notDone);
  }
  return todoList;
});

export default todoSlice.reducer;
