import React from "react";
import { useParams } from "react-router-dom";
import image1 from "../../assets/buisness.jpg";
import image2 from "../../assets/development.jpg";
import image3 from "../../assets/h9.svg";

const blogData = [
  {
    id: 1,
    title: "How to Improve Your Learning Experience",
    author: "John Doe",
    date: "November 12, 2024",
    content: `
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Introduction</h2>
      <p class="text-gray-300 mb-6">Improving your learning experience is essential for both personal and professional growth. In this blog, we'll explore actionable strategies to help you get the most out of your studies.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Effective Time Management</h2>
      <p class="text-gray-300 mb-6">Time management is the cornerstone of a successful learning journey. Start by creating a schedule, setting priorities, and minimizing distractions. Tools like calendars and time-tracking apps can make this process easier.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Adopting Active Learning Techniques</h2>
      <p class="text-gray-300 mb-6">Passive learning, such as reading or listening without engagement, often leads to limited retention. Instead, practice active learning by taking notes, asking questions, and engaging in discussions.</p>

      <h3 class="text-2xl font-semibold text-gray-100 mb-4">Examples of Active Learning:</h3>
      <ul class="list-disc pl-6 text-gray-300 mb-6">
        <li>Creating mind maps to organize your thoughts.</li>
        <li>Teaching concepts to a peer or mentor.</li>
        <li>Practicing problem-solving in real-world scenarios.</li>
      </ul>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Maintaining Consistency</h2>
      <p class="text-gray-300 mb-6">Consistency is the key to building and retaining knowledge. Allocate a dedicated time each day for learning, even if it's just 30 minutes. Over time, this habit compounds into significant progress.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Leveraging Technology</h2>
      <p class="text-gray-300 mb-6">From online courses to educational apps, technology offers an array of tools to enhance your learning. Explore platforms like Coursera, Khan Academy, and others tailored to your field of interest.</p>

      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Conclusion</h2>
      <p class="text-gray-300">By adopting these strategies, you can transform your learning experience into an engaging and rewarding journey. Remember, improvement is a gradual process that requires patience and perseverance.</p>
    `,
    imageUrl: image1,
  },
  {
    id: 2,
    title: "The Future of Online Education",
    author: "Jane Smith",
    date: "November 10, 2024",
    content: `
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Introduction</h2>
      <p class="text-gray-300 mb-6">Online education is evolving rapidly, driven by advancements in technology and the demand for flexible learning solutions. This blog explores the trends shaping the future of education.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Personalized Learning Paths</h2>
      <p class="text-gray-300 mb-6">With AI and machine learning, platforms can tailor content to individual learners' needs. This ensures a customized experience that maximizes efficiency and engagement.</p>

      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Immersive Technologies</h2>
      <p class="text-gray-300 mb-6">Technologies like Virtual Reality (VR) and Augmented Reality (AR) are transforming the way we interact with educational content. Imagine exploring ancient civilizations through VR or conducting science experiments using AR.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Global Accessibility</h2>
      <p class="text-gray-300 mb-6">Online education breaks geographical barriers, offering opportunities to learners in remote areas. Initiatives like low-cost internet and open educational resources play a significant role in this shift.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Conclusion</h2>
      <p class="text-gray-300">The future of online education is exciting and full of possibilities. By embracing these trends, educators and learners can create a more inclusive and effective learning environment.</p>
    `,
    imageUrl: image2,
  },
  {
    id: 3,
    title: "Top 10 Tips for Students to Stay Motivated",
    author: "Michael Brown",
    date: "November 5, 2024",
    content: `
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Introduction</h2>
      <p class="text-gray-300 mb-6">Staying motivated as a student can be challenging. In this blog, we share practical tips to help you stay on track and achieve your academic goals.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Set Clear Goals</h2>
      <p class="text-gray-300 mb-6">Define what you want to accomplish. Clear and specific goals provide direction and purpose, making it easier to stay motivated.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Break Tasks into Smaller Steps</h2>
      <p class="text-gray-300 mb-6">Large tasks can be overwhelming. Breaking them into smaller, manageable steps helps you make steady progress without feeling discouraged.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Reward Yourself</h2>
      <p class="text-gray-300 mb-6">Celebrate small victories to keep your spirits high. Whether it's a short break, a treat, or a fun activity, rewards reinforce positive behavior.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Find a Support System</h2>
      <p class="text-gray-300 mb-6">Connect with peers, mentors, or study groups who can provide encouragement and accountability. A strong support system makes a significant difference.</p>
      
      <h2 class="text-3xl font-semibold text-gray-100 mb-4">Conclusion</h2>
      <p class="text-gray-300">Motivation is key to academic success. By implementing these tips, you can overcome challenges and maintain a positive outlook on your studies.</p>
    `,
    imageUrl: image3,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="text-center py-16">Blog not found!</div>;
  }

  return (
    <div className="py-16 bg-primaryColor text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-6">{blog.title}</h1>
        <p className="text-lg text-gray-400 text-center mb-6">
          By {blog.author} | {blog.date}
        </p>
        <div className="mb-8">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <article
          className="prose prose-invert prose-lg max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
