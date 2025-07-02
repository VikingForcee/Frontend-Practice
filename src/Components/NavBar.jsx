import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuButton, setMenuButton] = useState(false);



  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Brand</h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMenuButton(!menuButton)} className="text-gray-700 hover:text-blue-600 hover:bg-amber-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
         {/* Side Small window menu code : Use JS  */}
        {menuButton && (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4
                        transform transition-transform duration-300 ease-in-out
                        ${menuButton ? 'translate-x-0' : '-translate-x-full'}`}
            >
          <button
            onClick={() => setMenuButton(false)}
            className="text-gray-700 hover:text-red-600 mb-4"
          >
            Close ✖
          </button>
          <nav className="flex flex-col space-y-2">
            <a href="#home" onClick={() => setMenuButton(false)}>Home</a>
            <a href="#about" onClick={() => setMenuButton(false)}>About</a>
            <a href="#contact" onClick={() => setMenuButton(false)}>Contact</a>
          </nav>
        </div>
      )}
      </nav>

      {/* Page Sections */}
      <div className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome Home</h2>
            <p className="text-xl">This is the home section of your website</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600">
              Learn more about our company, mission, and values. We are dedicated to 
              providing excellent service and innovative solutions.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600">Custom web solutions for your business</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-600">Beautiful and functional designs</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                <p className="text-gray-600">Expert advice for your projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-screen bg-gray-200 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Portfolio</h2>
            <p className="text-lg text-gray-600">
              Check out our latest projects and see what we can do for you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-8">Get in touch with us for your next project</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Email Us
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Call Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;