import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/buisness.jpg";
import image2 from "../../assets/development.jpg";
import image3 from "../../assets/h9.svg";
import ScrollToTop from "../../components/ScrollToTop";
const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Improve Your Learning Experience",
      author: "John Doe",
      date: "November 12, 2024",
      excerpt:
        "Discover effective strategies to enhance your learning journey, from time management tips to active learning techniques.",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "The Future of Online Education",
      author: "Jane Smith",
      date: "November 10, 2024",
      excerpt:
        "Explore the latest trends in online education and how they’re shaping the future of learning platforms worldwide.",
      imageUrl: image2,
    },
    {
      id: 3,
      title: "Top 10 Tips for Students to Stay Motivated",
      author: "Michael Brown",
      date: "November 5, 2024",
      excerpt:
        "Staying motivated during your studies can be challenging. Here are 10 practical tips to keep you on track and inspired.",
      imageUrl: image3,
    },
  ];

  return (
    <>
      <ScrollToTop/>
      <div className="bg-white py-16 text-blueColor">
        <div className="max-w-7xl mx-auto px-6">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Latest Blogs</h1>
            <p className="text-lg text-grayColor">
              Stay informed with insights, tips, and trends to help you grow and
              succeed.
            </p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-grayColor shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 hover:text-blueColor/90 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    By{" "}
                    <span className="font-medium text-blueColor">
                      {post.author}
                    </span>{" "}
                    | {post.date}
                  </p>
                  <p className="text-grayColor mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blogs/${post.id}`}
                    className="text-blueColor font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
