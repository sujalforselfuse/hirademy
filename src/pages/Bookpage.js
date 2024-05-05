import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar2';
import { infinity } from 'ldrs'

infinity.register()
export default function Bookpage() {
    const { id } = useParams();

    const [bookDetail, setBookDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Function to fetch data from API
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://softwium.com/api/books/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBookDetail(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        // Call the function to fetch data when component mounts
        fetchBookDetails();
    }, []);

    
    return (
        <div className='lg:h-screen' style={{ backgroundImage: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%' }}>
            <Navbar></Navbar>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        {loading?<l-infinity
                                size="55"
                                stroke="4"
                                stroke-length="0.15"
                                bg-opacity="0.1"
                                speed="1.3"
                                color="black"
                            ></l-infinity>:<div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">BOOK DETAILS</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{bookDetail.title}</h1>
                            <div class="flex mb-4">
                                <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                
                            </div>
                            <p class="leading-relaxed mb-4">Experience the epic clash of civilizations in 'Empires of Sand and Fire', a sweeping historical novel set against the backdrop of ancient Mesopotamia. Follow the journey of a young prince torn between duty and desire as he navigates the treacherous political landscape of the ancient world, where empires rise and fall on the whims of gods and men.</p>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">ISBN</span>
                                <span class="ml-auto text-gray-900">{bookDetail.isbn}</span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Page Count</span>
                                <span class="ml-auto text-gray-900">{bookDetail.pageCount}</span>
                            </div>
                            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span class="text-gray-500 mr-auto">Authors</span>
                                {bookDetail.authors && bookDetail.authors.map(author => (
                                    <span class=" text-gray-900">{author} </span>
                                ))}
                                
                            </div>
                            
                        </div>}
                        <img alt="ecommerce" class="hidden lg:block lg:w-1/2 w-full lg:h-[65vh] h-64 object-cover object-center rounded" src="https://source.unsplash.com/random/?books"/>
                    </div>
                </div>
            </section>
        </div>
    )
}
