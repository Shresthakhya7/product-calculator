"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    FaArrowUpRightFromSquare,
    FaCalculator,
    FaCheck,
    FaCircleInfo,
    FaLaptop,
    FaMagnifyingGlass,
    FaMinus, FaPenToSquare,
    FaPlus, FaRegTrashCan,
    FaShieldHalved
} from "react-icons/fa6"

export default function ProductDialog() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isLoadingDialogOpen, setIsLoadingDialogOpen] = useState(false)
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false)
    const [productUrl, setProductUrl] = useState("")
    const [urlError, setUrlError] = useState("")
    const [quantity, setQuantity] = useState("1")
    const [specialInstructions, setSpecialInstructions] = useState("")
    const [products, setProducts] = useState([])

    const handleAddProduct = () => {
        // Only validate if input is empty
        if (!productUrl.trim()) {
            setUrlError("Please enter a product URL or text")
            return
        }

        // Close input dialog and open loading dialog
        setIsDialogOpen(false)
        setUrlError("")
        setIsLoadingDialogOpen(true)

        // Simulate fetching product details
        setTimeout(() => {
            setIsLoadingDialogOpen(false)
            setIsProductDetailsOpen(true)
        }, 2500)
    }

    const handleCancelLoading = () => {
        setIsLoadingDialogOpen(false)
        setProductUrl("")
        setUrlError("")
    }

    const handleCloseProductDetails = () => {
        setIsProductDetailsOpen(false)
        setProductUrl("")
        setUrlError("")
        setQuantity("1")
        setSpecialInstructions("")
    }

    const handleAddProductToList = () => {
        const newProduct = {
            id: Date.now(),
            name: "Product Item #" + (products.length + 1),
            basePrice: 39998.40,
            deliveryFee: 25.00,
            serviceCharge: 3999.84,
            shippingFee: 45.00,
            tax: 4799.81,
            finalPrice: 48868.05,
            quantity: parseInt(quantity) || 1,
            specialInstructions: specialInstructions || productUrl
        }
        setProducts([...products, newProduct])
        handleCloseProductDetails()
    }

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(p => p.id !== id))
    }

    const handleQuantityChange = (id, newQty) => {
        setProducts(products.map(p =>
            p.id === id ? { ...p, quantity: Math.max(1, parseInt(newQty) || 1) } : p
        ))
    }

    const calculateTotal = () => {
        return products.reduce((sum, p) => sum + (p.finalPrice * p.quantity), 0)
    }

    const handleDialogClose = (open) => {
        setIsDialogOpen(open)
        if (!open) {
            setUrlError("")
            setProductUrl("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddProduct()
        }
    }



    return (<>
        {products.length === 0 ? (
            <div className="mb-8">
                <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="w-full px-6 py-8 rounded-3xl bg-[#0070ba] hover:bg-[#142C8E] border-2 border-[#0070ba] text-base transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-semibold cursor-pointer"
                >
                    <FaPlus className="w-5 h-5" />
                    <span>Add New Product</span>
                </Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Products */}
                <div className="lg:col-span-2 space-y-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-[#0070ba]  hover:-translate-y-0.5 hover:shadow-[0_20px_25px_-5px_#0000001a,0_10px_10px_-5px_#0000000a]">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Product Image + Details */}
                                <div className="flex-1 flex flex-col">
                                    <div className="bg-white rounded-2xl shadow-[#0000000D] border border-gray-100 p-4 md:p-6 flex flex-col h-full">
                                        <div className="bg-gray-100 rounded-xl aspect-4/3 flex items-center justify-center mb-4 md:mb-6 text-gray-400">
                                            <FaLaptop className="text-5xl md:text-6xl text-gray-400" />
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <p className="text-sm text-gray-500 truncate flex-1">{product.specialInstructions.substring(0, 30)}...
                                            </p>
                                            <a href="#">
                                                <FaArrowUpRightFromSquare className="w-4 h-4 text-[#0070ba]" />
                                            </a>
                                        </div>

                                        <div className="mt-auto">
                                            <span className="text-2xl md:text-3xl font-bold text-gray-900">
                                                Rs. {(product.basePrice * product.quantity).toFixed(2)}
                                            </span>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm font-semibold text-gray-500 mr-1">Qty:</span>
                                                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                                    <button
                                                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center bg-white text-[#0070ba] border border-gray-200 rounded-lg shadow-sm hover:bg-[#0070ba] hover:text-white hover:border-[#0070ba] transition-all duration-200 active:scale-95 group"
                                                    >
                                                        <FaMinus className="text-xs group-hover:text-white" />
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={product.quantity}
                                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                                        className="w-12 text-center bg-transparent border-none font-bold text-gray-900 focus:ring-0 p-0 mx-1 text-lg"
                                                        min="1"
                                                    />
                                                    <button
                                                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center bg-[#0070ba] text-white border border-[#0070ba] rounded-lg shadow-sm hover:bg-[#142C8E] hover:border-[#142C8E] transition-all duration-200 active:scale-95"
                                                    >
                                                        <FaPlus className="text-xs" />
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveProduct(product.id)}
                                                className="w-10 h-10 flex cursor-pointer items-center justify-center text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-200 hover:shadow-md"
                                            >
                                                <FaRegTrashCan className="text-lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="w-full md:w-7/12 flex flex-col justify-center mt-4 md:mt-0">
                                    <div className="space-y-4">
                                        {[
                                            { label: "Original Price", value: product.basePrice },
                                            { label: "Delivery Fee", value: product.deliveryFee, color: "text-green-600" },
                                            { label: "Service Charge (10%)", value: product.serviceCharge, color: "text-[#0070ba]" },
                                            { label: "Shipping Fee", value: product.shippingFee, color: "text-purple-600" },
                                            { label: "Tax (12%)", value: product.tax, color: "text-red-500" },
                                        ].map((item, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                                                <span className="text-gray-600 font-medium">{item.label}</span>
                                                <span className={`font-bold text-right ${item.color || "text-gray-900"}`}>
                                                    Rs. {(item.value * product.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="mt-4 md:mt-6 bg-blue-50/50 rounded-xl p-4 md:p-6 flex justify-between items-center">
                                            <span className="text-lg md:text-xl font-bold text-gray-900">Final Price</span>
                                            <span className="text-2xl md:text-3xl font-bold text-[#0070ba]">
                                                Rs. {(product.finalPrice * product.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Product Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => setIsDialogOpen(true)}
                            className="w-full bg-[#0070ba] hover:bg-[#142C8E] border-2 border-[#0070ba] text-white px-6 py-6 md:py-8 rounded-3xl font-semibold text-base transition-all flex items-center cursor-pointer justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                        >
                            <FaPlus className="w-5 h-5" />
                            Add New Product
                        </button>
                    </div>
                </div>

                {/* Right Column - Price Summary */}
                <div className="lg:col-span-1">
                    <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-xl sticky top-20 md:top-28">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <FaCalculator className="text-green-600" />
                            </div>
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Price Summary</h2>
                        </div>

                        <div className="space-y-3 md:space-y-4 mb-6 text-sm md:text-base">
                            <div className="flex justify-between">
                                <span>Items Total:</span>
                                <span className="font-medium">Rs. {calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>International Shipping:</span>
                                <span className="font-medium">Rs. 0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Customs & Duties:</span>
                                <span className="font-medium">Rs. 0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Local Delivery:</span>
                                <span className="font-medium">Rs. 0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Service Charge:</span>
                                <span className="font-medium">Rs. 0.00</span>
                            </div>
                            <div className="border-t-2 border-gray-200 pt-3 md:pt-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg md:text-xl font-semibold text-gray-900">Total:</span>
                                    <span className="text-xl md:text-2xl font-bold text-[#0070ba]">Rs. {calculateTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <button className="w-full bg-[#0070ba] hover:bg-[#005a94] text-white font-semibold text-base md:text-lg px-4 py-3 md:py-4 rounded-2xl transition-all shadow-lg transform hover:scale-105">
                                Place Order Now
                            </button>
                            <button className="w-full border-2 border-[#0070ba] text-[#0070ba] px-4 py-3 md:py-4 rounded-2xl hover:bg-[#0070ba] hover:text-white font-semibold text-base md:text-lg transition-all">
                                Save for Later
                            </button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-200 text-center space-y-2 text-sm md:text-base">
                            <div className="flex items-center justify-center space-x-2 text-green-600">
                                <FaShieldHalved />
                                <span className="font-medium">Secure & Protected</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-500">All prices include customs clearance</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Add Product Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
            <DialogContent className="sm:max-w-[625px] p-0 rounded-3xl">
                <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-200">
                    <DialogTitle className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-linear-to-r from-[#0070ba] to-[#009cde] rounded-full flex items-center justify-center text-white">
                            <FaPlus className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Add New Product</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="px-8 py-8">
                    <div className="grid gap-3">
                        <Label htmlFor="product-url" className="block text-base font-bold text-gray-900">
                            Product URL <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="product-url"
                            placeholder="Paste product link or enter product details..."
                            className={`w-full px-5 py-4 text-base border-2 rounded-xl focus:outline-none transition-all bg-white ${urlError
                                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                                : 'border-gray-300 focus:border-[#0070ba] focus:ring-2 focus:ring-blue-100'
                                }`}
                            value={productUrl}
                            onChange={(e) => {
                                setProductUrl(e.target.value)
                                if (urlError) setUrlError("")
                            }}
                            onKeyPress={handleKeyPress}
                        />
                        {urlError && (
                            <p className="text-sm text-red-500 mt-1">{urlError}</p>
                        )}
                    </div>
                    <div className="text-sm text-gray-600 flex items-start space-x-2 mt-4">
                        <FaCircleInfo className="w-4 h-4 text-[#0070ba] mt-0.5 shrink-0" />
                        <span>
                            Paste the product link from Amazon, eBay, Etsy, or any supported store.{" "}
                            <a href="#" className="text-[#0070ba] font-medium hover:underline">
                                See all supported stores
                            </a>
                        </span>
                    </div>
                </div>
                <div className="bg-gray-50 px-8 py-6 rounded-b-3xl border-t border-gray-200 flex gap-4">
                    <button
                        onClick={() => handleDialogClose(false)}
                        className="flex-1 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl hover:bg-gray-100 font-semibold text-base transition-all transform hover:scale-[1.02]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddProduct}
                        className="flex-1 cursor-pointer bg-linear-to-r from-[#0070ba] to-[#009cde] text-white px-6 py-3.5 rounded-xl hover:shadow-lg font-semibold text-base transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                    >
                        <FaMagnifyingGlass className="w-4 h-4" />
                        <span>Get Info</span>
                    </button>
                </div>
            </DialogContent>
        </Dialog>


        {/* Loading Dialog */}
        <Dialog open={isLoadingDialogOpen} onOpenChange={setIsLoadingDialogOpen}>
            <DialogContent className="sm:max-w-[625px] p-0 rounded-3xl">
                <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-200">
                    <DialogTitle className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-linear-to-r from-[#0070ba] to-[#009cde] rounded-full flex items-center justify-center text-white">
                            <FaPlus className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Add New Product</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="px-8 py-16 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 border-4 border-[#0070ba] border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Getting the Information...</h3>
                    <p className="text-base text-gray-500">Please wait while we fetch product details</p>
                </div>
                <div className="bg-gray-50 px-8 py-6 border-t rounded-b-3xl border-gray-200 flex gap-4">
                    <button
                        onClick={handleCancelLoading}
                        className="flex-1 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl hover:bg-gray-100 font-semibold text-base transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        disabled
                        className="flex-1 bg-linear-to-r from-[#0070ba] to-[#009cde] text-white px-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 opacity-50 cursor-not-allowed"
                    >
                        <FaMagnifyingGlass className="w-4 h-4" />
                        <span>Get Info</span>
                    </button>
                </div>
            </DialogContent>
        </Dialog>

        {/* Product Details Dialog */}
        <Dialog open={isProductDetailsOpen} onOpenChange={setIsProductDetailsOpen}>
            <DialogContent className="sm:max-w-[625px] rounded-3xl p-0 flex flex-col max-h-[90vh]">
                <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-3xl">
                    <DialogTitle className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-linear-to-r from-[#0070ba] to-[#009cde] rounded-full flex items-center justify-center text-white">
                            <FaPlus className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900">Add New Product</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto flex-1 scrollbar-hide">
                    <div className="px-8 py-6 space-y-6">
                        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
                            <Label className="text-sm font-semibold text-gray-700 mb-3 block uppercase tracking-wide">Product Preview</Label>
                            <div className="bg-white rounded-xl aspect-square max-w-xs mx-auto flex items-center justify-center border-2 border-gray-200 shadow-sm">
                                <FaLaptop className="text-6xl text-[#0070ba]" />
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 space-y-4">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
                                Product Information
                            </h4>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <span className="text-gray-600 font-medium">Base Price (INR)</span>
                                    <span className="text-gray-900 font-semibold text-lg">₹ 24,999.00</span>
                                </div>
                                <div className="bg-linear-to-r from-[#0070ba]/10 to-[#009cde]/10 rounded-xl p-4 flex justify-between items-center">
                                    <span className="text-gray-700 font-bold text-lg">Final Price (NPR)</span>
                                    <span className="text-[#0070ba] font-bold text-3xl">Rs. 39,998.40</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">Size</label>
                                        <div className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                                            <span className="text-gray-900 font-semibold">Large</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">Color</label>
                                        <div className="bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                                            <span className="text-gray-900 font-semibold">Space Gray</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-50/30 rounded-2xl p-6 border-2 border-amber-200/50 space-y-6">
                            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                                <FaPenToSquare className="w-5 h-5 text-amber-600" />
                                Order Details
                            </h4>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Quantity</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#0070ba] focus:ring-4 focus:ring-blue-50 transition-all bg-white shadow-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="modal-comment" className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                                    Special Instructions (Optional)
                                </label>
                                <textarea
                                    id="modal-comment"
                                    placeholder="Size, color, or any other requirements..."
                                    value={specialInstructions}
                                    onChange={(e) => setSpecialInstructions(e.target.value)}
                                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#0070ba] focus:ring-4 focus:ring-blue-50 transition-all bg-white resize-none shadow-sm h-24"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex gap-4 rounded-b-3xl">
                    <button
                        onClick={handleCloseProductDetails}
                        className="flex-1 cursor-pointer bg-white border-2 border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl hover:bg-gray-100 font-semibold text-base transition-all transform hover:scale-[1.02]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddProductToList}
                        className="flex-1 bg-linear-to-r from-[#0070ba] to-[#009cde] text-white px-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 cursor-pointer transition-all transform hover:scale-[1.02]"
                    >
                        <FaCheck className="w-4 h-4" />
                        <span>Add Product</span>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    </>
    )
}