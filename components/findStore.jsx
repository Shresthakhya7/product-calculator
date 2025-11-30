import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong, FaEarthAmericas } from "react-icons/fa6";

export default function FindStore() {

    return (
        <div className="mt-16 mb-20 relative overflow-hidden rounded-3xl px-4 sm:px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-700"></div>
            <div className="absolute inset-0 opacity-10"></div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 py-12 md:py-16 text-center max-w-4xl mx-auto">

                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-lg">
                    <FaEarthAmericas className="w-10 h-10 text-white" />
                </div>

                {/* Heading */}
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    Can't find your store here? No problem!
                </h3>

                {/* Description */}
                <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed px-1">
                    Use this link to start shopping from <span className="text-white font-semibold">any Indian online store</span>,
                    and we'll handle the rest. We ship from virtually anywhere to your doorstep.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        // onClick={handleShopClick}
                        className="w-full sm:w-auto bg-white text-[#0070ba] hover:bg-blue-50 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl 
                        font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl 
                        flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        Shop From Any Store Now
                        <FaArrowRightLong className="w-5 h-5 text-[#0070ba]" />
                    </button>
                </div>

                {/* Features */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-blue-200 text-sm">
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4 text-blue-200" />
                        <span>Universal Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="w-4 h-4 text-blue-200" />
                        <span>Full Insurance</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
