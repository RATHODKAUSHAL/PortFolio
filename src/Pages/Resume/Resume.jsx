import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHelmetSafety,
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-gray-800 text-5xl font-bold mb-10 animate__animated animate__fadeIn">
          Resume
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-between px-10 md:px-20 gap-10">
          {/* Experience Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-gray-700 text-4xl font-semibold mb-6 animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faHelmetSafety} /> Experience
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  Jan 2024 - Present
                </h3>
                <p className="text-2xl text-gray-800 font-bold">
                  React Developer
                </p>
                <p className="text-gray-600 mt-2">Maze Technolabs</p>
                <p className="text-gray-600 mt-2 p-2">
                  <ul className="list-disc">
                    <li>
                      Developed a user-centric frontend design using React.js
                      and Tailwind CSS to enhance the user interface and
                      experience
                    </li>
                    <li>
                      Integrated APIs into the frontend with Axios for seamless
                      data retrieval and interaction.
                    </li>
                    <li>
                      Gained hands-on experience in database management,
                      efficiently handling data across multiple applications
                    </li>
                    <li>
                      Contributed to the continuous improvement of development
                      processes, focusing on high code quality, maintainability,
                      and overall performance optimization.
                    </li>
                  </ul>
                </p>
              </div>
              {/* Additional experience items can be added here */}
            </div>
          </div>

          {/* Education Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-gray-700 text-4xl font-semibold mb-6 animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> My
              Education
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  2020 - 2024
                </h3>
                <p className="text-2xl text-gray-800 font-bold">
                  Bachelor of Engineering in Mechanical Engineering
                </p>
                <p className="text-gray-600 mt-2">
                  Government Engineering College, Modasa
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                <h3 className="text-lg font-semibold text-gray-600">
                  2018 - 2020
                </h3>
                <p className="text-2xl text-gray-800 font-bold">
                  Higher Secondary Education
                </p>
                <p className="text-gray-600 mt-2">Gyanda Girls Higher Secondary School</p>
              </div>
              {/* Additional education items can be added here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
