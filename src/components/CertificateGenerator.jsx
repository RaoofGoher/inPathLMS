import React from 'react';

const CertificateGenerator = () => {
  return (
    <section className="py-12 bg-lightColor2">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark1 mb-4">Certificate Generator</h2>
        <p className="text-lg text-dark1 mb-6">
          Generate certificates automatically upon course completion, giving your students a sense of achievement.
        </p>
        <a href="/tools" className="inline-block px-6 py-2 bg-primaryColor text-dark1 rounded-lg hover:bg-lightColor1">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default CertificateGenerator;
