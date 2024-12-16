import React, { Suspense } from "react";
import ScrollToTop from "../../components/ScrollToTop";


//lazy load the InstructorSpotlit
const InstructorSpotlight = React.lazy(() => import('../../components/InstructorSpotlight'));
// lazy load the StudentsTestimonials
const StudentsTestimonials = React.lazy(() =>
  import("../../components/StudentsTestimonials")
);
// Lazy load the StatisticsSection
const StatisticsSection = React.lazy(() =>
  import("../../components/StatisticsSection")
);
// Lazy load the CardComponent
const CardComponent = React.lazy(() =>
  import("../../components/CardCompoenent")
);

const OverView = () => {
  return (
    <div>
      <ScrollToTop/>
      {/* Suspense component to handle loading state */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <CardComponent />
      </Suspense> */}
      <Suspense fallback={<div>Loading...</div>}>
        <StatisticsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <StudentsTestimonials />
      </Suspense>
      <Suspense fallback={<div>Loading......</div>}>
        <InstructorSpotlight />
      </Suspense>
    </div>
  );
};

export default OverView;
