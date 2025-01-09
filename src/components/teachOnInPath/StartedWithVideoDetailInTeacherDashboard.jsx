import React from "react";
import image from "../../assets/Video-Creations.jpg";
import { Link } from "react-router-dom";

const StartedWithVideoDetailInTeacherDashboard = () => {
  return (
    <div className="py-16 px-6  flex justify-center items-center text-dark1 ">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-center mb-6 flex-col">
          <img className="w-64" src={image} alt="Course Explore" />
          <h1 className="text-3xl text-blueColor text-center">
            Recording Your Course Content
          </h1>
        </div>

        <p className="text-center mb-6">
          Once you have chosen your topic, created your course outline, and
          planned your content, it's important to start planning your video
          production. Don’t worry if you’ve never recorded an online course. We
          have resources for you along the way!
        </p>

        <h2 className="text-xl mt-6 text-start text-blueColor">Steps</h2>
        <ol className="list-decimal pl-6 mt-4">
          <li>
            <strong>Step 1: Determine the type of videos you’ll record:</strong>{" "}
            Once your course content is planned (you have validated your course
            topic and completed your course outline), it’s time to record. You
            can record yourself (talking head), record your screen (screencasting),
            or do a mix of both. The type of course you’ll record will determine
            the equipment you’ll need.
          </li>
          <li>
            <strong>Step 2: Gather the audio and video equipment you need.</strong>{" "}
            You may even already have some equipment at home! Take a look at our
            recording equipment recommendations for suggestions for microphones,
            cameras, and screencasting, and editing software for various budgets.
          </li>
          <li>
            <strong>Step 3: Set up your recording space.</strong> Once you have
            your recording equipment, it's time to find a quiet place to set it
            all up and get ready to record. Get tips for setting up your recording
            space to deliver high-quality audio and video, plus get a behind the
            scenes look at other instructors’ recording setups, and learn hacks
            for better A/V quality.
          </li>
          <li>
            <strong>Step 4: Send us a Test Video.</strong> Once your recording
            space is set up, it’s time to test it out! We have a team ready to
            give you feedback to ensure you meet our recording quality standards.
            Learn more about submitting a Test Video.
          </li>
          <li>
            <strong>Step 5: Edit your course.</strong> After you’ve completed
            recording your course content, it’s time to polish your videos before
            uploading to INPATH LMS.
          </li>
        </ol>

        <p className="mt-6 text-gray-700 text-center">
          <strong>Insider tip:</strong> Learn the recommended course creation
          process directly from the INPATH LMS Instructor Team and from some of
          our experienced instructors by taking the Official INPATH LMS Course,
          How to Create an Online Course.
        </p>

        <h2 className="text-xl mt-6 text-start text-blueColor">FAQs</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>How do I decide what type of recording I’ll need to do for
            my course?</strong> Let your course content be your guide! Based on
            your content you should pick the video format that will provide the
            best visual accompaniment to your message. If you're teaching coding
            or a technical course, you'll probably want record your screen while
            you talk (also called "screencast"). If you don't have to show slides
            or a screen to demonstrate what you’re teaching, filming yourself is
            probably your best bet (also known as "talking head"). You may even
            want to show slides with an audio voiceover, which is a great way for
            your students to visualize complex concepts.
          </li>
          <li>
            <strong>How much money do I need to spend on equipment?</strong> This
            depends on what equipment you may already have and how much you'd like
            to invest. Most smartphones can record HD video. You might consider
            using an external microphone since the built-in microphone on most
            smartphones and computers don’t provide high-quality audio. Before you
            purchase any equipment (see our recommendations), test what you
            already own and experiment with your setup.
          </li>
          <li>
            <strong>How does the test video process work?</strong> Once your
            recording space is set up, you can submit a 1-3 minute test video to
            get personalized feedback on your recording quality. Once your test
            video is received, INPATH LMS’s review team will provide you with
            feedback on the quality of your audio, video, and delivery. While this
            is not a requirement, it’s highly recommended so that you can feel
            confident that your recording quality is sufficient for INPATH LMS. If
            you change your recording setup at any time, you can submit another
            test video.
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

export default StartedWithVideoDetailInTeacherDashboard;
