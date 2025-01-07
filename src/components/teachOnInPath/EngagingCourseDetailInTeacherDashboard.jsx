import React from "react";
import image from "../../assets/course-explore.jpg";
import { Link } from "react-router-dom";

const EngagingCourseDetailInTeacherDashboard = () => {
  return (
    <div className="py-16 px-6  flex justify-center items-center text-dark1 ">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-center mb-6 flex-col">
          <img className="w-64" src={image} alt="Course Explore" />
          <h1 className="text-3xl text-blueColor text-center">
            Create an Engaging Course
          </h1>
        </div>

        <p className="text-center mb-6">
          It's important to make sure your course is engaging for your students
          with a well-structured, practical, and rewarding learning experience.
          The most successful instructors spend time planning their course
          content before they start recording to ensure their course helps
          students achieve clear goals.
        </p>

        <h2 className="text-xl mt-6 text-start text-blueColor">Steps</h2>
        <ol className="list-decimal pl-6 mt-4">
          <li>
            <strong>Step 1: Choose your course topic.</strong> Pick something
            you're knowledgeable in and genuinely excited about teaching. Learn
            more about INPATH LMS’s Marketplace Insights tool that helps you
            understand the demand and competition for your chosen topic.
          </li>
          <li>
            <strong>
              Step 2: Define your intended learners and your course’s learning
              objectives.
            </strong>{" "}
            Before you begin creating content for your course, it's important to
            determine who you are teaching and what your students will learn or
            be able to accomplish by the end of your course. Learn more about
            what questions to ask yourself about your learners and how to write
            clear learning objectives.
          </li>
          <li>
            <strong>
              Step 3: Decide how students will practice what you’re teaching.
            </strong>{" "}
            INPATH LMS students love being hands-on with their learning: they
            want to practice what they've learned through exercises, activities,
            case studies, and more! There are lots of different types of
            practice activities you can add to your course to help create an
            engaging online learning experience.
          </li>
          <li>
            <strong>Step 4: Create your course outline.</strong> Your course
            outline is the foundation for your course-- this is where you decide
            how you will structure and organize your course content. We have an
            outline template to help you get started!
          </li>
          <li>
            <strong>Step 5: Script your course.</strong> Once you know how your
            course will be structured, the next step is to prep for recording
            your lectures. Most instructors find that scripting each lecture (or
            writing bullet point notes) helps to reduce the amount of time spent
            recording and editing and increases the overall quality of their
            delivery.
          </li>
        </ol>

        <p className="mt-6 text-gray-700 text-center">
          <strong>Insider tip:</strong> Learn the recommended course creation
          process directly from the INPATH LMS Instructor Team and experienced
          instructors by taking the Official INPATH LMS Course, How to Create an
          Online Course.
        </p>

        <h2 className="text-xl mt-6 text-start text-blueColor">FAQs</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>What are the components of a course?</strong> A INPATH LMS
            course can consist of a combination of videos, slides, text,
            quizzes, coding exercises, assignments, and practice tests. You can
            also add additional resources to your course, including: PDFs,
            links, audio files, etc. These components are structured into
            sections and lectures (sections are groups of lectures).
          </li>
          <li>
            <strong>How long should my course be?</strong> The only length
            requirement for a course is that it must be at least 30 minutes.
            Your course should be as long as it takes to fully teach your topic
            and allow your students to achieve the course goals.
          </li>
          <li>
            <strong>How much time does it take to create a course?</strong>{" "}
            Course creation time varies greatly depending on the length of the
            course and an instructor's time commitment. Many of our instructors
            complete their courses in 30-45 days.
          </li>
          <li>
            <strong>
              Do students want quizzes, assignments, and worksheets?
            </strong>{" "}
            Yes! INPATH LMS students love to practice and apply what they are
            learning. Practice activities can be anything that makes a student
            apply their learning, not just quizzes or worksheets.
          </li>
          <li>
            <strong>Are there any course requirements? What are they?</strong>{" "}
            Courses must contain at least 30 minutes of content, include at
            least 5 separate lectures, and videos must be HD quality.
          </li>
        </ul>
        <div className="py-6 flex flex-col justify-center items-start gap-6 p-8">
          <h2 className="text-xl mt-6 text-start">
          Ready to create your course? Let's go!
          </h2>
          <Link to={"/dashboard/teacherdashboard/addCourse"}>
          <span className="cursor-pointer hover:text-white p-4 text-center  rounded hover:bg-blueColor/90 text-blueColor border border-blueColor">
            Create a Course
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngagingCourseDetailInTeacherDashboard;
