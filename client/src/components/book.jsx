import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Book = ({ match }) => {
    const [book, setBook] = useState(null);
    const bookId = match.params.id;

    useEffect(() => {
        findBook();
    }, []);

    const findBook = async () => {
        try {
            const response = await axios.get(`/books/${bookId}`);
            setBook(response.data);
        } catch (error) {
            console.error('Error finding book:', error);
        }
    };

    if (!book) {
        return <div>Opening </div>;
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <img src={book.cover_url} alt={book.title} />
            <p>Description: {book.description}</p>
        </div>
    );
};

export default BookDetails;