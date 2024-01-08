// App.js
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Nav />
        <Routes>
          <Route path="/Profile" element={<Profile profilePage={props.state.profilePage} 
            dispatch={props.dispatch}/>} />
          <Route path="/Dialogs" element={<Dialogs store={props.store}/>} />
          <Route path="/Music" element={<Music />} />
          <Route path="/News" element={<News />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
