import React from "react";
import image from "../../assets/audience.jpg";
import { Link } from "react-router-dom";

const BuildAudienceDetailInTeacherDashboard = () => {
  return (
    <div className="py-16 px-6 flex justify-center items-center text-dark1 ">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-center mb-6 flex-col">
          <img className="w-64" src={image} alt="Course Explore" />
          <h1 className="text-3xl text-blueColor text-center">
            Build Your Audience
          </h1>
        </div>

        <p className="text-center mb-6">
          On INPATH LMS, you have the potential to reach millions of students who are eager to learn. In order to get a head start and stand out from the competition, it's important to drive some of your own success, as well.
        </p>

        <h2 className="text-xl mt-6 text-start text-blueColor">Steps</h2>
        <ol className="list-decimal pl-6 mt-4">
          <li>
            <strong>Step 1: Write your Course Landing Page.</strong> Whether students find your course through organic search, INPATH LMS promotions, or through your own marketing efforts, they'll eventually land on your Course Landing Page (CLP). This is where students decide whether your course is worth enrolling in by reviewing your title, course description, preview lectures, and more.
          </li>
          <li>
            <strong>Step 2: Pick a course price and join INPATH LMS promotions.</strong> Your course can be free or paid between $20-200 (prices outside of the US may be adapted to the local markets). You can also decide whether you want to opt in to INPATH LMS Deals, which will enable INPATH LMS to manage your course price and help your content reach millions of learners worldwide.
          </li>
          <li>
            <strong>Step 3: Build social proof.</strong> To gain momentum for your course once it's first published, you'll need to get social proof. This means earning a couple dozen (paid) enrollments and some honest reviews. To develop this social proof, share your course with friends and family and with your social networks (Facebook, LinkedIn, etc.), or on other online forums related to your topic.
          </li>
          <li>
            <strong>Step 4: Expand to other channels and grow your audience.</strong> Once you have established yourself as an instructor on INPATH LMS, think of ways to drive traffic from external sites to your course. For example, you could use a blog, a YouTube channel, or a social media platform like LinkedIn or Instagram to expand your audience outside of INPATH LMS and drive more awareness of your course.
          </li>
        </ol>

        <h2 className="text-xl mt-6 text-start text-blueColor">FAQs</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>How does the revenue share work?</strong> When you drive learners to your course with an instructor coupon or a referral link, you earn 97% of the net revenue. When learners discover your course through INPATH LMS -- whether that's an email they receive, an ad they click on, a recommendation they see, or any other way -- you earn 37%.
          </li>
          <li>
            <strong>What’s the earning potential of the typical instructor?</strong> This highly depends on your course topic and the size of your potential audience. Before you decide what to teach, you should do some research using the Marketplace Insights tool to understand how many potential buyers your topic has as well as how much competition there is.
          </li>
          <li>
            <strong>How will I get paid?</strong> INPATH LMS pays instructors through PayPal, Payoneer, or direct bank deposit (US only). Payments from PayPal are delivered directly to your PayPal account, which can in turn, be transferred to your bank account. Payoneer payments can be delivered to your local bank account or to a prepaid MasterCard®.
          </li>
          <li>
            <strong>How does INPATH LMS market my course?</strong> One of the biggest benefits of putting your course on INPATH LMS is exposing your course to millions of learners worldwide. For instructors who opt in to INPATH LMS Deals, INPATH LMS promotions drive tens of millions of paid enrollments each year. We invest in a wide variety of marketing channels to promote instructors' content, including email, SEO, social media advertisements, affiliate placements, and more. We use data to determine the right courses to recommend to each learner. So to benefit from our marketing, make a course that stands out on a topic students are eager to learn.
          </li>
        </ul>

        <div className="py-6 flex flex-col justify-center items-start gap-6 p-8">
          <h2 className="text-xl mt-6 text-start">
            Ready to create your course? Let's go!
          </h2>
          <Link to={"/dashboard/teacherdashboard/addCourse"}>
            <span className="cursor-pointer hover:text-white p-4 text-center rounded hover:bg-blueColor/90 text-blueColor border border-blueColor">
              Create a Course
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildAudienceDetailInTeacherDashboard;
