import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`,{
    widget:'wiki'
  })],
  botName: "sparky",
  botAvatar:"S"


}

export default config