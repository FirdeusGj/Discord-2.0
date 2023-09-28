import { useEffect, useState } from "react";
import "./App.scss";
import Friendship from "./Components/Chats/Friendship";
import Mainbody from "./Components/mainBody/Mainbody";
import Sidebar from "./Components/Sidebar/Sidebar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import UserChat from "./Components/mainBody/UserChat";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=9")
      .then((response) => {
        const fetchedUsers = response.data.results;
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error("Error fetching random users:", error);
      });
  }, []);
  console.log(users)

  const randomStatusResult = [];
  const randomStatus = {
    1: "invisible",
    2: "red",
    3: "idle",
    4: "green",
  };
  
  for (let i = 0; i < 9; i++) {
    const random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    randomStatusResult.push(randomStatus[random]);
  }
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Friendship usersData={users} userStatus={randomStatusResult} />
        <Routes>
          <Route
            path="/"
            element={
              <Mainbody usersData={users} userStatus={randomStatusResult} />
            }
          />
          <Route path="/:id" element={<UserChat usersData={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
