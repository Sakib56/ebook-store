import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/allBooks`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    console.log(books);

    return (
        <div className='bg-slate-200 md:py-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-5'>
                {books.map(book => <Card book={book} key={book._id}></Card>)}
            </div>
        </div>
    );
};

export default Home;