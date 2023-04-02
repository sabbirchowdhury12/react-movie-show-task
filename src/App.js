
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import PreLoader from './Components/PreLoader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // simulate a 3-second loading delay
  }, []);
  return (
    <div>

      {isLoading ? (
        <PreLoader />
      ) :

        <RouterProvider router={router}>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </RouterProvider>
      }
    </div>

  );
}

export default App;
