import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons from React Icons

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-grayColor rounded-md p-4 mb-4 bg-white transition-shadow hover:shadow-md`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="text-lg font-semibold text-dark1">{question}</h3>
        {isOpen ? (
          <FiChevronUp className="w-6 h-6 text-blueColor" />
        ) : (
          <FiChevronDown className="w-6 h-6 text-blueColor" />
        )}
      </div>
      {isOpen && (
        <p className="text-sm mt-2 text-grayColor leading-relaxed transition-opacity duration-300">
          {answer}
        </p>
      )}
    </div>
  );
};

  

const GeneralQuestions = () => {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer:
        'You can create an account by clicking on the "Sign Up" button and filling out the registration form.',
    },
    {
      question: 'Can I access courses offline?',
      answer: 'Currently, our courses are available only online.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept credit/debit cards and PayPal.',
    },
  ];

  return (
    <div id='general-questions'  className="py-8 bg-white mt-8">
      <h2 className="text-3xl font-bold text-blueColor text-center mb-8">
        General Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default GeneralQuestions;
