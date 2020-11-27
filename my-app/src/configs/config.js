import { createChatBotMessage } from "react-chatbot-kit";
import Wiki from  './components/WikiApp';
const config = {
  initialMessages: [createChatBotMessage(`Hello world`,{
    widget:'wiki'
  })],
  botName: "chatbot",
  states:{
    todos:[]
  },
  widgets:[
    {widgetName: "wiki",
    widgetFunc:(props) => <Wiki {...props}/> ,
    mapStateToProps:["wiki"]
    }
  ]
}

export default config