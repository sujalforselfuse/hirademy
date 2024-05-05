import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar2';
import { infinity } from 'ldrs'

infinity.register()

// Default values shown

export default function Books() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch data from API
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://softwium.com/api/books');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        // Call the function to fetch data when component mounts
        fetchBooks();
    }, []);

    return (
        <div>
            <Navbar></Navbar>

            <div className='' style={{ backgroundImage: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%' }}>
                <section class="text-gray-600 body-font">

                    <div class="container px-5 py-24 mx-auto">
                        <h1 className='text-center text-2xl mb-8'>Here's The Book Details</h1>
                        <div class="flex flex-wrap gap-4 justify-center -m-4 ">

                            {loading ? <l-infinity
                                size="55"
                                stroke="4"
                                stroke-length="0.15"
                                bg-opacity="0.1"
                                speed="1.3"
                                color="black"
                            ></l-infinity> : books.map(book => (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-white rounded-md border-2 border-stone-900 ">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://source.unsplash.com/random/?books" />
                                    </a>
                                    <div class="mt-4">
                                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Romantic</h3>
                                        <Link to={`/books/${book.id}`} class="text-gray-900 title-font text-lg font-medium">{book.title}</Link>

                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
            </div>
        </div>



    )
}
