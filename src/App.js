import React,{useState} from 'react';
import './App.css';
import Feed from './Feed';
import Header from './header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
  const [user, setUser] = useState("");
  
  return (
    
    <div className="app">
    {
      !user ? (<Login data={setUser}/>)
      :(
        <div>
          <Header data={user}/>
          <div className="app__body">
            <Sidebar data={user}/>
            <Feed data={user} />
            <Widget data={user}/>  
          </div>
        </div>
      )
    }
    </div>       
  );
}

export default App;
