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
    const [key, setKey] = useState(true);

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handlePrintTypeChange = (e) => {
        setPrintType(e.target.value);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const handleSortingChange = (e) => {
        setSorting(e.target.value);
    }

    const handleSearch = () => {
        console.log(searchText);
        console.log(printType);
        console.log(filter);
        console.log(sorting);
        setViewResults(true);
        setKey(!key);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setViewResults(false);
            handleSearch();
        }
    };

    return (
        <div>
            <div className='searchBox'>
                <input 
                    className="textInput" 
                    value={searchText} 
                    onChange={handleTextChange} 
                    onKeyDown={handleKeyPress}
                    placeholder='Search for a book'
                    maxLength={100}
                    autoFocus
                    />
                <button onClick={handleSearch} className='selectButton'>Search</button>
            </div>
            <div className='filters'>
                <label>
                    Print Type:
                    <select
                        name='printType'
                        value={printType}
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
                {viewResults && <Results key={key} inputText={searchText} printType={printType} filter={filter} sorting={sorting} />}           
            </div>
            
        </div>
    );
}

export default SearchBar;