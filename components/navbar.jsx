"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGlobe, FaShoppingCart, FaUser } from "react-icons/fa";

// Reusable NavLink Component
const NavLink = ({ href, children, onClick, isActive }) => (
    <a
        href={href}
        onClick={onClick}
        className={`hover:text-[#0070ba] transition ${isActive ? 'text-[#0070ba] font-semibold' : ''}`}
    >
        {children}
    </a>
);

// Reusable IconButton Component
const IconButton = ({ children, badge }) => (
    <div className="relative bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
        {children}
        {badge && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {badge}
            </span>
        )}
    </div>
);

export default function Navbar({
    logoText = "Eyana Enterprise",
    cartCount = 1,
    onNavClick = () => { },
    activeTab = "Pricing",
    navItems = ["Home", "Pricing", "Tracking", "Help"],
    scrollThreshold = 200
}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollThreshold]);

    const toggleMobile = useCallback(() => {
        setMobileOpen(prev => !prev);
    }, []);

    const handleNavClick = useCallback((e, item) => {
        if (item === "Pricing") {
            e.preventDefault();
            onNavClick(item);
            setMobileOpen(false);
        }
    }, [onNavClick]);

    const MenuIcon = useMemo(() => mobileOpen ? X : Menu, [mobileOpen]);

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="bg-[#0070ba] p-2 rounded-lg">
                        <FaGlobe className="text-white w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {logoText}
                    </h1>
                </div>

                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${isScrolled
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <span className="text-2xl font-bold text-gray-900">
                        Calculate Your Order
                    </span>
                </div>

                <div className={`hidden md:flex items-center gap-10 text-gray-600 text-[16px] font-medium transition-all duration-500 ease-in-out ${isScrolled
                    ? 'opacity-0 translate-y-4 pointer-events-none'
                    : 'opacity-100 translate-y-0'
                    }`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item}
                            href={item === "Pricing" ? "#pricing" : "#"}
                            onClick={(e) => handleNavClick(e, item)}
                            isActive={item === activeTab}
                        >
                            {item}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <IconButton badge={cartCount > 0 ? cartCount : null}>
                        <FaShoppingCart className="text-gray-500 w-5 h-5" />
                    </IconButton>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                </div>

                <button
                    className="md:hidden block p-2"
                    onClick={toggleMobile}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <MenuIcon size={28} />
                </button>
            </div>

            <div
                className={`md:hidden bg-white px-6 pt-2 pb-4 space-y-4 border-t transition-all duration-300 overflow-hidden 
          ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={item === "Pricing" ? "#pricing" : "#"}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`block text-gray-700 text-lg font-medium hover:text-[#0070ba] ${item === activeTab ? 'text-[#0070ba] font-semibold' : ''}`}
                    >
                        {item}
                    </a>
                ))}

                <div className="flex items-center gap-6 border-t pt-4">
                    <div className="relative bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
                        <FaShoppingCart className="text-gray-500 w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <div className="relative bg-gray-100 rounded-full cursor-pointer">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}