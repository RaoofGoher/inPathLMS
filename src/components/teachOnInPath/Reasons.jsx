import React from 'react';
import Benifits from '../../assets/teachOnInPath/benifits.png';
import Inspire from '../../assets/teachOnInPath/Inspire.png';
import Educate from '../../assets/teachOnInPath/educate.png';
const Reasons = () => {
    const reasons = [
        {
            title: 'Educate your Style',
            description: 'Publish the course you want, in the way you want, and always have control of your own content.',
            image: Educate,
        },
        {
            title: 'Inspire Students',
            description: 'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.',
            image: Inspire,
        },
        {
            title: 'Get benefits',
            description: 'Expand your professional network, build your expertise, and earn money on each paid enrollment.',
            image: Benifits,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8 font-montserrat text-blueColor">Reasons to Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {reasons.map((reason, index) => (
                    <div key={index} className="overflow-hidden">
                        <img src={reason.image} alt={reason.title} className="w-20 h-20 flex m-auto" />
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

