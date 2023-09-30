import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic("c9d109d3-8998-48bb-8f05-888763df6677",props.user.username, props.user.secret);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: "100%"}}/>
    </div>
  );
};

export default ChatsPage;