import { useState } from "react";
import "./modules/index.css";
import { BsChatDotsFill } from "react-icons/bs";
import ChatCard from "./components/ChatCard";

function App() {
  const [displayChatCard, setDisplayChatCard] = useState(false);

  function showChatCard() {
    setDisplayChatCard(!displayChatCard);
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
