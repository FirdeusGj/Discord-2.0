import { useState } from 'react';
import './App.scss';
import Friendship from './Components/Chats/Friendship';
import Mainbody from './Components/mainBody/Mainbody';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [usersName, setUsersData] = useState('');
  const [userPfp, setUserPfp] = useState('')
  const [userStatus, setUserStatus] = useState([]);
  return (
    <div className="App">
      <Sidebar/>
      <Friendship getName={setUsersData}/>
      <Mainbody/>
    </div>
  );
}
export default App;