"use client"
import PriceOrder from "./order"
import StoreSection from "./storeSection"
import FindStore from "./findStore"
import ProductDialog from "./productsDialog"
import { useEffect, useState } from "react";


export default function ProductCalculator() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
}, []);

if (!mounted) return null;

  return (
    <div className="bg-linear-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <PriceOrder />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <ProductDialog />
        <div className="mt-12 md:mt-20 border-t border-gray-200 pt-16 px-4 sm:px-6 lg:px-0">
          <StoreSection />
          <FindStore />
        </div>
      </div>
    </div>
  )
}