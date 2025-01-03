import { configureStore } from "@reduxjs/toolkit";;
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dishReducer from "./dishSlice";

export const store = configureStore({
  reducer: {
    data: dishReducer,
  }
});

//Types to TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
