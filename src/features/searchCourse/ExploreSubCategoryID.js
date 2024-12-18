import { createSlice } from '@reduxjs/toolkit';

const exploreSubCategoryIDSlice = createSlice({
  name: 'exploreSubCategoryID',
  initialState: {
    subCategoryID: null, // Default value is null
  },
  reducers: {
    setSubCategoryID: (state, action) => {
      state.subCategoryID = action.payload; // Update the subCategoryID with the dispatched value
    },
    resetSubCategoryID: (state) => {
      state.subCategoryID = null; // Optional: Reset functionality
    },
  },
});

export const { setSubCategoryID, resetSubCategoryID } = exploreSubCategoryIDSlice.actions;
export default exploreSubCategoryIDSlice.reducer;
