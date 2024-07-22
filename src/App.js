
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Collabs from './pages/Collabs';
import Communities from './pages/Communities';
import Companies from './pages/Companies';
import Creators from './pages/Creators';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='main-layout'>
          <div className='sidebar'>
            <Navbar />
          </div>
          <div className='main-page'>
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/creators' element={<Creators />} />
              <Route path='/communities' element={<Communities />} />
              <Route path='/companies' element={<Companies />} />
              <Route path='/campaigns' element={<Campaigns />} />
              <Route path='/collabs' element={<Collabs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
