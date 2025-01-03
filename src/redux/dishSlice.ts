import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface DishState {
  items: Array<{ id: number; title: string; body: string }>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DishState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as Array<{ id: number; title: string; body: string }>;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default dataSlice.reducer;