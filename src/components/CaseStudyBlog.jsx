import React from 'react';

const blogData = [
  {
    id: 1,
    title: "How to Improve Student Engagement with LMS",
    excerpt:
      "Discover practical tips and strategies to increase student engagement using your Learning Management System. From gamification to personalized learning, we cover it all.",
    image: "https://via.placeholder.com/400x250?text=Student+Engagement+Tips",
    link: "/blog/student-engagement-lms",
  },
  {
    id: 2,
    title: "The Future of Online Learning Platforms",
    excerpt:
      "In this post, we explore the latest trends shaping the future of online learning. AI, AR/VR, and data-driven education are just a few of the innovations on the horizon.",
    image: "https://via.placeholder.com/400x250?text=Future+of+Learning+Platforms",
    link: "/blog/future-of-online-learning",
  },
  {
    id: 3,
    title: "How to Measure Learning Outcomes Effectively",
    excerpt:
      "Measuring the success of online courses is essential. Learn how to track and analyze learning outcomes to ensure your LMS is delivering value to both students and educators.",
    image: "https://via.placeholder.com/400x250?text=Measuring+Learning+Outcomes",
    link: "/blog/measure-learning-outcomes",
  },
];

const CaseStudyBlog = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-dark1 text-center mb-6">Related Blog Posts</h2>

      <div className="space-y-8">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row items-start justify-between bg-lightColor2 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            style={{
              border: `1px solid ${post.id % 2 === 0 ? '#50E3C2' : '#4A90E2'}`,  // Border based on alternating colors
              backgroundColor: '#F7F9FC',  // Light gray background for the card
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primaryColor mb-2">{post.title}</h3>
              <p className="text-dark1 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="bg-lightColor1 py-2 px-4 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:bg-blue-500 hover:scale-105 hover:shadow-2xl hover:animate-pulse focus:outline-none focus:ring-4 focus:ring-turquoise focus:ring-opacity-50"
                style={{
                  color: '#FFFFFF',  // White text color for the button
                  border: 'none', // Removing the default button border
                }}
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyBlog;
