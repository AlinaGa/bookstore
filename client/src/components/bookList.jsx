import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Book from './book';


const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        findBooks();
    }, []);

    const findBooks = async () => {
        try {
            const response = await axios.get('/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error finding books:', error);
        }
    };


    const deleteBook = async (id) => {
        try {
            await axios.delete(`/books/${id}`);
            findBooks(); // Refresh the book list after deletion
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <div>
            <h1>Bookshelf</h1>
            {books.map((book) => (
                <div key={book.id}>
                    <h3>Title: {book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.category}</p>
                    <img src={book.cover_url} alt={book.title} />
                    <Link to={`/books/${book.id}`}>View More</Link>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookList;