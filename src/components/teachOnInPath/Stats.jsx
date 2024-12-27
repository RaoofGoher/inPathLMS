import React from 'react';

const Stats = () => {
    const stats = [
        { value: '73M', label: 'Students' },
        { value: '75+', label: 'Languages' },
        { value: '1B', label: 'Enrollments' },
        { value: '180+', label: 'Countries' },
        { value: '16,000+', label: 'Enterprise customers' },
    ];

    return (
        <div className="bg-blueColor py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-white">
                        Our Impact
                    </h2>
                </div>
                <div className="mt-10">
                    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 text-white">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
                                    {stat.label}
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-white">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Stats;