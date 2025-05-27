import { useState, useEffect } from 'react';
import Routes from './Routes';
import Preloader from './components/common/Preloader';

function App() {
  const [loading, setLoading] = useState(true);  // Add useEffect to handle page load status
  useEffect(() => {
    // Add an event listener for when the window is fully loaded
    window.addEventListener('load', () => {
      // Set a minimum delay to ensure preloader shows for at least 5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });

    // If window already loaded, start preloader timeout
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }

    return () => {
      window.removeEventListener('load', () => {
        setLoading(false);
      });
    };
  }, []);

  return (
    <>
      {loading && <Preloader onLoadComplete={() => setLoading(false)} />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Routes />
      </div>
    </>
  );
}

export default App;