import buisness from "../assets/buisness.jpg"
import development from "../assets/development.jpg"
import software from "../assets/software.jpg"
const navbarData = [
    { name: "Business" },
    { name: "Design" },
    { name: "Photography & Video" },
    { name: "Development" },
    { name: "Marketing" },
    { name: "IT & Software" },
    { name: "Personal Development" }
];

const cardData = [
    {
        id: 1,
        category: "Business",
        title: "Kinetic Typography in After Effects",
        instructor: "Phil Ebiner",
        rating: 4.7,
        price: "$49.99",
        image:buisness
    },
    {
        id: 2,
        category: "Business",
        title: "Building a Business Website with WordPress",
        instructor: "Daniel Carter",
        rating: 4.7,
        price: "$59.99",
        image:buisness
    },
    {
        id: 3,
        category: "Business",
        title: "Entrepreneurship 101: Starting Your Own Business",
        instructor: "Nancy Shaw",
        rating: 4.5,
        price: "$39.99",
        image:buisness
    },
    {
        id: 4,
        category: "Design",
        title: "Adobe Illustrator For Beginners",
        instructor: "Chris Parker",
        rating: 4.7,
        price: "$54.99",
        image: development
    },
    {
        id: 5,
        category: "Design",
        title: "Photoshop for Beginners",
        instructor: "James Walker",
        rating: 4.6,
        price: "$54.99",
        image: development
    },
    {
        id: 6,
        category: "Design",
        title: "UX/UI Design Masterclass",
        instructor: "Emily Roberts",
        rating: 4.8,
        price: "$79.99",
        image: development
    },
    {
        id: 7,
        category: "Photography & Video",
        title: "Mastering DSLR Photography",
        instructor: "Sarah Lee",
        rating: 4.5,
        price: "$49.99",
        image: software
     },
    {
        id: 8,
        category: "Photography & Video",
        title: "Creating Stunning Visuals for Instagram",
        instructor: "David Miller",
        rating: 4.5,
        price: "$49.99",
        image: development
    },
    {
        id: 9,
        category: "Photography & Video",
        title: "Video Editing with Final Cut Pro",
        instructor: "Ethan James",
        rating: 4.6,
        price: "$59.99",
        image: development
    },
    {
        id: 10,
        category: "Development",
        title: "Web Development Bootcamp",
        instructor: "Olivia Parker",
        rating: 4.8,
        price: "$69.99",
        image: development
    },
    {
        id: 11,
        category: "Development",
        title: "JavaScript for Beginners",
        instructor: "Emma Brown",
        rating: 4.7,
        price: "$45.99",
        image: development
    },
    {
        id: 12,
        category: "Development",
        title: "LEED Green Associate V4 Exam Preparation",
        instructor: "Karim Elnabawy Balbaa",
        rating: 4.4,
        price: "$39.99",
        image: development
    },
    {
        id: 13,
        category: "Marketing",
        title: "SEO Mastery: Learn SEO for Business Growth",
        instructor: "Anna Green",
        rating: 4.8,
        price: "$59.99",
        image: development
    },
    {
        id: 14,
        category: "Marketing",
        title: "Facebook Ads for Beginners",
        instructor: "Lisa Adams",
        rating: 4.6,
        price: "$49.99",
        image: buisness
    },
    {
        id: 15,
        category: "Marketing",
        title: "Content Marketing Strategy",
        instructor: "David Thompson",
        rating: 4.7,
        price: "$55.99",
        image: software
    },
    {
        id: 16,
        category: "IT & Software",
        title: "Machine Learning with Python",
        instructor: "George Williams",
        rating: 4.9,
        price: "$89.99",
        image: development
    },
    {
        id: 17,
        category: "IT & Software",
        title: "Python for Data Science",
        instructor: "David Johnson",
        rating: 4.8,
        price: "$55.99",
        image: buisness
    },
    {
        id: 18,
        category: "IT & Software",
        title: "VSD - Static Timing Analysis",
        instructor: "Kunal Ghosh",
        rating: 4.6,
        price: "$49.99",
        image: development
    },
    {
        id: 19,
        category: "Personal Development",
        title: "Time Management for Success",
        instructor: "John Smith",
        rating: 4.9,
        price: "$39.99",
        image: software
    },
    {
        id: 20,
        category: "Personal Development",
        title: "Overcoming Procrastination",
        instructor: "Rachel Green",
        rating: 4.8,
        price: "$39.99",
        image: software
    },
    {
        id: 21,
        category: "Personal Development",
        title: "Public Speaking Mastery",
        instructor: "Mark Johnson",
        rating: 4.7,
        price: "$49.99",
        image: "https://via.placeholder.com/300x200?text=Personal+Development+Course"
    }
];

export { navbarData, cardData };
