import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartsBook = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch(`https://ebook-server-site.vercel.app/allCartsBook`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
            })
    }, [])
    console.log(carts);
    const totalPrice = carts.reduce((total, product) => total + product.price, 0);
    // console.log(totalPrice);

    const handleDelete = (_id) => {
        // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://ebook-server-site.vercel.app/allCartsBook/${_id}`, {
                        method: "DELETE"
                    })
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your carts item has been deleted.',
                                    'success'
                                )
                            }
                            const remainingCarts = carts.filter(cart => cart._id !== _id)
                            setCarts(remainingCarts)
                        })
                }
            })

    }
    return (
        <div className='max-w-6xl mx-auto md:py-10 md:min-h-[500px]'>
            <h1 className='text-center font-bold text-2xl'>Your Carts Items</h1>
            <h1 className='text-center font-bold text-green-500 md:text-lg my-2 md:my-5 italic '>Total Price: {totalPrice} Tk</h1>
            <div className="overflow-x-auto">
                <table className="table mt-4 md:mt-7">
                    {/* head */}
                    <thead>
                        <tr className='text-base md:text-lg'>
                            <th>Sl</th>
                            <th>Image</th>
                            <th>BookName</th>
                            <th>AuthorName</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm md:text-lg italic'>
                        {carts.map((cart, index) => <tr className='hover:bg-slate-200' key={cart._id}>
                            <td>{index + 1}</td>
                            <td><img className='w-16 h-16 rounded-full' src={cart.image} alt="" /></td>
                            <td>{cart.name}</td>
                            <td>{cart.authorName}</td>
                            <td>{cart.price} tk</td>
                            <td onClick={() => handleDelete(cart._id)}><button className='text-red-500 text-lg'><FaTrash /></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartsBook;