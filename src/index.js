import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let text = [
  { id: 1, text: 'Hello my name Nikita', likes : '15 ♡', foto: "https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg" },
  { id: 2, text: 'Do you want work',likes: '3 ♡', foto: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg" },
]

let dialogs = [
  { id: 1, name: 'Lola' },
  { id: 2, name: 'NikitaHi' },
  { id: 3, name: 'Kirill' },
  { id: 4, name: 'Vova' },
  { id: 5, name: 'Vitya' }
]

let message = [
  { id: 1, message: 'Привет ты как?' },
  { id: 2, message: 'ГО дс' },
  { id: 3, message: 'норм' },
  { id: 4, message: 'Офигеть' },
  { id: 5, message: 'Круто' },
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App text={text} message={message} dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
