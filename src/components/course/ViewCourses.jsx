    // src/components/ViewCourses.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCoursesByTeacherIdQuery } from '../../features/courseCategory/getCourse';

const ViewCourses = () => {
  const { user_id } = useSelector((state) => state.auth);
  const { data: courses, isLoading, error } = useGetCoursesByTeacherIdQuery(user_id);
  const [playingVideo, setPlayingVideo] = useState(null);

  if (isLoading) return <div className="text-center mt-10 text-lg">Loading courses...</div>;
  if (error) return <div className="text-center mt-10 text-lg text-red-500">Failed to load courses.</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition"
          >
            <div className="relative">
              <img
                src={`https://api.inpath.us${course.thumbnail}`}
                alt={course.title}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() => setPlayingVideo(course.id)}
              />
              {!playingVideo || playingVideo !== course.id ? (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 hover:opacity-100 transition"
                  onClick={() => setPlayingVideo(course.id)}
                >
                  Play Video
                </button>
              ) : null}
            </div>
            {playingVideo === course.id && (
              <video
                controls
                autoPlay
                className="w-full mt-4 rounded-b-lg"
                onEnded={() => setPlayingVideo(null)}
              >
                <source src={`https://api.inpath.us${course.intro_video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.title || 'Untitled Course'}</h2>
              <p className="text-gray-600 mt-2">
                {course.description || 'No description available.'}
              </p>
              <p className="mt-2 text-green-500 font-semibold">
                ${course.price || 'N/A'}{' '}
                {course.discount_percentage && (
                  <span className="text-red-500 ml-2">
                    {course.discount_percentage}% off
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourses;
