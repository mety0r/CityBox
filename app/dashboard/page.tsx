'use client';

import * as React from 'react';
import Link from 'next/link';

import Logout from '@/components/Logout';
import { WavyBackground } from '@/components/ui/wavy-background';


// Import content files
import { GettingStartedContent } from '@/contents/gettingStarted';
import { OverviewContent } from '@/contents/overview';
import { FeaturesContent } from '@/contents/features';

export default function SiteHeader() {
  // State to track the active section
  const [activeSection, setActiveSection] = React.useState<string>(''); 

  // Function to change the active section
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <WavyBackground />
      </div>

      

      {/* Navbar */}
      <div className="relative z-20 border-b bg-black/80 backdrop-blur-lg border-zinc-800">
        <header className="flex h-16 items-center px-4 md:px-6">
          <Link 
            className="text-2xl font-bold text-white tracking-wider" 
            href="/">
            CityBox.<span className="text-blue-400">_</span>
          </Link>
          <nav className="ml-auto hidden gap-4 md:flex">
            <Logout />
          </nav>
        </header>
      </div>

      {/* Sidebar */}
      <aside className="relative z-20 bg-black text-white w-48 h-screen pt-16 backdrop-blur-lg">
        <nav className="flex flex-col space-y-4 p-4">
        <Link 
            href="#"
            className="hover:text-blue-400"
            onClick={() => handleSectionClick('features')}
          >
            Features
          </Link>
          <Link 
            href="#"
            className="hover:text-blue-400"
            onClick={() => handleSectionClick('gettingStarted')}
          >
            Getting Started
          </Link>
          <Link 
            href="#"
            className="hover:text-blue-400"
            onClick={() => handleSectionClick('overview')}
          >
            Overview
          </Link>
          
        </nav>
      </aside>

      {/* Main Content Display */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10 text-white max-w-4xl">
        {activeSection === 'gettingStarted' && <GettingStartedContent />}
        {activeSection === 'overview' && <OverviewContent />}
        {activeSection === 'features' && <FeaturesContent />}
      </div>
    </div>
  );
}
