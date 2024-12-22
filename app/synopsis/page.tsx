'use client'
import { useState } from 'react';

export default function ProjectSynopsis() {
  const [activeSection, setActiveSection] = useState('abstract');

  const sections = {
    abstract: {
      title: 'Abstract',
      content: `The use of fossil fuels for energy generation has led to significant pollution and depletion of natural resources. One of the main barriers to the adoption of renewable energy, particularly photovoltaic (PV) cells, is their low efficiency, especially in urban environments. In cities, the presence of tall buildings and crowded neighbourhoods often creates shadows, reducing the amount of solar energy that can be harnessed. To address this challenge, this project focuses on determining the maximum solar energy potential of building surfaces in urban areas. It aims to identify optimal and suboptimal locations for placing PV cells. The solution utilises satellite imagery from sources like Landsat or Cartosat, combined with shadow simulations based on building heights and the sun's position. By utilising date, time, and Global Horizontal Irradiation data, we visualise the real-time energy potential on city models. This tool helps both builders and owners of existing structures to harness the maximum solar potential for their buildings.`
    },
    introduction: {
      title: 'Introduction',
      content: `In today's world of Rapid Development, the rise of energy consumption has massively been on the rise. In 2024, India stands as one of the top global CO2 emitters with a value of 2.88 billion metric tons. The massive upscale in demand for renewable energy and drive towards low carbon energy sources have led to an investment into photovoltaic solar energy facilities.`
    },
    objectives: {
      title: 'Objectives',
      content: `1. Identify Relevant Datasets
2. Create a LoD-1 (Level of Detail 1) Building Model
3. Simulate Shadows
4. Calculate Solar Energy Potential
5. Identify Optimal Locations for PV Cells`
    },
    methodology: {
      title: 'Methodology',
      content: `Our approach includes:
- Data Collection from satellite imagery and digital models
- Creation of LoD-1 3D Building Models
- Shadow Simulation using sun position data
- Solar Energy Potential Calculation
- Integration into a Web Application`
    },
    applications: {
      title: 'Applications',
      content: `1. Urban Planning and Smart Cities
2. Architectural Design
3. Retrofitting Existing Buildings`
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold">CityBox._</h1>
        
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Navigation Sidebar */}
          <nav className="md:w-1/4">
            <div className="bg-white rounded-lg shadow p-4">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full text-left px-4 py-2 rounded mb-2 text-black ${
                    activeSection === key
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="md:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">
                {sections[activeSection as keyof typeof sections].title}
              </h2>
              <div className="prose max-w-none text-black">
                {sections[activeSection as keyof typeof sections].content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </main>
        </div>

        <footer className="mt-8 text-center text-black">
        <p className="text-gray-400">© CityBox A-20. Major Project. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}