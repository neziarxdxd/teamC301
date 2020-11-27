import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`,{
    widget:'wiki'
  })],
  botName: "chatbot",


}

export default config