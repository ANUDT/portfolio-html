import React from 'react'; // importing libraries with react components
import ReactDOM from 'react-dom/client'; //will render react components to DOM
import App from './App'; //App will be imported to react app
import './index.css'; //Css will be imported after creating

ReactDOM.createRoot(document.getElementById('root')).render( //API will work in react with better rendering
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);