import React, { useState } from 'react';
import react from '../../assets/react.png'
import nextjs from '../../assets/nextjs.png'
import HTML from '../../assets/HTML5.png'
import Css from '../../assets/CSS.png'
import TS from '../../assets/TS.jpeg'
import VUE from '../../assets/VUE.png'
import Redux from '../../assets/Redux.png'
import JS from '../../assets/JS.png'
import Nodejs from '../../assets/Nodejs.png'
import Express from '../../assets/Express.png'
import MongoDB from '../../assets/MongoDB.png'
import MySQL from '../../assets/Mysql.png'
import PostgreSQL from '../../assets/Postgresql.png'
import Postman from '../../assets/Postman.png'
import laravel from '../../assets/laravel.png'

const Skill = () => {
  const [activeSection, setActiveSection] = useState('Frontend');

  const frontendSkills = [
    { name: 'React', icon: react },
    { name: 'Next JS', icon: nextjs },
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: Css },
    { name: 'TypeScript', icon: TS },
    { name: 'Vue.js', icon: VUE },
    { name: 'Redux', icon: Redux },
    { name: 'JS', icon: JS },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: Nodejs },
    { name: 'Express.js', icon: Express },
    { name: 'Laravel', icon: laravel },
  ];

  const mobileSkills = [
    { name: 'React Native', icon: react },
  ];

  const database = [
    { name: 'MongoDB', icon: MongoDB },
    { name: 'MySQL', icon: MySQL },
    { name: 'PostgreSQL', icon: PostgreSQL },
  ];

  const AutomationTesting = [
    { name: 'Postman', icon: Postman },
  ];

  const handleSectionToggle = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  };

  const renderSkills = () => {
    switch (activeSection) {
      case 'Frontend':
        return frontendSkills;
      case 'Backend':
        return backendSkills;
      case 'Mobile Application Development':
        return mobileSkills;
      case 'Database':
        return database;
      case 'Automation Testing':
        return AutomationTesting;
      default:
        return [];
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center m-10 text-3xl font-bold'>
        <h2>Skills</h2>
      </div>
      <div className="flex mx-40 mb-10 bg-white rounded-md">
      
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-50 border-r p-4">
        <ul className="space-y-4">
          <li
            className={`text-lg font-semibold text-gray-700 cursor-pointer ${activeSection === 'Frontend' ? 'bg-green-200 p-2 rounded-md' : ''}`}
            onClick={() => handleSectionToggle('Frontend')}
          >
            Frontend
          </li>
          <li
            className={`text-lg font-semibold text-gray-700 cursor-pointer ${activeSection === 'Backend' ? 'bg-green-200 p-2 rounded-md' : ''}`}
            onClick={() => handleSectionToggle('Backend')}
          >
            Backend
          </li>
          <li
            className={`text-lg font-semibold text-gray-700 cursor-pointer ${activeSection === 'Mobile Application Development' ? 'bg-green-200 p-2 rounded-md' : ''}`}
            onClick={() => handleSectionToggle('Mobile Application Development')}
          >
            Mobile Application Development
          </li>
          <li
            className={`text-lg font-semibold text-gray-700 cursor-pointer ${activeSection === 'Database' ? 'bg-green-200 p-2 rounded-md' : ''}`}
            onClick={() => handleSectionToggle('Database')}
          >
            Database
          </li>
          <li
            className={`text-lg font-semibold text-gray-700 cursor-pointer ${activeSection === 'Automation Testing' ? 'bg-green-200 p-2 rounded-md' : ''}`}
            onClick={() => handleSectionToggle('Automation Testing')}
          >
            Automation Testing
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 ">
        <h1 className="text-2xl font-bold mb-6">{activeSection}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderSkills().map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4"
            >
              <img className="w-20" src={skill.icon} alt="" />
             
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
};

export default Skill;
