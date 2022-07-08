import { useState } from "react";

export default function Interaction() {
  function switchFeedback() {
    setFeedback(!feedback);
  }

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

  return (
    <div className="interactionParent">
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
  );
}
