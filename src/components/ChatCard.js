import { useState } from "react";
import "../modules/chatCard.css";
import { GrFormClose } from "react-icons/gr";
import avatar from "../assets/photos/avatar.jpg";
const moment = require("moment");
moment().format();

export default function ChatCard(props) {
  const responses = [
    "Follow this link to cook up something nice!",
    "You can view the books I've offered <here>.",
    "Let's connect on <LinkedIn>!",
  ];

  const userFeedback = [
    "I'm looking for a specific recipe",
    "I want to see the books you've written",
    "I just want to chat",
  ];

  const [feedback, setFeedback] = useState(false);

  function switchFeedback() {
    setFeedback(!feedback);
  }

  if (props.visible) {
    setTimeout(hideBubbles, 5000);
  };

  function hideBubbles() {
    document.getElementById("animatedChatBubbles").style.display = "none";
    document.getElementById("hostGreeting").style.display = "block";
  }

  return (
    <div
      style={{ visibility: props.visible ? "visible" : "hidden" }}
      className="chatCardComponent"
    >
      <div className="cardParent">
        <div className="cardTop">
          <img className="headerImg" src={avatar} alt="Image of host" />
          <div className="headerInfo">
            <h3 className="name">Celeste Moore</h3>
            <p className="replyTime">Typically replies within a day</p>
          </div>
          <div
            onClick={() => props.setDisplayChatCard(false)}
            className="closeIcon"
          >
            <GrFormClose size={25} />
          </div>
        </div>

        <div className="cardBottom">
          <div className="currentTime">{moment().format("h:mm")}</div>
          <div className="hostGreetingParent">
            <img className="textImg" src={avatar} alt="Image of host" />

            <div id="animatedChatBubbles">
              <div id="textBubbles">
                <div className="bubbles bubble1"></div>
                <div className="bubbles bubble2"></div>
                <div className="bubbles bubble3"></div>
              </div>
            </div>

            <div id="hostGreeting">Hi there 🤗</div>
          </div>

          {feedback ? (
            <a href="#" className="feedbackDiv">
              {responses[0]}
            </a>
          ) : null}

          <div className="interactiveChat">
            <h3>How can I help?</h3>
            <button onClick={switchFeedback}>{userFeedback[0]}</button>
            <button>{userFeedback[1]}</button>
            <button>{userFeedback[2]}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
