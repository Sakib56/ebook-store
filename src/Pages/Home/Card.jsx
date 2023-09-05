import React from 'react';
import Swal from 'sweetalert2';

const Card = ({ book }) => {
    console.log(book);
    const { name, _id, authorName, image, price } = book


    const handleAddToCart = (name, image, authorName, price) => {
        console.log(name, price, image, authorName);
        const cartBook = { name, authorName, image, price }
        console.log(cartBook)

        fetch('https://ebook-server-site.vercel.app/addCarts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success!',
                    text: 'Add to cart Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })


    }
    return (
        <div className="shadow-2xl bg-slate-300 hover:bg-slate-400 hover:bg-opacity-50 p-2 lg:p-8 rounded">
            <img className='w-3/4 mx-auto md:w-full h-36 md:h-60 rounded-lg' src={image} alt="" />
            <p className='text-center text-base md:text-xl font-bold italic mt-3 text-black'>{name}</p>
            <p className='text-center text-xs md:text-base font-bold italic text-black text-opacity-70'>By {authorName}</p>
            <div className='text-center text-[10px] md:text-lg font-semibold italic text-black '>
                <p>Price: {price} Tk</p>
            </div>
            <div className='text-center'>
                <button onClick={() => handleAddToCart(name, image, authorName, price)} className='btn btn-neutral'>Add to Cart</button>
            </div>



        </div>
    );
};

export default Card;