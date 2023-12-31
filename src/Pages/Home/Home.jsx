import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch(`https://ebook-server-site.vercel.app/allBooks`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    console.log(books);

    return (
        <div className='bg-slate-200 md:py-10'>
            <h1 className='text-center text-lg mb-5 font-bold md:text-2xl'>All Books Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-10 lg:p-0 max-w-6xl mx-auto gap-5'>
                {books.map(book => <Card book={book} key={book._id}></Card>)}
            </div>
        </div>
    );
};

export default Home;