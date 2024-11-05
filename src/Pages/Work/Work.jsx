import React, { useState } from 'react';
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
      image: FleetSathi,
      title: 'Fleet-Sathi',
      description: 'Simplify, Manage, and Grow Your Transport Business',
      link: '#',
      category: 'Services',
    },
    {
      id: 2,
      image: TruckMeru,
      title: 'Truck-Meru',
      description: 'A brief description of Project Two',
      link: '#',
      category: 'Services',
    },
    {
      id: 3,
      image: SnapStore,
      title: 'SnapStore',
      description: 'Snapstore An E-commerce Website',
      link: 'https://github.com/RATHODKAUSHAL/SnapStore',
      category: 'E-commerce',
    },
    {
      id: 4,
      image: FleetSathi,
      title: 'Project Three',
      description: 'A brief description of Project Three',
      link: '#',
      category: 'Other',
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-center text-white text-5xl font-bold mb-6 animate__animated animate__fadeIn">
            My Projects
          </h1>
        </div>
        <div>
          <p className="text-center text-gray-50 text-xl mb-6 animate__animated animate__fadeIn">
            Explore my recent projects and accomplishments, showcasing my
            expertise and creativity in action.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('Services')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'Services' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setSelectedCategory('E-commerce')}
            className={`px-5 py-3 rounded-full text-lg transition duration-300 ${
              selectedCategory === 'E-commerce' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            E-commerce
          </button>
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
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
                  className="text-blue-600 hover:underline font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
