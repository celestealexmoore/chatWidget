import "./modules/index.css";
import { BsChatDotsFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className="chatWidgetParent">
        <div className="icon">
          <BsChatDotsFill size={50}/>
        </div>
      </div>
    </div>
  );
}

export default App;
