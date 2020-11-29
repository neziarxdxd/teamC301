import { createChatBotMessage } from "react-chatbot-kit";
import SparkyAvatar from './components/Avatar';
import React from 'react';
const config = {
  initialMessages: [createChatBotMessage(`/w for Wikipedia Seach \n /d for Dictionary Search
  \n  Example: /d hello
  `)],
  botName: "sparky",
  customComponents:{
    botAvatar:(props)=><SparkyAvatar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#8aaae5",
    },
    chatButton: {
      backgroundColor: "#8aaae5",
    },
  }


}

export default config