import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="py-12" > {/* lightColor2 */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6" style={{ color: "#4A90E2" }}>Our Achievements</h2> {/* primaryColor */}
        <p className="text-xl mb-12" style={{ color: "#7F8C8D" }}>
          Join thousands of learners and instructors in our growing community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Number of Courses */}
          <div
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#50E3C2", borderWidth: "1px" }} // secondaryColor
          >
            <div className="text-4xl font-bold mb-2" style={{ color: "#4A90E2" }}> {/* primaryColor */}
              350+
            </div>
            <p className="text-xl" style={{ color: "#333333" }}> {/* dark1 */}
              Courses Available
            </p>
          </div>

          {/* Number of Students */}
          <div
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#50E3C2", borderWidth: "1px" }} // secondaryColor
          >
            <div className="text-4xl font-bold mb-2" style={{ color: "#E74C3C" }}> {/* dark2 */}
              10,000+
            </div>
            <p className="text-xl" style={{ color: "#333333" }}> {/* dark1 */}
              Students Enrolled
            </p>
          </div>

          {/* Number of Instructors */}
          <div
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#50E3C2", borderWidth: "1px" }} // secondaryColor
          >
            <div className="text-4xl font-bold mb-2" style={{ color: "#50E3C2" }}> {/* secondaryColor */}
              500+
            </div>
            <p className="text-xl" style={{ color: "#333333" }}> {/* dark1 */}
              Certified Instructors
            </p>
          </div>

          {/* Completed Courses */}
          <div
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#50E3C2", borderWidth: "1px" }} // secondaryColor
          >
            <div className="text-4xl font-bold mb-2" style={{ color: "#F5A623" }}> {/* lightColor1 */}
              7,500+
            </div>
            <p className="text-xl" style={{ color: "#333333" }}> {/* dark1 */}
              Courses Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
