import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <div>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;


