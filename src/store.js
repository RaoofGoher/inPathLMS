import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage (localStorage)
import { authApi } from './features/auth/authApiSlice';
import authReducer from './features/auth/authSlice';
import { courseCategoriesApi } from './features/courseCategory/courseCatgeoriesApiSlice';
import courseCategoriesReducer from './features/courseCategory/courseCategoriesSlice';
import { subcategoryApi } from './features/courseCategory/subCategorySlice';
import { createCourseApi } from './features/courseCategory/createCourseApi';
import { teacherProfileApi } from './features/profile/teacher/teacherProfile';
import { getcoursesByTeacherApi } from './features/courseCategory/getCourse';
import { addCourseSectionApi } from './features/courseCategory/addCourseSectionApi';
import { courseSectionApi } from './features/courseCategory/getCourseSection';
import { courseApiThroughSubCategory } from './features/searchCourse/courseSlice';
import cartReducer from './features/cart/cartSlice';
import { enrolledCourseApi } from './features/enrollments/enrolledCourseAPi';
import { enrollApi } from './features/enrollments/enrollApi';
import {getAllCourses} from "./features/explore/getall";
import exploreSubCategoryIDReducer from './features/searchCourse/ExploreSubCategoryID'; 
import { studentProfileApi } from "./features/studentProfile/studentProfileAPI";
// Define the persist configuration for auth state
const persistAuthConfig = {
  key: 'auth',
  storage, // Use localStorage (or sessionStorage if needed)
};

// Define the persist configuration for cart state
const persistCartConfig = {
  key: 'cart',
  storage, // Use localStorage (or sessionStorage if needed)
};

// Persist the auth and cart reducers
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use the persisted auth reducer
    cart: persistedCartReducer, // Use the persisted cart reducer
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
    [enrollApi.reducerPath]: enrollApi.reducer,
    [enrolledCourseApi.reducerPath]: enrolledCourseApi.reducer,
    [getAllCourses.reducerPath]: getAllCourses.reducer,
    exploreSubCategoryID: exploreSubCategoryIDReducer,
    [studentProfileApi.reducerPath]: studentProfileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(courseCategoriesApi.middleware)
      .concat(subcategoryApi.middleware)
      .concat(createCourseApi.middleware)
      .concat(teacherProfileApi.middleware)
      .concat(getcoursesByTeacherApi.middleware)
      .concat(addCourseSectionApi.middleware)
      .concat(courseSectionApi.middleware)
      .concat(courseApiThroughSubCategory.middleware)
      .concat(enrollApi.middleware)
      .concat(enrolledCourseApi.middleware)
      .concat(getAllCourses.middleware)
      .concat(studentProfileApi.middleware)
      ,
});

// Create a persistor to be used with PersistGate in your app
export const persistor = persistStore(store);
