import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuicon from '../assets/menuicon.svg';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !((event.target as HTMLElement).closest(".menu-container"))) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-container">
      <img 
        
        src={menuicon} 
        alt="Menu icon" 
        onClick={toggleMenu} 
        style={{ width: '40px', height: '40px', position: 'fixed', zIndex: 100 }}

        
      />

      {isOpen && (
        <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          height: '100vh',
          width: '200px',
          backgroundColor: '#1C1919',
          padding: '20px',
          zIndex: 10,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '20px' }}>
              <Link 
                to="/" 
                onClick={toggleMenu} 
                style={{ color: '#EC315A', textDecoration: 'none', fontSize: '18px' }}
              >
                BOOKING
              </Link>
            </li>
            <li>
              <Link 
                to="/confirmation" 
                onClick={toggleMenu} 
                style={{ color: '#EC315A', textDecoration: 'none', fontSize: '18px' }}
              >
                CONFIRMATION
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </div>
  );
};

export default Menu;