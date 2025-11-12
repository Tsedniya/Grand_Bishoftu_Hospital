import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services  from './pages/Services'


const PaddedPage = ({ children }) => (
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>{children}</div>
);

const App = () => {
  return (
    <>
      {/* Navbar is always padded */}
      <PaddedPage>
        <Navbar />
      </PaddedPage>

      <Routes>
        {/* Home: full width background */}
        <Route path='/' element={<Home />} />

        {/* About and Contact: inside padding wrapper */}
        <Route path='/about' element={<PaddedPage><About /></PaddedPage>} />
        <Route path='/contact' element={<PaddedPage><Contact /></PaddedPage>} />
        <Route path='/services' element={<PaddedPage>< Services  /></PaddedPage>} />

      </Routes>
      <PaddedPage>
        <Footer/>
      </PaddedPage>

    </>
  );
};

export default App;
