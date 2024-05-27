import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      alert(`Your search term: ${searchTerm}`);
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-container">
          <input
            className='outline-none'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Anything..."
          />
          <button onClick={handleSearch}><MdSearch /></button>
        </div>
      </header>
    </div>
  );
}

export default App;
