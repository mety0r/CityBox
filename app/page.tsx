'use client'
import React from 'react';
import { Sun, Building2, ChartBar, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { LampDemo } from '@/components/ui/lamp';

const LandingPage = () => {
  const creators = [
    {
      name: "Dr. Harish G",
      role: "Mentor",
      image: "/api/placeholder/300/300",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Anika Shetty",
      role: "_____________",
      image: "/api/placeholder/300/300",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Arjun Shastry",
      role: "_____________",
      image: "/api/placeholder/300/300",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Tejesh Reddy",
      role: "_____________",
      image: "/api/placeholder/300/300",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Video Background and Hero Section Wrapper */}
      <div className="relative z-10">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 h-full">
          <video
            className="w-full h-full object-cover opacity-100"
            src="/dash.mp4"
            autoPlay
            loop
            muted
            playsInline
            crossOrigin="anonymous"
          />
        </div>

        {/* Hero Section */}
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
            Building Integrated PV Assessment
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Advanced 3D city modeling for optimal photovoltaic integration analysis and energy performance assessment
          </p>
          <div className="mt-8">
            <Link href="/sign-in" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24">

        
        <div className="relative">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center py-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-8">
              About Our Project
            </h2>
            <div className="flex justify-center">
              <div className="max-w-2xl space-y-6 text-gray-300">
                <p className="text-lg">
                  Our BIPV Assessment tool revolutionizes the way architects and engineers integrate photovoltaic systems into building designs. Using advanced 3D modeling and real-time analysis, we provide comprehensive insights into solar potential and energy performance.
                </p>
                <p className="text-lg">
                  With our state-of-the-art technology, we evaluate factors such as shadowing patterns, optimal panel placement, and expected energy generation to maximize the efficiency of your BIPV implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creators Section */}
<div className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-center mb-16">
      Meet Our Team
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
      {creators.map((creator, index) => (
        <Card
          key={index}
          className="bg-black border border-blue-900 hover:border-blue-600 transition duration-300"
        >
          <CardContent className="p-6">
            <div className="text-center">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-blue-500"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {creator.name}
              </h3>
              <p className="text-blue-400 mb-4">{creator.role}</p>
              <p className="text-gray-300 mb-6">{creator.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={creator.social.github}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={creator.social.linkedin}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={creator.social.twitter}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-black border-t border-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Email</h3>
              <p className="text-gray-300">1da21cs020.cs@drait.edu.in</p>
              <p className="text-gray-300">1da21cs025.cs@drait.edu.in</p>
              <p className="text-gray-300">1da21cs154.cs@drait.edu.in</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Location</h3>
              <p className="text-gray-300">Dr. Ambedkar Institute of Technology</p>
              <p className="text-gray-300">Bangalore, Karnataka 560056</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-900 pt-8 text-center">
            <p className="text-gray-400">© CityBox A-20. Major Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

