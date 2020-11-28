
const fetch = require('node-fetch');
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    dictionarySend=(word)=>{
       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res => res.json()).then(json =>{
       
       json[0]["meanings"].map((meaning,index) =>{ 
        this.addMessageToBotState(this.createChatBotMessage(`Parts of Speech:${meaning.partOfSpeech}
        ===============
        Definitions: ${meaning.definitions[0].definition}
       
        `)) 
      
        return meaning
      })}
       );     
      
    }

    wikiSend=(word)=>{
      
      fetch( `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&formatversion=2&exintro&explaintext&redirects=1&titles=${word}`).then(res => res.json()).then(json =>
      {
        let getData = json["query"]["pages"]
      
      let keys = Object.keys(getData)
      
      this.addMessageToBotState(this.createChatBotMessage(getData[keys]["extract"]))
      }
      )
     
   }

   defaultMessage = () =>{
    const message = this.createChatBotMessage("Please try again", {
      withAvatar: true,
    });
    
    this.addMessageToBotState(message)
   }




    handleDefault = (name) => {
      fetch('https://api.dictionaryapi.dev/api/v2/entries/en/').then(res => res.json()).then(json => console.log(json));
      
      
      const message = this.createChatBotMessage(name, {
          withAvatar: true,
        });
        
        this.addMessageToBotState(message)
      };
      // this will add the component 
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