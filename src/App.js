// import "./App.css";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ChatBox from "./components/ChatBox/ChatBox";
import Conversations from "./components/Conversations/Conversations";

import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <Conversations />
          <ChatBox />
          <UserDetails />
        </div>
      </div>
    </>
  );
}

export default App;
