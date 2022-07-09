import { useState } from "react";
import "../css-styles/interaction.css";

export default function Interaction() {
  const [feedback, setFeedback] = useState(false);
  const [appendedResponse, setAppendedResponse] = useState();

  const responses = [
    "Follow this link to cook up something nice!",
    "You can view the books I've offered, here.",
    "Let's connect on LinkedIn!",
  ];

  const userFeedback = [
    "I'm looking for a specific recipe.",
    "I want to see the books you've written.",
    "I just want to chat!",
  ];

  function switchFeedback(e) {
    if (feedback === false) {
      setFeedback(true);
    }

    switch (e.target.id) {
      case "btn1":
        setAppendedResponse(responses[0]);
        break;
      case "btn2":
        setAppendedResponse(responses[1]);
        break;
      case "btn3":
        setAppendedResponse(responses[2]);
        break;
    }
  }

  return (
    <div className="interactionParent">
      <div className="feedbackParent">
        {feedback ? (
          <a href="#" className="feedbackDiv">
            {appendedResponse}
          </a>
        ) : null}
      </div>

      <div className="interactiveChat">
        <h3>How can I help?</h3>
        <button id="btn1" onClick={(e) => switchFeedback(e)}>
          {userFeedback[0]}
        </button>
        <button id="btn2" onClick={(e) => switchFeedback(e)}>
          {userFeedback[1]}
        </button>
        <button id="btn3" onClick={(e) => switchFeedback(e)}>
          {userFeedback[2]}
        </button>
      </div>
    </div>
  );
}
