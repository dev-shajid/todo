import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav/Nav';
import './App.css';
import Tasks from './Components/Tasks/Tasks';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className="App">
      {/* Navbar  */}
      <Nav searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* All Tasks  */}
      <Tasks searchInput={searchInput}/>

      {/* Completed Tasks  */}
      <CompletedTasks searchInput={searchInput}/>
      
    </div>
  );
}

export default App;
