import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const StepForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      courseName: "",
      courseDescription: "",
      category: "",
      subcategories:"",
      price: "",
      discount_percentage: "",
      discount_end_date: "",
      thumbnail: null,
      intro_video: null,
    },
    validationSchema: Yup.object({
      courseName: step === 1
        ? Yup.string().required("Course name is required")
        : Yup.mixed().nullable(),

      courseDescription: step === 1
        ? Yup.string().required("Course description is required")
        : Yup.mixed().nullable(),

      category: step === 2
        ? Yup.string()
          .required("Category is required")
          .test(
            "validCategory",
            "Please select a valid category",
            (value) => value && value.trim() !== ""
          )
        : Yup.mixed().nullable(),

        subcategories: step === 2
        ? Yup.string()
            .required("Subcategory is required")
            .test(
              "validSubcategory",
              "Please select a valid subcategory",
              (value) => value && value.trim() !== "" // Ensure the value is valid
            )
        : Yup.mixed().nullable(),
      price: step === 3
        ? Yup.number()
          .required("Price is required")
          .min(1, "Price must be at least 1")
        : Yup.mixed().nullable(),

      discount_percentage: step === 3
        ? Yup.number()
          .required("Discount percentage is required")
          .min(0, "Discount must be at least 0%")
          .max(100, "Discount cannot exceed 100%")
        : Yup.mixed().nullable(),

      discount_end_date: step === 3
        ? Yup.date()
          .required("Discount end date is required")
          .min(new Date(), "Discount end date must be in the future")
        : Yup.mixed().nullable(),

      thumbnail: step === 4
        ? Yup.mixed()
          .required("Thumbnail is required")
          .test(
            "fileSize",
            "File size must be less than 200KB",
            (value) => value && value.size <= 200 * 1024
          )
        : Yup.mixed().nullable(),

      intro_video: step === 4
        ? Yup.mixed()
          .required("Video is required")
          .test(
            "fileSize",
            "File size must be less than 3MB",
            (value) => value && value.size <= 3 * 1024 * 1024
          )
        : Yup.mixed().nullable(),
    }),
    onSubmit: (values) => {
      console.log("Form Values: ", values);
    },
  });

  const handleNext = () => {
    const fieldsToTouch = {
      1: ["courseName", "courseDescription"],
      2: ["category", "subcategories"],
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
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Step {step} of 4</h1>
      <div className="w-full bg-gray-200 h-2 mb-4 rounded">
        <div
          className="bg-secondaryColor h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            <div>
              <label className="block mb-2 font-medium">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={formik.values.courseName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.courseName && formik.errors.courseName && (
                <p className="text-red-500 text-sm">{formik.errors.courseName}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">Course Description</label>
              <textarea
                name="courseDescription"
                value={formik.values.courseDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.courseDescription &&
                formik.errors.courseDescription && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.courseDescription}
                  </p>
                )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                name="category"
                value={formik.values.category}
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  formik.setFieldValue("category", selectedCategory);

                  // Clear subcategory if category changes
                  formik.setFieldValue("subcategories", "");
                }}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                {/* Add more categories as needed */}
              </select>
              {formik.touched.category && formik.errors.category && (
                <p className="text-red-500 text-sm">{formik.errors.category}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">Subcategory</label>
              <select
                name="subcategories"
                value={formik.values.subcategories}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              >
                <option value="">Select a subcategory</option>
                {/* Subcategories dynamically filtered based on selected category */}
                {formik.values.category === "technology" && (
                  <>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="ai">Artificial Intelligence</option>
                  </>
                )}
                {formik.values.category === "business" && (
                  <>
                    <option value="finance">Finance</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                  </>
                )}
                {formik.values.category === "design" && (
                  <>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="ui-ux">UI/UX</option>
                  </>
                )}
                {formik.values.category === "marketing" && (
                  <>
                    <option value="seo">SEO</option>
                    <option value="social-media">Social Media Marketing</option>
                  </>
                )}
                {/* Add more conditions as needed */}
              </select>
              {formik.touched.subcategories && formik.errors.subcategories && (
                <p className="text-red-500 text-sm">{formik.errors.subcategories}</p>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className="block mb-2 font-medium">Price</label>
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
              <label className="block mb-2 font-medium">
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
              <label className="block mb-2 font-medium">Discount End Date</label>
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
              <label className="block mb-2 font-medium">
                Thumbnail (Max: 200KB)
              </label>
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                onChange={(e) => {
                  formik.setFieldValue("thumbnail", e.target.files[0]);
                }}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.thumbnail && formik.errors.thumbnail && (
                <p className="text-red-500 text-sm">{formik.errors.thumbnail}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium">Video (Max: 3MB)</label>
              <input
                type="file"
                name="intro_video"
                accept="video/*"
                onChange={(e) => {
                  formik.setFieldValue("intro_video", e.target.files[0]);
                }}
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondaryColor"
              />
              {formik.touched.intro_video && formik.errors.intro_video && (
                <p className="text-red-500 text-sm">{formik.errors.intro_video}</p>
              )}
            </div>
          </>
        )}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-secondaryColor text-white rounded hover:bg-secondaryDark"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepForm;
