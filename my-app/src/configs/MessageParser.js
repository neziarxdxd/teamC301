class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      // State represents the chatbot state and is passed 
      // in at initalization. You can use it to read chatbot state
      // inside the messageParser
      this.state = state
    }


  
    parse = (message) => {
      const commandLetter = message.toLowerCase().substring(0,2);
      const searchLetter = message.substring(3, message.length).replace(/\s+/g, ' ').trim();
      // para sa wikipedia ito
      if(commandLetter===`/d`){
        console.log(searchLetter)
        return this.actionProvider.dictionarySend(searchLetter);
      }
      else if (commandLetter===`/w`){
        console.log(searchLetter);
        return this.actionProvider.wikiSend(searchLetter);

      }
      else{
        console.log(searchLetter)
        return this.actionProvider.defaultMessage();
        
      }
     
      
     
    };
  }
  
  export default MessageParser;