import './App.css';
import Friendship from './Components/Friendship';
import Mainbody from './Components/Mainbody';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Friendship/>
      <Mainbody/>
    </div>
  );
}

export default App;