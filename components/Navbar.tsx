"use client";

import { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Project", href: "project" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // // Function to handle the activation of a link.


  return (
    <nav className="sticky top-0  z-50  text-white shadow-lg bg-black bg-opacity-80 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent w-40 mx-auto  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400"
            >
              Tanvir
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                 
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={400}
                  key={item.name}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gradient-to-r from-purple-500 to-orange-400 transition duration-150 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed inset-y-0 left-0 w-64 bg-gray-950  overflow-y-auto z-50"
          >
            <div className="px-4 py-6">
              {/* <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button> */}
              <nav className="mt-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                 
                      className="block px-4 py-2 text-white hover:bg-gray-600 rounded transition duration-150 ease-in-out"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// const Section = () => {
//   // useEffect is used to perform side effects in functional components.
//   // Here, it's used to register scroll events and update scrollSpy when the component mounts.

//   // Rendering the component's JSX.
//   return (
//     <div>
//       {/* Link component to scroll to "test1" element with specified properties */}
//       <Link>Test 1</Link>

//       {/* Other Link and Button components for navigation, each with their unique properties and targets */}
//       {/* ... */}

//       {/* Element components that act as scroll targets */}
//       <Element name="test1" className="element">
//         test 1
//       </Element>
//       <Element name="test2" className="element">
//         test 2
//       </Element>
//       <div id="anchor" className="element">
//         test 6 (anchor)
//       </div>

//       {/* Links to elements inside a specific container */}
//       <Link to="firstInsideContainer" containerId="containerElement">
//         Go to first element inside container
//       </Link>
//       <Link to="secondInsideContainer" containerId="containerElement">
//         Go to second element inside container
//       </Link>

//       {/* Container with elements inside */}
//       <div className="element" id="containerElement">
//         <Element name="firstInsideContainer">
//           first element inside container
//         </Element>
//         <Element name="secondInsideContainer">
//           second element inside container
//         </Element>
//       </div>

//       {/* Anchors to trigger scroll actions */}
//       <a onClick={scrollToTop}>To the top!</a>
//       <br />
//       <a onClick={scrollToBottom}>To the bottom!</a>
//       <br />
//       <a onClick={scrollTo}>Scroll to 100px from the top</a>
//       <br />
//       <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
//     </div>
//   );
// };
