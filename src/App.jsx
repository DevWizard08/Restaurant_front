import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import OurMenu from './Pages/OurMenu';

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='*' element = {<NotFound />} />
      <Route path='/success' element = {<Success />} />
      <Route path='/menu' element = { <OurMenu />} />
    </Routes>
    <Toaster />
  </Router>
}

export default App