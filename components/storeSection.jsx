"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FaAmazon, FaBaby, FaCat, FaGlasses, FaPlane, FaSpa } from 'react-icons/fa';
import { FaRegEye, FaGem, FaMountain } from "react-icons/fa6";

export default function StoreSection() {
    const [activeCategory, setActiveCategory] = useState('All Stores');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'All Stores',
        'Online Super Stores',
        'Clothing & Accessories',
        'Electronics'
    ];

    const stores = [
        // Row 1
        { name: 'Amazon.in', logo: <FaAmazon />, category: 'Online Super Stores', color: ' text-3xl text-gray-700' },
        { name: 'Flipkart', logo: 'f', category: 'Online Super Stores', color: 'bg-blue-100 text-xl rounded-full text-[#0070ba]' },
        { name: 'Myntra', logo: 'M', category: 'Clothing & Accessories', color: 'text-pink-500 text-xl' },
        { name: 'Nykaa', logo: 'N', category: 'Online Super Stores', color: 'text-pink-600 text-xl' },
        { name: 'Ajio', logo: 'A', category: 'Clothing & Accessories', color: 'bg-black rounded-full text-white text-lg' },
        { name: 'Zara', logo: 'Z', category: 'Clothing & Accessories', color: 'text-black font-serif text-2xl' },

        // Row 2
        { name: 'Uniqlo', logo: 'U', category: 'Clothing & Accessories', color: 'bg-red-600 text-white text-lg' },
        { name: 'ChicMe', logo: 'C', category: 'Clothing & Accessories', color: 'text-gray-800 text-xl' },
        { name: 'H&M', logo: 'H&M', category: 'Clothing & Accessories', color: 'text-red-600 text-xl' },
        { name: 'FirstCry', logo: <FaBaby />, category: 'Online Super Stores', color: 'text-blue-400 text-3xl' },
        { name: 'Medhey Travel', logo: <FaPlane />, category: 'Online Super Stores', color: 'text-teal-500 text-3xl' },
        { name: 'Meesho', logo: 'm', category: 'Online Super Stores', color: 'text-pink-600 text-xl' },

        // Row 3
        { name: 'Outdoor Gear', logo: <FaMountain />, category: 'Clothing & Accessories', color: 'text-green-700 text-3xl' },
        { name: 'Decathlon', logo: 'D', category: 'Clothing & Accessories', color: 'bg-blue-600 text-white text-lg' },
        { name: 'Lenskart', logo: <FaGlasses />, category: 'Clothing & Accessories', color: 'text-cyan-600 text-3xl ' },
        { name: 'GAP', logo: 'GAP', category: 'Clothing & Accessories', color: 'bg-blue-900 text-white text-lg' },
        { name: 'Tira Beauty', logo: <FaSpa />, category: 'Online Super Stores', color: 'text-rose-400 text-3xl' },
        { name: 'Puma', logo: <FaCat />, category: 'Clothing & Accessories', color: 'text-black text-3xl' },

        // Row 4
        { name: 'Reebok', logo: 'R', category: 'Clothing & Accessories', color: 'text-red-600 text-xl' },
        { name: 'Eyejack', logo: <FaRegEye />, category: 'Clothing & Accessories', color: 'text-3xl text-gray-700 text-3xl' },
        { name: 'Columbia', logo: <FaGem />, category: 'Clothing & Accessories', color: 'text-blue-700 text-3xl ' },
        { name: 'Happenstance', logo: 'H', category: 'Clothing & Accessories', color: 'text-orange-500 text-xl' },
        { name: 'Nykaa Fashion', logo: 'NF', category: 'Clothing & Accessories', color: 'text-purple-600 text-xl ' },
        { name: 'Purplle', logo: 'P', category: 'Online Super Stores', color: 'text-purple-500 text-xl' },

        //Row 5
        { name: 'Andune', logo: 'A', category: 'Clothing & Accessories', color: 'text-gray-800 text-xl' },
        { name: 'Ajio Luxe', logo: 'Luxe', category: 'Clothing & Accessories', color: 'bg-black text-[#fbbf24] font-serif text-lg' },
    ];

    const filteredStores = stores.filter(store => {
        const matchesCategory = activeCategory === 'All Stores' || store.category === activeCategory;
        const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Shop From Your Favorite Indian Stores
                </h2>
                <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                    We accept orders from a wide variety of online stores. Browse by category below.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="flex flex-wrap gap-2 justify-center max-w-full sm:px-0">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm border border-transparent cursor-pointer ${activeCategory === category
                                ? 'bg-[#0070ba] text-white hover:bg-[#005ea6] shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="w-full lg:w-auto relative min-w-[260px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search stores..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-5 py-2.5 border border-gray-300 rounded-full text-sm text-gray-700 placeholder-gray-400
                            focus:outline-none focus:border-[#0070ba] focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {filteredStores.map((store, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#0070ba] hover:shadow-lg transition-all duration-300 aspect-square"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={`w-12 h-12 ${store.color} flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {store.logo}
                            </div>
                            <h3 className="text-sm font-semibold text-gray-700 group-hover:text-[#0070ba] text-center">
                                {store.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {filteredStores.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No stores found matching your criteria.</p>
                </div>
            )}

        </div>
    );
};
