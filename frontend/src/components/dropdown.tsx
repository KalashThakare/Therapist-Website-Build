"use client";

import React, { useState, ReactNode, useEffect } from 'react';

// Types for the dropdown components
interface DropdownItem {
  title: string;
  description: string;
  onClick: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

interface ServicesDropdownProps {
  onNavigate: (path: string) => void;
}

interface AreasDropdownProps {
  onNavigate: (path: string) => void;
}

// Base Dropdown Component
export const Dropdown: React.FC<DropdownProps> = ({ trigger, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative">
        {trigger}
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible -translate-y-2">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {trigger}
      
      <div className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      } ${className}`}>
        {children}
      </div>
    </div>
  );
};

// Services Dropdown Component
export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const servicesItems: DropdownItem[] = [
    {
      title: "Individual Counseling in Richmond, VA",
      description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
      onClick: () => onNavigate('/services/individual-counceling')
    },
    {
      title: "Couples Counseling in Richmond, VA", 
      description: "Heal Your Relationship, Grow Closer to God Together in Richmond.",
      onClick: () => onNavigate('/services/couple-counceling')
    }
  ];

  const handleServicesClick = () => {
    if (mounted) {
      onNavigate('/services');
    }
  };

  const handleItemClick = (onClick: () => void) => {
    if (mounted) {
      onClick();
    }
  };

  if (!mounted) {
    return (
      <div className="relative">
        <button
          className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
          suppressHydrationWarning
        >
          <span>Services</span>
        </button>
        <div className="absolute top-full left-0 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible -translate-y-2">
          <div className="grid grid-cols-2 p-4 space-y-4">
            {servicesItems.map((item, index) => (
              <button
                key={index}
                className="block group text-left"
                suppressHydrationWarning
              >
                <div className="p-3 rounded-lg hover:bg-[#bddade] transition-colors duration-200">
                  <h3 className="font-semibold text-gray-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
        onClick={handleServicesClick}
        suppressHydrationWarning
      >
        <span>Services</span>
      </button>

      <div className={`absolute top-full left-0 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      }`}>
        <div className="grid grid-cols-2 p-4 space-y-4">
          {servicesItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item.onClick)}
              className="block group text-left"
              suppressHydrationWarning
            >
              <div className="p-3 rounded-lg hover:bg-[#bddade] transition-colors duration-200">
                <h3 className="font-semibold text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Areas Dropdown Component
export const AreasDropdown: React.FC<AreasDropdownProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const areasItems: DropdownItem[] = [
    {
      title: "Richmond, VA",
      description: "Richmond is known for its rich Civil War history, the James River rapids,...",
      onClick: () => onNavigate('/services')
    },
    {
      title: "Mechanicsville, VA",
      description: "Mechanicsville is known for its Civil War battlefields and suburban...",
      onClick: () => onNavigate('/services')
    },
    {
      title: "East Highland Park, VA",
      description: "East Highland Park is a residential suburb directly east of downtown...",
      onClick: () => onNavigate('/services')
    },
    {
      title: "Ashland, VA",
      description: "Ashland is home to Randolph-Macon College and features a charming...",
      onClick: () => onNavigate('/services')
    },
    {
      title: "Lakeside, VA",
      description: "Lakeside sits just east of Richmond and is known for its proximity to maj...",
      onClick: () => onNavigate('/services')
    },
    {
      title: "Short Pump, VA",
      description: "Short Pump is a major shopping and dining district in western Henrico...",
      onClick: () => onNavigate('/services')
    }
  ];

  const handleLocationsClick = () => {
    if (mounted) {
      onNavigate('/locations');
    }
  };

  const handleItemClick = (onClick: () => void) => {
    if (mounted) {
      onClick();
    }
  };

  const renderAreasGrid = () => {
    const midpoint = Math.ceil(areasItems.length / 2);
    const leftColumn = areasItems.slice(0, midpoint);
    const rightColumn = areasItems.slice(midpoint);

    return (
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          {leftColumn.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item.onClick)}
              className="block group text-left w-full"
              suppressHydrationWarning
            >
              <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                <h4 className="font-semibold text-gray-800 text-md">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {rightColumn.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item.onClick)}
              className="block group text-left w-full"
              suppressHydrationWarning
            >
              <div className="hover:bg-[#bddade] p-2 rounded transition-colors duration-200">
                <h4 className="font-semibold text-gray-800 text-md">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className="relative">
        <button
          className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
          suppressHydrationWarning
        >
          <span>Areas Served</span>
        </button>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible -translate-y-2">
          <div className="p-6">
            {renderAreasGrid()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 font-medium"
        onClick={handleLocationsClick}
        suppressHydrationWarning
      >
        <span>Areas Served</span>
      </button>

      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-150 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      }`}>
        <div className="p-6">
          {renderAreasGrid()}
        </div>
      </div>
    </div>
  );
};