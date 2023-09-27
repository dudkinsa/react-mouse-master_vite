import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Wirelessly from './components/Wirelessly/Wirelessly';
import Table from './components/Table/Table';
import Devices from './components/Devices/Devices';
import Control from './components/Control/Control';
import Ergonomics from './components/Ergonomics/Ergonomics';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Promo />
        <Routes>
          <Route path="/" element={<Promo />} />
          <Route path="/2" element={2} />
          <Route path="/3" element={3} />
          <Route path="/4" element={4} />
          <Route path="/5" element={5} />
          <Route path="/6" element={6} />
        </Routes>

        <Wirelessly />
        <Table />
        <Devices />
        <Control />
        <Ergonomics />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
