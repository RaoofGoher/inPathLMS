import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
const LearningPaths = () => {
  // learning path section data here
  const paths = [
    {
      title: "Frontend Development",
      description: "HTML, CSS, and JavaScript basics to advanced React.",
      color: "bg-primaryColor",
    },
    {
      title: "Data Science",
      description: "Learn Python, data analysis, and machine learning.",
      color: "bg-secondaryColor",
    },
    {
      title: "UI/UX Design",
      description: "From design principles to advanced prototyping.",
      color: "bg-primaryColor",
    },
  ];

  return (
    <>
      {/* here is my HeroSection */}
      <section>
        <div className="bg-primaryColor text-lightColor2 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Guided Learning Journey
          </h1>
          <p className="text-lg mb-6">
            Explore curated learning paths tailored to help you achieve your
            goals.
          </p>
          <button className="px-6 py-2 bg-secondaryColor text-dark1 font-semibold rounded-md hover:bg-lightColor1">
            Start Exploring
          </button>
        </div>
      </section>
      {/* import ScrolltoTop component here */}
      <ScrollToTop />
      {/* featured scetion here */}
      <section>
        <div className="py-12 bg-lightColor2">
          <h2 className="text-2xl font-bold text-dark1 text-center mb-8">
            Featured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {paths.map((path, index) => (
              <div
                key={index}
                className={`${path.color} text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-lg font-bold mb-2">{path.title}</h3>
                <p className="text-sm">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* how its work Section here */}
      <section>
        <div className="py-12 bg-primaryColor text-dark1">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 border-2 bg-white border-light3 rounded-md">
              <h3 className="text-lg font-bold mb-4">1. Choose Your Path</h3>
              <p>Select a path that aligns with your goals and interests.</p>
            </div>
            <div className="text-center p-6 border-2 bg-white border-light3 rounded-md">
              <h3 className="text-lg font-bold mb-4">2. Follow the Steps</h3>
              <p>Complete the recommended courses and projects.</p>
            </div>
            <div className="text-center p-6 border-2 bg-white border-light3 rounded-md">
              <h3 className="text-lg font-bold mb-4">3. Achieve Your Goals</h3>
              <p>Earn certifications and acquire new skills.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="py-12 bg-lightColor2">
    <h2 className="text-2xl font-bold text-dark1 text-center mb-8">Student Success Stories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {Array(3).fill().map((_, i) => (
        <div key={i} className="p-6 bg-white border-2 border-light3 rounded-md shadow-sm">
          <p className="italic">
            "The learning paths helped me land my dream job in tech!"
          </p>
          <p className="text-right font-semibold mt-4">- Student {i + 1}</p>
        </div>
      ))}
    </div>
  </div>
      </section>
      <div className=" bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor2   py-12 text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
    <p className="mb-6">Choose a learning path and start achieving your goals today.</p>
    <button className="px-6 py-2 bg-lightColor1 text-dark1 font-semibold rounded-md hover:bg-secondaryColor">
      Explore Learning Paths
    </button>
  </div>
    </>
  );
};

export default LearningPaths;
