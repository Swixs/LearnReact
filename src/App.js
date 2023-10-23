import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dialogs" element={<Dialogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;