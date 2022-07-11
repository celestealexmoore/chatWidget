import "../css-styles/chatCard.css";
import { GrFormClose } from "react-icons/gr";
import avatar from "../assets/photos/avatar.jpg";
import Interaction from "./Interaction";
const moment = require("moment");
moment().format();

export default function ChatCard(props) {
  if (props.visible) {
    setTimeout(hideBubbles, 3000);
  }

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
            <img className="chatAvatar" src={avatar} alt="Image of host" />

            <div id="animatedChatBubbles">
              <div id="textBubbles">
                <div className="bubbles bubble1"></div>
                <div className="bubbles bubble2"></div>
                <div className="bubbles bubble3"></div>
              </div>
            </div>

            <div id="hostGreeting">Hi there 🤗</div>
          </div>

          <Interaction />
        </div>
      </div>
    </div>
  );
}
