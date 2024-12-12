import React from "react";

const CurrentTrends = () => {
  return (
    <>
      <section className="py-8 px-8 md:px-16 flex flex-col gap-4 bg-white">
        <div>
          <h1 className="text-3xl font-bold family-sans-serif text-dark1">
            Current trends
          </h1>
        </div>
        <div className="border-t-2 border-primaryColor"></div>
      </section>
      <section className="bg-white px-8 md:px-16 gap-8  pt-4 pb-12 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 ">
        <ul>
          {/* First Item: ChatGPT Skill */}
          <li className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold font-sans text-wrap text-dark1">
              ChatGPT is a top skill
            </h1>
            <h2 className="flex flex-col gap-2 text-primaryColor font-bold">
              {"View ChatGPT courses  > "}
              <span className="text-dark1">3,858,936 learners</span>
            </h2>
            <button className="p-2 border-2 border-primaryColor text-primaryColor hover:bg-lightColor1 hover:border-none font-bold hover:text-dark1 duration-300">
              View all trending skills
            </button>
          </li>
        </ul>
        {/* Second Item: Development Categories */}

        <ul className="flex flex-col gap-6 sm:pl-12 ">
          <h1 className="font-bold text-2xl text-dark1">Development</h1>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Python  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Web Development >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Data Science  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
        </ul>

        {/* Second Category */}
        <ul className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-dark1">desgin</h1>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Blender  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Graphic desgin  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">
              {"User Experience (UX) Desgin  >"}
            </span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
        </ul>

        {/* Third Category */}
        <ul className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-dark1">Buisness Skills</h1>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">
              {"PMI Project Management Professional (PMP) >"}
            </span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Microsoft Power BI  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
          <li className="flex flex-col text-primaryColor">
            <span className=" font-bold">{"Project Management  >"}</span>
            <span className="text-dark1 font-thin text-sm ">
              46,557,222 learners
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CurrentTrends;
