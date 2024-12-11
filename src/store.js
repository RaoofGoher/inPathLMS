import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage (localStorage)
import { authApi } from './features/auth/authApiSlice';
import authReducer from './features/auth/authSlice';
import { courseCategoriesApi } from './features/courseCategory/courseCatgeoriesApiSlice';
import courseCategoriesReducer from './features/courseCategory/courseCategoriesSlice';
import {subcategoryApi} from './features/courseCategory/subCategorySlice';
import { createCourseApi } from './features/courseCategory/createCourseApi';
import { teacherProfileApi } from './features/profile/teacher/teacherProfile';
import { getcoursesByTeacherApi } from './features/courseCategory/getCourse';
import { addCourseSectionApi } from './features/courseCategory/addCourseSectionApi';
import {courseSectionApi} from "./features/courseCategory/getCourseSection";
import {courseApiThroughSubCategory} from './features/searchCourse/courseSlice';
import cartReducer from './features/cart/cartSlice';
// Define the persist configuration for auth state
const persistConfig = {
  key: 'auth',
  storage, // Use localStorage (or sessionStorage if needed)
};

// Persist the auth reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted auth reducer
    [authApi.reducerPath]: authApi.reducer,
    [courseCategoriesApi.reducerPath]: courseCategoriesApi.reducer,
    courseCategories: courseCategoriesReducer,
    [subcategoryApi.reducerPath]: subcategoryApi.reducer,
    [createCourseApi.reducerPath]: createCourseApi.reducer,
    [teacherProfileApi.reducerPath]: teacherProfileApi.reducer,
    [getcoursesByTeacherApi.reducerPath]: getcoursesByTeacherApi.reducer,
    [addCourseSectionApi.reducerPath]: addCourseSectionApi.reducer,
    [courseSectionApi.reducerPath]: courseSectionApi.reducer,
    [courseApiThroughSubCategory.reducerPath]: courseApiThroughSubCategory.reducer,
    cart: cartReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, courseCategoriesApi.middleware).concat(subcategoryApi.middleware).concat(createCourseApi.middleware).concat(teacherProfileApi.middleware).concat(getcoursesByTeacherApi.middleware).concat(addCourseSectionApi.middleware).concat(courseSectionApi.middleware).concat(courseApiThroughSubCategory.middleware),
});

// Create a persistor to be used with PersistGate in your app
export const persistor = persistStore(store);
