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
  const updateNewText = (text) => {
    props.state.profilePage.NewTextInput = text;
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Nav />
        <Routes>
          <Route path="/Profile" element={<Profile postsData={props.postsData} profilePage={props.state.profilePage} addPost={props.addPost} updateNewText={updateNewText} />} />
          <Route path="/Dialogs" element={<Dialogs postsData={props.postsData} state={props.state.dialogsPage} />} />
          <Route path="/Music" element={<Music postsData={props.postsData} />} />
          <Route path="/News" element={<News postsData={props.postsData} />} />
          <Route path="/Friends" element={<Friends postsData={props.postsData} />} />
          <Route path="/Settings" element={<Settings postsData={props.postsData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;