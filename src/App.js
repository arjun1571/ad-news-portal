import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routs';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
