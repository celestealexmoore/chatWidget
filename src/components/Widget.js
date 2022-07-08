import { useState } from "react";
import "../css-styles/widget.css";
import { BsChatDotsFill } from "react-icons/bs";
import ChatCard from "./ChatCard";

function Widget() {
  const [displayChatCard, setDisplayChatCard] = useState(false);

  function showChatCard() {
    setDisplayChatCard(!displayChatCard);
  }

  return (
    <div className="widgetParent">
      <ChatCard
        visible={displayChatCard}
        setDisplayChatCard={setDisplayChatCard}
      />
      <div onClick={showChatCard} className="chatWidget">
        <div className="icon">
          <BsChatDotsFill size={50} />
        </div>
      </div>
    </div>
  );
}

export default Widget;
