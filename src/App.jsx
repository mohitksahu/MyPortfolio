/**
 * Main Application Component
 * 
 * This is the root component of the application that handles:
 * - Initial loading state with preloader animation
 * - Transition to the main content once loaded
 * - Overall application structure
 */
import { useState, useEffect } from 'react';
import Routes from './Routes';
import Preloader from './components/common/Preloader';

function App() {
  // Controls visibility of the preloader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up event listener for window load completion
    window.addEventListener('load', () => {
      // Ensure preloader shows for minimum time to complete animation
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });

    // Handle case where window is already loaded when component mounts
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <>
      {/* Preloader shown during initial loading */}
      {loading && <Preloader onLoadComplete={() => setLoading(false)} />}

      {/* Main application with fade-in transition */}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Routes />
      </div>
    </>
  );
}

export default App;