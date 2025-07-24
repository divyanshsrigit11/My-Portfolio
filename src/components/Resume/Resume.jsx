import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="text-white bg-black min-h-screen p-10 md:p-20">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">My Resume</h1>

      {/* PDF Preview */}
      <div className="flex justify-center mb-10">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full md:w-4/5 h-[600px] rounded-lg shadow-lg border border-gray-700"
        />
      </div>

      {/* Button Group */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          📄 Download Resume
        </a>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700] text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Resume;
