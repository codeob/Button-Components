import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaHome, FaCog, FaChartBar, FaUser, FaRocket } from 'react-icons/fa';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pages = [
    { path: '/dashboard/getstarted', icon: <FaHome />, label: 'Get Started' },
    { path: '/dashboard/simplebutton', icon: <FaCog />, label: 'Simple Button' },
    { path: '/dashboard/juniorbutton', icon: <FaChartBar />, label: 'Junior Button' },
    { path: '/dashboard/midbutton', icon: <FaUser />, label: 'Mid Button' },
    { path: '/dashboard/advancedbutton', icon: <FaRocket />, label: 'Advanced Button' },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsCollapsed(false);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white h-12 flex items-center justify-between px-4 z-50">
        <button
          className="p-2 rounded-full"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white border-r-4 border-blue-500/30 rounded-r-3xl transition-all duration-300
          ${isCollapsed ? 'w-16' : 'w-64'} 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 fixed md:static z-40 top-12 md:top-0 h-[calc(100vh-3rem)] md:h-screen`}
      >
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <h1 className="text-xl font-bold">Dashboard</h1>}
          <button
            className="p-2 hidden md:block"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
          </button>
        </div>
        <nav className="mt-4">
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                `flex items-center p-4 hover:bg-blue-500/20 transition-colors ${
                  isActive ? 'bg-blue-500/50' : ''
                }`
              }
              onClick={closeMobileMenu}
            >
              <span className="text-xl">{page.icon}</span>
              {!isCollapsed && <span className="ml-4">{page.label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}