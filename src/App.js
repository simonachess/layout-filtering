import './App.css';
import { useState } from 'react'
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {

  const [selectedItemID, setSelectedItemID] = useState();
  const [input, setInput] = useState('');

  const handleClick = (id) => {
    setSelectedItemID(id)
  }

  const onSearch = (e) => {
    setInput(e.target.value)
  }

  return (

    <div className="app">
      <header>
        <Search onSearch={onSearch} value={input} />
      </header>
      <nav>
        <Sidebar handleClick={handleClick} />
      </nav>
      <article> <Main selectedItemID={selectedItemID} searchValue={input} /></article>
    </div>
  );
}

export default App;
