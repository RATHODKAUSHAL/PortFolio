import React, { useState } from 'react';
import Amazon from '../../assets/Amazon-clone.png'
import InsiderJobs from '../../assets/Insider-Jobs.png'
import FleetSathi from '../../assets/FleetSathi.png';
import TruckMeru from '../../assets/TruckMeru.png';
import SnapStore from '../../assets/SnapStore.png';

const Work = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Array of project data with categories
  const projects = [
    {
      id: 1,
      image: Amazon,
      title: 'Amazon',
      description: 'Discover the ultimate online shopping experience with our e-commerce website. Explore',
      link: 'https://amazon-seven-gamma.vercel.app/',
      category: 'E-commerce',
    },
    {
      id: 2,
      image: InsiderJobs,
      title: 'Insider-Jobs',
      description: 'With Insider jobs, you can search millions of jobs online to find the next step in your career.',
      link: 'https://insider-jobs-three.vercel.app/',
      category: 'Services',
    },
    {
      id: 3,
      image: FleetSathi,
      title: 'Fleet-Sathi',
      description: 'Simplify, Manage, and Grow Your Transport Business',
      link: '#',
      category: 'Services',
    },
    {
      id: 4,
      image: TruckMeru,
      title: 'Truck-Meru',
      description: 'A brief description of Project Two',
      link: '#',
      category: 'Services',
    },
    {
      id: 5,
      image: SnapStore,
      title: 'SnapStore',
      description: 'Snapstore An E-commerce Website',
      link: 'https://github.com/RATHODKAUSHAL/SnapStore',
      category: 'E-commerce',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work py-10 bg-white" id='portfolio'>
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-center text-gray-600 text-5xl font-bold mb-6 animate__animated animate__fadeIn">
            My Projects
          </h1>
        </div>
        <div>
          <p className="text-center text-gray-50 text-xl font-mono mb-6 animate__animated animate__fadeIn">
            Explore my recent projects and accomplishments, showcasing my
            expertise and creativity in action.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'All' ? 'bg-[#078D84] text-white' : 'bg-white border-2 border-[#078D84]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('Services')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'Services' ? 'bg-[#078D84] text-white' : 'bg-white border-2 border-[#078D84]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setSelectedCategory('E-commerce')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'E-commerce' ? 'bg-[#078D84] text-white' : 'bg-white border-2 border-[#078D84]'
            }`}
          >
            E-commerce
          </button>
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <a
            href={project.link}
            target='_blank'
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={`${project.title} Thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target='_blank'
                  className="text-blue-600 hover:underline font-semibold"
                >
                  View Project
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
