import React from 'react';
import { Code, PenTool, Users, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { category: 'Technical Skills', items: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'SQL'], icon: Code },
    { category: 'Design Skills', items: ['UI/UX Design', 'Responsive Web Design', 'Figma', 'Adobe XD'], icon: PenTool },
    { category: 'Soft Skills', items: ['Team Collaboration', 'Problem Solving', 'Communication', 'Time Management'], icon: Users },
    { category: 'Certifications', items: ['AWS Certified Developer', 'Google Analytics Certification', 'Scrum Master Certification'], icon: Award },
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Skills & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillSet, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <skillSet.icon className="w-6 h-6 mr-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{skillSet.category}</h3>
            </div>
            <ul className="list-disc list-inside">
              {skillSet.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;