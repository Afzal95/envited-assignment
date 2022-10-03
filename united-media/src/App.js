import { Route, Routes } from 'react-router-dom';
import Create from './pages/create';
import Event from './pages/event';
import Home from './pages/home';
import ("https://fonts.googleapis.com/css?family=Halvetica");

function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/create' element={<Create />} />
      <Route exact path='/event' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
