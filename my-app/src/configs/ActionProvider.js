
import React, {useState,useEffect} from 'react';
const fetch = require('node-fetch');
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    wikiSend=(name)=>{
       fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello').then(res => res.json()).then(json =>  this.addMessageToBotState(this.createChatBotMessage(
        json[0]["meanings"][0]["definitions"][0]["definition"]
       )));
      
      
      
    }
    

    
    


    handleDefault = (name) => {
      fetch('https://api.dictionaryapi.dev/api/v2/entries/en/').then(res => res.json()).then(json => console.log(json));
      
      
      const message = this.createChatBotMessage(name, {
          withAvatar: true,
        });
        
        this.addMessageToBotState(message)
      };
      //
      addMessageToBotState = (messages) => {
        if (Array.isArray(messages)) {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, ...messages],
          }));
        } else {
          this.setState((state) => ({
            ...state,
            messages: [...state.messages, messages],
          }));
        }
      };
  }
  
  export default ActionProvider;