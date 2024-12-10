import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUsers, FaRegThumbsUp } from 'react-icons/fa';

// Images for categories
import instructorImg from '../assets/onboarding-matters.png';  // Replace with actual image path
import programImg from '../assets/onboarding-matters.png';    // Replace with actual image path
import resultsImg from '../assets/onboarding-matters.png';    // Replace with actual image path
import teamImg from '../assets/onboarding-matters.png';        // Replace with actual image path
import leadershipImg from '../assets/onboarding-matters.png'; // Replace with actual image path
import customerServiceImg from '../assets/onboarding-matters.png'; // Replace with actual image path

const CorporateTraining = () => {
  // State to manage selected category, search query, and filtered categories
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Categories data with detailed descriptions and images
  const categories = [
    {
      id: 1,
      name: 'Expert Instructors',
      icon: <FaChalkboardTeacher className="text-xl text-primaryColor mr-3" />,
      image: instructorImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Expert Instructors</h3>
          <p className="text-secondaryColor">
            Our expert instructors bring real-world experience to the classroom, making the learning process practical and engaging.
            They are not just teachers, but mentors who guide your team through each learning phase. With years of experience and industry knowledge, 
            our instructors can provide insight that helps learners directly apply what they have learned to real-life situations.
          </p>
        </>
      ),
    },
    {
      id: 2,
      name: 'Customized Programs',
      icon: <FaUsers className="text-xl text-primaryColor mr-3" />,
      image: programImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Customized Programs</h3>
          <p className="text-secondaryColor">
            We understand that every organization is unique. That’s why we offer fully customizable training programs that can be tailored to 
            meet the specific needs and goals of your company. Whether you're looking for leadership development, technical training, or customer service enhancement, 
            we ensure the content aligns with your business objectives. Each program is flexible, so it works for your team’s exact needs.
          </p>
        </>
      ),
    },
    {
      id: 3,
      name: 'Proven Results',
      icon: <FaRegThumbsUp className="text-xl text-primaryColor mr-3" />,
      image: resultsImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Proven Results</h3>
          <p className="text-secondaryColor">
            Our training programs are designed to achieve measurable outcomes. We track the progress of each participant and monitor improvements 
            to ensure that the training delivers real, tangible results. Whether it’s improved performance, increased sales, or better employee engagement, 
            our clients have seen significant improvements in their business and operational efficiency.
          </p>
        </>
      ),
    },
    {
      id: 4,
      name: 'Team Development',
      icon: <FaUsers className="text-xl text-primaryColor mr-3" />,
      image: teamImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Team Development</h3>
          <p className="text-secondaryColor">
            Our team development programs focus on fostering collaboration, communication, and leadership skills within teams. 
            By enhancing these areas, we help your teams perform more efficiently and work cohesively, driving success for your organization.
          </p>
        </>
      ),
    },
    {
      id: 5,
      name: 'Leadership Training',
      icon: <FaChalkboardTeacher className="text-xl text-primaryColor mr-3" />,
      image: leadershipImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Leadership Training</h3>
          <p className="text-secondaryColor">
            We provide leadership training programs designed to develop key leadership qualities and equip individuals with the necessary skills 
            to lead teams effectively. From communication to strategic thinking, our programs are designed to shape your future leaders and empower them with the right tools.
          </p>
        </>
      ),
    },
    {
      id: 6,
      name: 'Customer Service Excellence',
      icon: <FaUsers className="text-xl text-primaryColor mr-3" />,
      image: customerServiceImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Customer Service Excellence</h3>
          <p className="text-secondaryColor">
            Customer satisfaction is the cornerstone of every successful business. Our customer service training ensures that your team 
            provides exceptional service, resolving issues effectively and turning every interaction into a positive customer experience. 
            We focus on building customer loyalty through personalized and professional service.
          </p>
        </>
      ),
    },
    {
      id: 7,
      name: 'Communication Skills',
      icon: <FaChalkboardTeacher className="text-xl text-primaryColor mr-3" />,
      image: teamImg,
      description: (
        <>
          <h3 className="text-2xl font-semibold text-primaryColor mb-4">Communication Skills</h3>
          <p className="text-secondaryColor">
            Effective communication is essential for success in any organization. We offer training programs to help your team communicate more clearly, confidently, 
            and persuasively in both professional and personal settings. This training helps in reducing misunderstandings and improving team collaboration.
          </p>
        </>
      ),
    },
  ];

  // Filter categories based on search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle category selection
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId); // Toggle category selection
  };

  return (
    <section className="corporate-training bg-lightColor2 py-12 px-6 flex flex-col md:flex-row">
      {/* Sidebar for categories */}
      <div className="w-full md:w-1/4 pr-8 overflow-y-auto" style={{ height: '64vh' }}>
        {/* Desktop Sidebar */}
        <h2 className="text-3xl font-semibold text-secondaryColor mb-4">Training Categories</h2>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Categories..."
          className="w-full p-2 border rounded-lg mb-6 border-lightColor1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul className="space-y-4">
          {filteredCategories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`cursor-pointer flex items-center p-3 rounded-lg hover:bg-lightColor1 transition-all duration-300 ${
                selectedCategory === category.id ? 'bg-lightColor1 text-dark1' : 'text-dark2'
              }`}
            >
              {category.icon}
              <span className="text-lg">{category.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Details */}
      <div className="w-full md:w-3/4 pl-8">
        {selectedCategory ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {categories
              .filter((category) => category.id === selectedCategory)
              .map((category) => (
                <div key={category.id} className="flex">
                  <div className="sm:w-1/2 pr-6">{category.description}</div>
                  <div className="sm:w-1/2 hidden sm:block ">
                    <img src={category.image} alt={category.name} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center text-secondaryColor">
            <p className="text-lg">Please select a category to see details.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CorporateTraining;
