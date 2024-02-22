
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './results.css';

function Results({ inputText, printType, filter, sorting }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const newText = inputText.replace(/\s/g, '+');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${newText}&key=${process.env.REACT_APP_BOOKS_API_KEY}`);
                setPosts(response.data.items);
                
            }
            catch (error) {
                alert('Error fetching Books API data. Please try again');
                console.error(error);
            }
        };
        setIsLoading(false);
        fetchData();
    }, []);
    
    function Card(props) {

        const altText = 'Book cover for ' + props.bookName + " by " + props.authors;

        return (
          <div className='card'>
            <div className="top">
              <h2 className="name">{props.bookName}</h2>
              
            </div>
            <div className="bottom">
                <div className='textInfo'>
                    <p className="info">Author: {props.authors}</p>
                    <a href={props.link} className='info'>Link</a>
                </div>
                <img className="square-img" src={props.bookImg} alt={altText}/>
            </div>
          </div>
        );
      }
        console.log(posts);
        return (
            <div className='resultsContainer'>
            {isLoading ? (          
                <h2>Loading...</h2>
            ):(
                <div className='cardContainer'>
                {posts.map((post, index) => {
                    return (
                        <Card
                            bookName={post.volumeInfo.title}
                            bookImg={post?.volumeInfo?.imageLinks?.thumbnail}
                            authors={post.volumeInfo.authors}
                            link={post.volumeInfo.infoLink}
                        />
                    )})}    
                    
                </div>
            )}
            </div>
        );
}

export default Results;
