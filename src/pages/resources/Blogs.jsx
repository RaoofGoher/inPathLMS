import React from 'react'
import CaseStudyBlog from '../../components/CaseStudyBlog';
import ScrollToTop from '../../components/ScrollToTop';

const Blogs = () => {
  const blogPosts = [
    {
      title: "How to Improve Your Learning Experience",
      author: "John Doe",
      date: "November 12, 2024",
      excerpt: "Discover effective strategies to enhance your learning journey, from time management tips to active learning techniques.",
      imageUrl: "https://via.placeholder.com/600x400", // Placeholder image URL
      link: "#"
    },
    {
      title: "The Future of Online Education",
      author: "Jane Smith",
      date: "November 10, 2024",
      excerpt: "Explore the latest trends in online education and how they’re shaping the future of learning platforms worldwide.",
      imageUrl: "https://via.placeholder.com/600x400", // Placeholder image URL
      link: "#"
    },
    {
      title: "Top 10 Tips for Students to Stay Motivated",
      author: "Michael Brown",
      date: "November 5, 2024",
      excerpt: "Staying motivated during your studies can be challenging. Here are 10 practical tips to keep you on track and inspired.",
      imageUrl: "https://via.placeholder.com/600x400", // Placeholder image URL
      link: "#"
    }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-secondaryColor to-primaryColor py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Introduction Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Latest Blogs</h1>
            <p className="text-lg text-gray-200">
              Stay up to date with the latest trends, tips, and insights in the world of learning, education, and motivation.
            </p>
          </section>

          {/* Blog Posts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium text-primaryColor">{post.author}</span> | {post.date}
                  </p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <a href={post.link} className="text-primaryColor font-semibold hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CaseStudyBlog component */}
          <CaseStudyBlog />

          {/* Categories Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learning Tips</h3>
                <p className="text-gray-600 mb-4">Discover articles on how to improve your study techniques, time management skills, and more.</p>
                <a href="#" className="text-primaryColor font-semibold hover:underline">Browse Learning Tips</a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Online Education</h3>
                <p className="text-gray-600 mb-4">Stay updated with the latest trends and developments in online learning and digital classrooms.</p>
                <a href="#" className="text-primaryColor font-semibold hover:underline">Explore Online Education</a>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Motivation & Inspiration</h3>
                <p className="text-gray-600 mb-4">Get inspired with motivational stories and advice to keep you on track with your learning journey.</p>
                <a href="#" className="text-primaryColor font-semibold hover:underline">Get Motivated</a>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-white shadow-lg rounded-lg p-8 mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Get the latest blog posts, learning tips, and education news delivered straight to your inbox.
            </p>
            <div className="flex justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-lg text-gray-700" />
              <button className="px-4 py-2 bg-primaryColor text-white rounded-r-lg hover:bg-primaryColor/80">
                Subscribe
              </button>
            </div>
          </section>
          
        </div>
      </div>
    </>
  )
}

export default Blogs;
