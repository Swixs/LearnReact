import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './components/Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
            store={store}
         />
      </React.StrictMode>,
   )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
   rerenderEntireTree(store.getState())
})

reportWebVitals()
