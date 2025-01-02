import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaBitbucket, FaLaravel } from 'react-icons/fa';
import { SiExpress, SiNestjs, SiNextdotjs } from "react-icons/si";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
const Skill = () => {


  return (
    <div className="bg-gray-100 py-6 overflow-hidden" id='skills'>
      <div>
        <h1 className="text-center text-gray-700 text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          My Skills
        </h1>
      </div>
      <div
        className="relative flex py-10 justify-center overflow-hidden whitespace-nowrap"
      >
        <div
          className={`flex items-center  gap-10 transition-transform duration-500`}
        >
          {/* Skill icons with colors */}
          <SkillItem Icon={FaReact} skill="React" color="text-blue-700" />
          <SkillItem Icon={FaNodeJs} skill="Node.js" color="text-green-700" />
          <SkillItem Icon={FaHtml5} skill="HTML5" color="text-orange-600" />
          <SkillItem Icon={FaCss3Alt} skill="CSS3" color="text-blue-700" />
          <SkillItem Icon={FaJs} skill="JavaScript" color="text-yellow-500" />
          <SkillItem Icon={FaGitAlt} skill="Git" color="text-red-500" />
          <SkillItem Icon={FaDatabase} skill="MongoDB" color="text-green-600" />
          <SkillItem Icon={SiNextdotjs} skill="Nextjs" color="text-gray-600" />
          {/* Duplicate items for seamless scroll */}

          <SkillItem Icon={SiExpress} skill="Express" color="text-green-500" />
          <SkillItem Icon={FaBitbucket} skill="Bitbucket" color="text-green-500" />
          <SkillItem Icon={FaLaravel} skill="Laravel" color="text-orange-500" />
          <SkillItem Icon={DiMysql} skill="Mysql" color="text-blue-400" />
          <SkillItem Icon={DiPostgresql} skill="Postgresql" color="text-yellow-500" />
          <SkillItem Icon={RiTailwindCssFill} skill="Tailwind" color="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

// Helper function to get current scroll position
const getScrollPosition = () => {
  const scrollAmount = 10; // Amount to scroll in pixels
  const maxScroll = scrollAmount * 12; // Total scroll amount (adjust based on your icon count)
  const position = (Date.now() / 100) % maxScroll; // Creates a smooth scroll effect
  return position;
};

// Helper component for each skill item
const SkillItem = ({ Icon, skill, color }) => (
  <div className="flex flex-col items-center text-gray-700 min-w-max">
    <Icon size={40} className={`mb-2 ${color}`} /> {/* Apply color class */}
    <span className="text-lg">{skill}</span>
  </div>
);

export default Skill;
