import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFetchCourseCategoriesQuery } from "../../features/courseCategory/courseCatgeoriesApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../features/courseCategory/courseCategoriesSlice";
import { useGetSubcategoriesQuery } from "../../features/courseCategory/subCategorySlice";
import { useCreateCourseMutation } from "../../features/courseCategory/createCourseApi";
import axios from "axios";

const StepForm = () => {
  const dispatch = useDispatch();
  const {
    data: categories,
    isLoading,
    isError,
  } = useFetchCourseCategoriesQuery();
  const storedCategories = useSelector(
    (state) => state.courseCategories.categories
  );
  const [step, setStep] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const { user_id } = useSelector((state) => state.auth);
  const published = "False";
  const [createCourse] = useCreateCourseMutation();
  // Fetch subcategories based on selected category
  const {
    data: subcategories,
    isLoading: isSubcategoryLoading,
    isError: isSubcategoryError,
  } = useGetSubcategoriesQuery(selectedCategoryId, {
    skip: !selectedCategoryId, // Skip the query if no category is selected
  });

  useEffect(() => {
    if (categories) {
      dispatch(setCategories(categories));
    }
  }, [categories]);

  const handleSubmit1 = async (values) => {
    const formData = new FormData();

    // Append all form values to FormData
    for (const key in values) {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    }

    // Add additional fields if required
    formData.append("instructor", user_id);
    formData.append("published", published.toString());

    // Debugging: Log FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post(
        "https://api.inpath.us/teacher/api/courses/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Course created successfully:", response.data);
      alert("Course created successfully!");
    } catch (error) {
      console.error(
        "Error creating course:",
        error.response?.data || error.message
      );
      alert("Failed to create course!");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      subcategory: "",
      price: "",
      discount_percentage: "",
      discount_end_date: "",
      thumbnail: null,
      intro_video: null,
    },
    validationSchema: Yup.object({
      title:
        step === 1
          ? Yup.string().required("Course name is required")
          : Yup.mixed().nullable(),
      description:
        step === 1
          ? Yup.string().required("Course description is required")
          : Yup.mixed().nullable(),
      category:
        step === 2
          ? Yup.string().required("Category is required")
          : Yup.mixed().nullable(),
      subcategory:
        step === 2
          ? Yup.string().required("Subcategory is required")
          : Yup.mixed().nullable(),
      price:
        step === 3
          ? Yup.number()
              .required("Price is required")
              .min(1, "Price must be at least 1")
          : Yup.mixed().nullable(),
      // discount_percentage: step === 3 ? Yup.number().required("Discount percentage is required").min(0, "Discount must be at least 0%").max(100, "Discount cannot exceed 100%") : Yup.mixed().nullable(),
      // discount_end_date: step === 3 ? Yup.date().required("Discount end date is required").min(new Date(), "Discount end date must be in the future") : Yup.mixed().nullable(),
      thumbnail:
        step === 4
          ? Yup.mixed()
              .required("Thumbnail is required")
              .test(
                "fileSize",
                "File size must be less than 200KB",
                (value) => value && value.size <= 200 * 1024
              )
          : Yup.mixed().nullable(),
      intro_video:
        step === 4
          ? Yup.mixed()
              .required("Video is required")
              .test(
                "fileSize",
                "File size must be less than 3MB",
                (value) => value && value.size <= 3 * 1024 * 1024
              )
          : Yup.mixed().nullable(),
    }),
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit1(values);
      resetForm();
    },
  });

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    formik.setFieldValue("category", selectedCategory);
    setSelectedCategoryId(selectedCategory); // Store the selected category ID
    formik.setFieldValue("subcategory", ""); // Reset subcategory on category change
  };

  const handleNext = () => {
    const fieldsToTouch = {
      1: ["title", "description"],
      2: ["category", "subcategory"],
      3: ["price", "discount_percentage", "discount_end_date"],
      4: ["thumbnail", "intro_video"],
    };

    formik.setTouched(
      fieldsToTouch[step].reduce(
        (acc, field) => ({ ...acc, [field]: true }),
        {}
      )
    );

    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        if (step === 4) {
          formik.handleSubmit();
        } else {
          setStep(step + 1);
        }
      }
    });
  };

  const handlePrev = () => setStep(step - 1);
  const progress = (step / 4) * 100;

  return (
    <div className="p-6 mt-8 max-w-lg mx-auto shadow-xl shadow-light3 rounded-md bg-gradient-to-bl from-primaryColor to-secondaryColor ">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        Step {step} of 4
      </h1>
      <div className="w-full bg-gray-200 h-2 mb-4 rounded">
        <div
          className="bg-lightColor1 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            <div>
              <label className="block mb-2 font-medium text-white">
                Course Name
              </label>
              <input
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.title && formik.errors.title && (
                <p className="text-red-500 text-sm">{formik.errors.title}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-white">
                Course Description
              </label>
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-sm">
                  {formik.errors.description}
                </p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block mb-2 font-medium text-white">
                Category
              </label>
              <select
                name="category"
                value={formik.values.category}
                onChange={handleCategoryChange} // Updated to handle category change
                onBlur={formik.handleBlur}
                className="w-full border shadow-sm shadow-lightColor1  p-2  font-semibold rounded focus:outline-none focus:ring-2 focus:ring-lightColor1"
              >
                <option value="">Select a category</option>
                {storedCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {formik.touched.category && formik.errors.category && (
                <p className="text-red-500 text-sm">{formik.errors.category}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-white">
                Subcategory
              </label>
              <select
                name="subcategory"
                value={formik.values.subcategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border font-semibold p-2 rounded focus:outline-none focus:ring-2 focus:ring-lightColor1 shadow-sm shadow-lightColor1"
              >
                <option value="">Select a subcategory</option>
                {/* Dynamically display subcategories fetched from the API */}
                {isSubcategoryLoading ? (
                  <option>Loading...</option>
                ) : (
                  subcategories?.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))
                )}
              </select>
              {formik.touched.subcategory && formik.errors.subcategory && (
                <p className="text-red-500 text-sm">
                  {formik.errors.subcategory}
                </p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className="block mb-2 font-medium text-white">Price</label>
              <input
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-red-500 text-sm">{formik.errors.price}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-white">
                Discount Percentage
              </label>
              <input
                type="number"
                name="discount_percentage"
                value={formik.values.discount_percentage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.discount_percentage &&
                formik.errors.discount_percentage && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.discount_percentage}
                  </p>
                )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-white">
                Discount End Date
              </label>
              <input
                type="date"
                name="discount_end_date"
                value={formik.values.discount_end_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.discount_end_date &&
                formik.errors.discount_end_date && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.discount_end_date}
                  </p>
                )}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div>
              <label className="block mb-2 font-medium text-white">
                Thumbnail
              </label>
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                onChange={(e) =>
                  formik.setFieldValue("thumbnail", e.target.files[0])
                }
                onBlur={formik.handleBlur}
                className="w-full  shadow-sm shadow-lightColor1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lightColor1"
              />
              {formik.touched.thumbnail && formik.errors.thumbnail && (
                <p className="text-red-500 text-sm">
                  {formik.errors.thumbnail}
                </p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-white">
                Intro Video
              </label>
              <input
                type="file"
                name="intro_video"
                accept="video/*"
                onChange={(e) =>
                  formik.setFieldValue("intro_video", e.target.files[0])
                }
                onBlur={formik.handleBlur}
                className="w-full  shadow-sm shadow-lightColor1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lightColor1"
              />
              {formik.touched.intro_video && formik.errors.intro_video && (
                <p className="text-red-500 text-sm">
                  {formik.errors.intro_video}
                </p>
              )}
            </div>
          </>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="py-2 px-4 bg-light3  text-white rounded-md shadow-sm shadow-lightColor1 hover:text-light3 hover:bg-lightColor2"
            >
              Previous
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="py-2 px-4  bg-primaryColor hover:bg-secondaryColor text-white rounded-md shadow-sm shadow-lightColor1"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepForm;
