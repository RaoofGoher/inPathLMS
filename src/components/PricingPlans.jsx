import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Checkmark icon for features
import { FaFire } from "react-icons/fa"; // Popular plan icon
import { Link } from "react-router-dom";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$19/month",
      yearlyPrice: "$190/year", // Yearly price added for Basic Plan
      features: [
        "Access to all courses",
        "Community support",
        "Limited customization",
      ],
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "$39/month",
      yearlyPrice: "$390/year", // Yearly price added for Pro Plan
      features: [
        "All Basic Plan features",
        "Advanced reporting",
        "Customizable courses",
        "Priority support",
      ],
      isPopular: true,
    },
    {
      name: "Premium Plan",
      price: "$59/month",
      yearlyPrice: "$590/year", // Yearly price added for Premium Plan
      features: [
        "All Pro Plan features",
        "Unlimited courses",
        "Dedicated support",
        "Exclusive content",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center font-bold mb-6 text-blueColor">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl ${
                plan.isPopular ? "bg-blueColor " : "bg-white"
              }`}
              style={{
                border: plan.isPopular ? "4px solid #00438D" : "2px solid #E5E7EB", // Highlight popular plan
              }}
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
                {plan.isPopular && (
                  <FaFire className="mr-2 text-xl font-bold text-blueColor/90" />
                )}
                {plan.name}
              </h3>

              {/* Monthly Price */}
              <p
                className={`text-lg font-semibold text-center mb-4 ${
                  plan.isPopular ? "text-white" : "text-blueColor"
                }`}
              >
                {plan.price}
              </p>

              {/* Yearly Price (only for Pro Plan, if applicable) */}
              {plan.yearlyPrice && (
                <p className="text-sm text-center mb-4 text-light3 line-through">
                  {plan.yearlyPrice}
                </p>
              )}

              {/* Features */}
              <ul className="mb-6 text-center">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center mb-2 text-dark1 text-sm"
                  >
                    <FaCheckCircle className="mr-2 text-blueColor" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/page-not-found">
              
              <button className="bg-blueColor text-white py-2 px-6 rounded-full w-full hover:bg-blueColor/90 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-opacity-50">
                Get Started
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
