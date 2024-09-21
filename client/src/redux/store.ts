import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Store } from "../typing/store/store";
import { useDispatch } from "react-redux";
import { authReducer } from "./slices/auth.slice";
import { vacancyReducer } from "./slices/vacancy.slice";

const reducers = combineReducers<Store>({
  auth: authReducer,
  vacancy: vacancyReducer,
});

export const store = configureStore<Store>({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
