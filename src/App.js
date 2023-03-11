import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routs';
function App() {
  return (
    <div >
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
