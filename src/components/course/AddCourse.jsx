import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const StepForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      courseName: "",
      courseDescription: "",
      thumbnail: null,
      video: null,
    },
    validationSchema: Yup.object({
      courseName: step === 1
        ? Yup.string().required("Course name is required")
        : Yup.mixed().nullable(),
      courseDescription: step === 2
        ? Yup.string().required("Course description is required")
        : Yup.mixed().nullable(),
      thumbnail: step === 3
        ? Yup.mixed()
            .required("Thumbnail is required")
            .test(
              "fileSize",
              "File size must be less than 200KB",
              (value) => value && value.size <= 200 * 1024
            )
        : Yup.mixed().nullable(),
      video: step === 4
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
    // Get the fields for the current step
    const fieldsToTouch = {
      1: ["courseName"],
      2: ["courseDescription"],
      3: ["thumbnail"],
      4: ["video"],
    };
  
    // Mark the current step's fields as touched
    formik.setTouched(
      fieldsToTouch[step].reduce(
        (acc, field) => ({ ...acc, [field]: true }),
        {}
      )
    );
  
    // Validate the form
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

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Step {step} of 4</h1>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <div>
            <label className="block mb-2 font-medium">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formik.values.courseName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border p-2 rounded"
            />
            {formik.touched.courseName && formik.errors.courseName && (
              <p className="text-red-500 text-sm">{formik.errors.courseName}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2 font-medium">Course Description</label>
            <textarea
              name="courseDescription"
              value={formik.values.courseDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border p-2 rounded"
            />
            {formik.touched.courseDescription &&
              formik.errors.courseDescription && (
                <p className="text-red-500 text-sm">
                  {formik.errors.courseDescription}
                </p>
              )}
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2 font-medium">Thumbnail (Max: 200KB)</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={(e) => {
                formik.setFieldValue("thumbnail", e.target.files[0]);
              }}
              className="w-full border p-2 rounded"
            />
            {formik.errors.thumbnail && (
              <p className="text-red-500 text-sm">{formik.errors.thumbnail}</p>
            )}
          </div>
        )}

        {step === 4 && (
          <div>
            <label className="block mb-2 font-medium">Video (Max: 3MB)</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={(e) => {
                formik.setFieldValue("video", e.target.files[0]);
              }}
              className="w-full border p-2 rounded"
            />
            {formik.errors.video && (
              <p className="text-red-500 text-sm">{formik.errors.video}</p>
            )}
          </div>
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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {step === 4 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepForm;
