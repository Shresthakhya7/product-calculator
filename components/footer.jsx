import { CiCircleInfo } from "react-icons/ci";
import { FaCcMastercard, FaCcVisa, FaDhl, FaFacebook, FaFedex, FaInstagram, FaLinkedin, FaTiktok, FaViber, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaEnvelope, FaRegCircleQuestion, FaBuilding, FaCircleInfo, FaPhone } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white">Pricing & Fees</a></li>
                            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-white">Supported Stores</a></li>
                            <li><a href="#" className="hover:text-white">How It Works</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">24/7 Support</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white">Return Policy</a></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-3">
                            {/** Social Icons */}
                            <a className="bg-gray-800 hover:bg-primary rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaFacebook />
                            </a>
                            <a className="bg-gray-800 hover:bg-pink-600 rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaInstagram />
                            </a>
                            <a className="bg-gray-800 hover:bg-red-600 rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaYoutube />
                            </a>
                            <a className="bg-gray-800 hover:bg-black rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaTiktok />
                            </a>
                            <a className="bg-gray-800 hover:bg-blue-700 rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaLinkedin />
                            </a>
                            <a className="bg-gray-800 hover:bg-purple-600 rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaViber />
                            </a>
                            <a className="bg-gray-800 hover:bg-green-600 rounded-xl w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <FaWhatsapp />
                            </a>
                            <a className="bg-gray-800 hover:bg-black w-12 h-12 rounded-xl flex justify-center items-center hover:scale-105 transition-transform">
                                <div className="relative w-5 h-5">
                                    <CiCircleInfo className="absolute inset-0 w-5 h-5 smooth-a" />
                                    <FaRegCircleQuestion className="absolute inset-0 w-5 h-5 smooth-b" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact + Partners */}
                <div className="border-t border-gray-800 mt-12 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <p className="text-gray-400 text-sm mb-2">
                            Eyana Enterprise Pvt. Ltd.
                            <br />123 Shopping Lane, Kathmandu, Nepal
                        </p>
                        <div className="flex gap-2 items-center text-gray-400">
                            <FaPhone className="w-4 h-4" />
                            <a href="tel:+977-9841002000" className="hover:text-white">+977-9841002000</a>
                        </div>
                        <div className="flex gap-2 items-center text-gray-400 pt-1">
                            <FaWhatsapp className="w-4 h-4" />
                            <a href="tel:+977-9841002001" className="hover:text-white">+977-9841002001</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Email Address</h4>
                        <div className="space-y-2 text-gray-400 text-sm">
                            <div className="flex gap-2 items-start">
                                <FaEnvelope className="w-5 h-5" />
                                <a href="mailto:support@eyana.com" className="hover:text-white">support@eyana.com</a>
                            </div>
                            <div className="flex gap-2 items-start">
                                <FaBuilding className="w-5 h-5" />
                                <a href="mailto:corporate@eyana.com" className="hover:text-white">corporate@eyana.com</a>
                            </div>
                            <div className="flex gap-2 items-start">
                                <FaCircleInfo className="w-5 h-5" />
                                <a href="mailto:inquiry@eyana.com" className="hover:text-white">inquiry@eyana.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Partners */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Our Business Partners</h4>
                        <p className="text-gray-400 text-sm mb-4">We partner with world-class logistics and payment providers to ensure a seamless experience.</p>
                        <div className="flex flex-wrap gap-4">
                            <FaDhl className="w-12 h-10 text-gray-500" />
                            <FaFedex className="w-12 h-10 text-gray-500" />
                            <FaCcVisa className="w-12 h-10 text-gray-500" />
                            <FaCcMastercard className="w-12 h-10 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-gray-800 mt-12 pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-semibold">Stay connected with us</h3>
                        <p className="text-gray-400 text-sm mt-2">Subscribe to get free updates on offers, discounts and anything new!</p>
                    </div>

                    <form className="w-full max-w-md flex items-center bg-gray-800 rounded-full p-2 border border-gray-700 focus-within:ring-2 focus-within:ring-[#0070ba] transition-all">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            className="flex-1 bg-transparent text-white px-4 py-2 placeholder-gray-500 outline-none" />
                        <button
                            type="submit"
                            className="bg-primary px-6 py-2 rounded-full text-white hover:bg-[#142C8E] cursor-pointer font-semibold transition-colors shrink-0">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © 2024 Eyana Enterprise. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
