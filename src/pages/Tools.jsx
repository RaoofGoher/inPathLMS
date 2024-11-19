import React from 'react';
import CertificateGenerator from '../../src/components/CertificateGenerator'; // Import the new Certificate Generator component
import ScrollToTop from "../components/ScrollToTop"
const Tools = () => {
  return (
    <div>
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor2 py-24 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Course Management Tools</h1>
        <p className="text-lg text-lightColor2 opacity-90 mb-6">
          Explore our powerful tools to create courses, track progress, and manage assessments.
        </p>
      </section>

      {/* Course Builder Section */}
      <section className="py-12 bg-lightColor2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark1 mb-4">Course Builder</h2>
          <p className="text-lg text-dark1 mb-6">
            Create and design your courses easily with our drag-and-drop course builder.
          </p>
          <a href="/tools" className="inline-block px-6 py-2 bg-primaryColor text-dark1 rounded-lg hover:bg-lightColor1">
            Learn More
          </a>
        </div>
      </section>

      {/* Quiz & Assessment Section */}
      <section className="py-12 bg-gradient-to-r from-primaryColor to-secondaryColor">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark1 mb-4">Quiz & Assessment</h2>
          <p className="text-lg text-dark1 mb-6">
            Easily create quizzes and assessments to evaluate your students' knowledge and progress.
          </p>
          <a href="/tools" className="inline-block px-6 py-2 bg-primaryColor text-dark1 rounded-lg hover:bg-lightColor1">
            Learn More
          </a>
        </div>
      </section>

      {/* Student Progress Tracker Section */}
      <section className="py-12 bg-lightColor2">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark1 mb-4">Student Progress Tracker</h2>
          <p className="text-lg text-dark1 mb-6">
            Track and monitor your students' progress throughout the course with detailed reports.
          </p>
          <a href="/tools" className="inline-block px-6 py-2 bg-primaryColor text-dark1 rounded-lg hover:bg-lightColor1">
            Learn More
          </a>
        </div>
      </section>

      {/* Gradebook Section */}
      <section className="py-12 bg-gradient-to-r from-primaryColor to-secondaryColor">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark1 mb-4">Gradebook</h2>
          <p className="text-lg text-dark1 mb-6">
            Manage and evaluate your students' grades in a simple, easy-to-use gradebook interface.
          </p>
          <a href="/tools" className="inline-block px-6 py-2 bg-primaryColor text-dark1 rounded-lg hover:bg-lightColor1">
            Learn More
          </a>
        </div>
      </section>

      {/* Certificate Generator Section */}
      <CertificateGenerator /> {/* Adding the new Certificate Generator component */}
    </div>
  );
};

export default Tools;
