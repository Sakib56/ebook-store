import React from 'react';

const Card = ({ book }) => {
    console.log(book);
    const { name, _id, authorName, image, price } = book
    return (
        <div className="shadow-2xl bg-slate-300 hover:bg-slate-400 p-2 lg:p-8 rounded">
            <img className='w-full h-36 md:h-60 rounded-lg' src={image} alt="" />
            <p className='text-base md:text-xl font-bold italic mt-3 text-black'>{name}</p>
            <p className='text-xs md:text-base font-bold italic text-black text-opacity-70'>By {authorName}</p>

            <div className='flex justify-between items-end md:mt-5'>
                <div className='text-[10px] md:text-lg font-semibold italic text-black '>
                    <p>Price: {price} Tk</p>
                </div>
                <button className='btn btn-neutral'>Add to Cart</button>

            </div>
        </div>
    );
};

export default Card;