import React from 'react';

const Reasons = () => {
    const reasons = [
        {
            title: 'Educate your Style',
            description: 'Publish the course you want, in the way you want, and always have control of your own content.',
            image: 'path/to/your/image1.jpg',
        },
        {
            title: 'Inspire Students',
            description: 'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.',
            image: 'path/to/your/image2.jpg',
        },
        {
            title: 'Get benefits',
            description: 'Expand your professional network, build your expertise, and earn money on each paid enrollment.',
            image: 'path/to/your/image3.jpg',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">So many reasons to start</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {reasons.map((reason, index) => (
                    <div key={index} className="overflow-hidden">
                        <img src={reason.image} alt={reason.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                            <p className="text-gray-700">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reasons;

