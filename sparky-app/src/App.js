import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';
import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';
import config from './configs/config';

function App() {
  return (
    <div className="App">
    
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      
    </div>
  );
}




export default App;