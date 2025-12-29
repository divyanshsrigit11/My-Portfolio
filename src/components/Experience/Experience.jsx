import React from 'react';

const Experience = () => {
  return (
    <div
      id="Experience"
      className="text-white bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 my-10"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Experience</h1>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8">

        {/* Internship Experience */}
        <ExperienceCard
          company="Softpro India"
          role="Web Development Intern"
          duration="July 2025 – Present"
          description={[
            'Working on real-time web applications using React.js, Node.js, and Express.js',
            'Contributed to front-end module development, integrated APIs, and fixed production UI bugs.',
            'Collaborated with senior developers, participated in sprint planning and code reviews.',
          ]}
        />

      </div>
    </div>
  );
};

// Reusable Experience Card Component
const ExperienceCard = ({ company, role, duration, description }) => (
  <div className="bg-zinc-900 rounded-xl shadow-md p-6 w-full md:w-[45%] lg:w-[30%]">
    <h2 className="text-lg md:text-xl font-bold mb-1">{role}</h2>
    <p className="text-sm md:text-base text-gray-400 font-medium">{company}</p>
    <p className="text-xs md:text-sm text-gray-500 mb-3">{duration}</p>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default Experience;