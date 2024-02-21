import React, { useState} from 'react';

import Results from '../results/results.js'
import './searchBar.css'

export const searchText = '';

function SearchBar() {
  
    const [searchText, setSearchText] = useState('');
    const [printType, setPrintType] = useState('all');
    const [filter, setFilter] = useState('partial');
    const [sorting, setSorting] = useState('relevance');
    const [viewResults, setViewResults] = useState(false);

    const handleTextChange = (e) => {
        setViewResults(false);
        setSearchText(e.target.value);
    };

    const handlePrintTypeChange = (e) => {
        setViewResults(false);
        setPrintType(e.target.value);
    }

    const handleFilterChange = (e) => {
        setViewResults(false);
        setFilter(e.target.value);
    }

    const handleSortingChange = (e) => {
        setViewResults(false);
        setSorting(e.target.value);
    }

    const handleSearch = () => {
        console.log('Searching for: '+ searchText); 
        console.log('Print Type: '+ printType);
        console.log('Filter: '+ filter);
        console.log('Sorting: '+ sorting);
        setViewResults(true);

    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    value={searchText} 
                    onChange={handleTextChange} 
                    onKeyDown={handleKeyPress}
                    placeholder='Search for a book'
                    maxLength={100}
                    autoFocus
                    />
                    
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <label>
                    Print Type:
                    <select
                        name='printType'
                        defaultValue={printType}
                        onChange={handlePrintTypeChange}
                    >
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                        
                    </select>
                </label>
                <label>
                    Filter:
                    <select
                        name='filter'
                        value={filter}
                        onChange={handleFilterChange}
                        
                    >
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='free-ebooks'>Free Ebooks</option>
                        <option value='paid-ebooks'>Paid Ebooks</option>
                        <option value='ebooks'>Ebooks</option>
                        
                    </select>
                </label>
                <label>
                    Sorting:
                    <select
                        name='sorting'
                        value={sorting}
                        onChange={handleSortingChange}
                        
                    >
                        <option value='relevance'>Relevance</option>
                        <option value='newest'>Newest</option>
                    </select>
                </label>
            </div>
            <div>
                {viewResults && <Results inputText={searchText} printType={printType} filter={filter} sorting={sorting}/> }
            </div>
        </div>
    );
}

export default SearchBar;
