import { FaClock, FaGlobe } from "react-icons/fa";
import { FaCalculator, FaRegCircleQuestion } from "react-icons/fa6";
import { CiCircleInfo, CiCircleQuestion } from "react-icons/ci";

export default function PriceOrder() {
    return (
        <div className="py-10 mb-10 transition-all duration-300">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col items-center text-center transition-all duration-300">

                    <div className="inline-flex items-center space-x-2 bg-linear-to-r mb-8 from-blue-50 to-indigo-50 
                        text-[#0070ba] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold 
                        border border-blue-100 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-[#0070ba] flex items-center justify-center">
                            <FaCalculator className="text-white w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-[#0070ba]">Price Calculator</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-900 tracking-tight 
                        transition-all duration-300 leading-tight px-2">
                        Calculate Your Order
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-4 pt-8 px-3">
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                            This page supports orders from{" "}
                            <a
                                href="#"
                                className="font-bold text-[#0070ba] border-b-2 border-dotted border-[#0070ba]/30 
                                hover:border-[#0070ba]/60 transition-all duration-300 hover:bg-blue-50 px-1 py-0.5 rounded"
                            >
                                22 Indian online stores
                            </a>
                            .
                        </p>

                        <p className="text-base sm:text-lg text-gray-500">
                            For other stores, please use the separate{" "}
                            <a
                                href="#"
                                className="font-semibold text-[#0070ba] border-b-2 border-dotted border-[#0070ba]/30 
                                hover:border-[#0070ba]/60 transition-all duration-300 hover:bg-blue-50 px-1 py-0.5 rounded"
                            >
                                product order page
                            </a>
                            .
                        </p>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 
                        sm:space-x-8 mt-10 text-sm text-gray-400"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="relative w-5 h-5">
                                <CiCircleInfo className="absolute inset-0 w-5 h-5 text-green-300 smooth-a" />
                                <FaRegCircleQuestion className="absolute inset-0 w-5 h-5 text-green-300 smooth-b" />
                            </div>
                            <span>Secure Processing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaClock className="w-4 h-4 text-blue-600" />
                            <span>Real-time Pricing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaGlobe className="w-4 h-4 text-purple-600" />
                            <span>Hassle Free Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
