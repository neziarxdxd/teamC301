class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      // State represents the chatbot state and is passed 
      // in at initalization. You can use it to read chatbot state
      // inside the messageParser
      this.state = state
    }


  
    parse = (message) => {
      const lowerCase = message.toLowerCase();
      // para sa wikipedia ito
      if (lowerCase.includes("/wiki")) {
        return this.actionProvider.handleMessageParser();
      }
      else if (lowerCase.includes("/wiki")) {
        return this.actionProvider.handleMessageParser();
      }
      else{
      return this.actionProvider.wikiSend(lowerCase);
      }
    };
  }
  
  export default MessageParser;