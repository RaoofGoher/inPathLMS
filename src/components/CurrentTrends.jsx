import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import trend from "../assets/trend.png";

const CurrentTrends = () => {
  return (
    <>
      <section className=" pt-6 px-8 md:px-16 flex flex-col gap-6 bg-white">
        <div>
          <h1 className="text-3xl md:text-7xl font-bold family-sans-serif text-grayColor">
            Trending Now
          </h1>
        </div>
        <div className="border-t-2  border-grayColor"></div>
      </section>
      <section className="bg-white px-8 md:px-16 gap-8 pt-4   grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <ul>
          {/* First Item: ChatGPT Skill */}
          <li className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold font-sans text-wrap text-dark1">
              ChatGPT is a top skill
            </h1>
            <h2 className="flex flex-col gap-2 text-blueColor font-bold">
              <Link to="/chatgpt-courses" className="hover:text-dark1">
                View ChatGPT courses &gt;
              </Link>
              <span className="text-grayColor">3,858,936 learners</span>
            </h2>
            <Link to="/trending-skills">
              <button className="p-2 flex  lg:text-xl gap-4 items-center text-start w-full border-2 border-grayColor text-grayColor hover:bg-blueColor hover:border-blueColor  hover:text-grayColor duration-300">
                {" "}
                Show all trending skills
                <span>
                  <img width={30} src={trend} alt="trend" />
                </span>
              </button>
            </Link>
          </li>
        </ul>
        {/* Second Item: Development Categories */}
        <ul className="flex flex-col gap-6 sm:pl-12">
          <h1 className="font-bold text-2xl text-dark1">Development</h1>
          <li className="flex flex-col text-blueColor">
            <Link to="/python-courses" className="font-bold hover:text-dark1">
              Python &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link
              to="/web-development-courses"
              className="font-bold hover:text-dark1"
            >
              Web Development &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link
              to="/data-science-courses"
              className="font-bold hover:text-dark1"
            >
              Data Science &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
        </ul>

        {/* Second Category */}
        <ul className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-dark1">Design</h1>
          <li className="flex flex-col text-blueColor">
            <Link to="/blender-courses" className="font-bold hover:text-dark1">
              Blender &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link
              to="/graphic-design-courses"
              className="font-bold hover:text-dark1"
            >
              Graphic Design &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link
              to="/ux-design-courses"
              className="font-bold hover:text-dark1"
            >
              User Experience (UX) Design &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
        </ul>

        {/* Third Category */}
        <ul className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-dark1">Business Skills</h1>
          <li className="flex flex-col text-blueColor">
            <Link to="/pmp-courses" className="font-bold hover:text-dark1">
              PMI Project Management Professional (PMP) &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link to="/power-bi-courses" className="font-bold hover:text-dark1">
              Microsoft Power BI &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-blueColor">
            <Link
              to="/project-management-courses"
              className="font-bold hover:text-dark1"
            >
              Project Management &gt;
            </Link>
            <span className="text-grayColor font-thin text-sm">
              46,557,222 learners
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CurrentTrends;
