// features/courseCategories/courseCategoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const courseCategoriesSlice = createSlice({
  name: 'courseCategories',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = courseCategoriesSlice.actions;
export default courseCategoriesSlice.reducer;
