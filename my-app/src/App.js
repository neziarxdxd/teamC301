import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './configs/ActionProvider';
import MessageParser from './configs/MessageParser';
import config from './configs/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}




export default App;