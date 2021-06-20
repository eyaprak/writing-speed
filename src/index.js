import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './Contexts/ThemeContext'
import TextInputContextProvider from './Contexts/TextInputContext';

const AppConnector = () => {
  return (
    <ThemeContextProvider>
      <TextInputContextProvider>
        <App />
      </TextInputContextProvider>
    </ThemeContextProvider>
  )
}


ReactDOM.render(<AppConnector />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
