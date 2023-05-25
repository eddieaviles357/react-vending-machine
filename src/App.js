import './App.css';
import { BrowserRouter } from 'react-router-dom';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <BrowserRouter>
      <VendingMachine />
    </BrowserRouter>
  );
}

export default App;
