
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './results.css';

const apiKey = process.env.REACT_APP_BOOKS_API_KEY;



function Results({ inputText, printType, filter, sorting }) {
    const [posts, setPosts] = useState([]);
    
    const newText = inputText.replace(/\s/g, '+');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newText}&key=${apiKey}`);
                setPosts(response.data.items);
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
        
    console.log(posts);
        return (
            <div>
                <h2>Results</h2>
                <div style={{height: '500px', overflow:'scroll'}}>
                
                    {posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <h3>{post.volumeInfo.title}</h3>
                                <p>{post.volumeInfo.authors}</p>
                            </div>
                        );
                    })}
                    </div>
            </div>
        );
}

export default Results;
