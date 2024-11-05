import React from 'react';
import FleetSathi from '../../assets/FleetSathi.png'; // Add paths for other images as needed
import TruckMeru from '../../assets/TruckMeru.png'
import SnapStore from '../../assets/SnapStore.png'

const Work = () => {
  // Array of project data
  const projects = [
    {
      id: 1,
      image: FleetSathi,
      title: 'Fleet-Sathi',
      description: 'Simplify, Manage, and Grow Your Transport Business',
      link: '#',
    },
    {
      id: 2,
      image: TruckMeru, // Replace with actual image paths
      title: 'Truck-Meru',
      description: 'A brief description of Project Two',
      link: '#',
    },
    {
      id: 3,
      image: SnapStore, // Replace with actual image paths
      title: 'SnapStore',
      description: 'Snapstore An E-commerce Website',
      link: 'https://github.com/RATHODKAUSHAL/SnapStore',
    },
    {
      id: 4,
      image: FleetSathi, // Replace with actual image paths
      title: 'Project Three',
      description: 'A brief description of Project Three',
      link: '#',
    },
    // Add more project objects as needed
  ];

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
          <button className="px-5 py-3 rounded-full bg-gray-900 text-white text-lg hover:bg-gray-700 transition duration-300">
            All
          </button>
          <button className="px-5 py-3 rounded-full bg-gray-900 text-white text-lg hover:bg-gray-700 transition duration-300">
            Services
          </button>
          <button className="px-5 py-3 rounded-full bg-gray-900 text-white text-lg hover:bg-gray-700 transition duration-300">
            E-commerce
          </button>
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
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
