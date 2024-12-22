import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownToLine, Sun, Building2, Map, BarChart2, Settings } from 'lucide-react';

export const FeaturesContent = () => {
  const features = [
    {
      title: "Data Collection & Processing",
      description: "Collects high-resolution satellite imagery from multiple sources including Landsat, Cartosat, and ALOS. Processes Digital Surface Models (DSM) and Digital Elevation Models (DEM) for accurate building height calculations.",
      icon: <ArrowDownToLine className="h-6 w-6 text-blue-500" />
    },
    {
      title: "3D Building Modeling",
      description: "Creates Level of Detail 1 (LoD-1) 3D models of buildings using OpenStreetMap data, accurately representing building heights and footprints in the urban landscape.",
      icon: <Building2 className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Shadow Simulation",
      description: "Simulates real-time shadow patterns throughout the day using precise sun position data, accounting for seasonal variations and surrounding structures.",
      icon: <Sun className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Solar Potential Analysis",
      description: "Calculates solar energy potential using Global Horizontal Irradiation (GHI) data, identifying optimal locations for photovoltaic cell placement on building surfaces.",
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Interactive Visualization",
      description: "Provides an interactive 3D map interface for exploring buildings and their solar potential, with customizable parameters for different dates and times.",
      icon: <Map className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Customization Options",
      description: "Allows users to input specific parameters including date, time, and geographical coordinates to customize solar analysis for their needs.",
      icon: <Settings className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Features</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our Building-Integrated Photovoltaics assessment system offers comprehensive tools for analyzing and optimizing solar energy potential in urban environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                {feature.icon}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};