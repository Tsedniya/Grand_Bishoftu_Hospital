import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import ScrollToTop from "./components/ScrollToTop";
import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';
import AdminEditAppointment from './pages/AdminEditAppointment'; 
import AdminPrivateRoute from './components/AdminPrivateRoute';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

        {/* Admin authentication */}
        <Route path='/admin' element={<AdminAuth />} />

        {/* Admin dashboard protected */}
        <Route
          path='/admin/dashboard'
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />

        {/* Admin edit appointment */}
        <Route
          path="/admin/appointments/edit/:id"
          element={
            <AdminPrivateRoute>
              <AdminEditAppointment />
            </AdminPrivateRoute>
          }
        />
      </Routes>

      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;