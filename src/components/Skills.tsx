import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JS', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TS', color: 'from-blue-400 to-blue-600' },
    { name: 'React', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Tailwindcss', color: 'from-teal-400 to-teal-600' },
    { name: 'Premierepro', color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-8 border border-gray-700 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold border-b border-gray-600 pb-2 mb-6 text-white">
        <span className="text-blue-400">Tech Skill</span>
      </h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 