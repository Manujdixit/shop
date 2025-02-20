"use client";

import { useState } from "react";
import { useFilter } from "@/contexts/FilterContext";

export function FilterSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { priceRange, setPriceRange, brand, setBrand, rating, setRating } =
    useFilter();

  const handleMinPriceChange = (value: string) => {
    const minPrice = Math.min(Number(value), priceRange[1]);
    setPriceRange([minPrice, priceRange[1]]);
  };

  const handleMaxPriceChange = (value: string) => {
    const maxPrice = Math.max(Number(value), priceRange[0]);
    setPriceRange([priceRange[0], maxPrice]);
  };

  const resetPriceRange = () => {
    setPriceRange([0, 1000]);
  };

  const resetBrand = () => {
    setBrand("");
  };

  const resetRating = () => {
    setRating("");
  };

  const resetAllFilters = () => {
    resetPriceRange();
    resetBrand();
    resetRating();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center"
        >
          <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
          <svg
            className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {(priceRange[0] > 0 || priceRange[1] < 1000 || brand || rating) && (
          <button
            onClick={resetAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Reset All
          </button>
        )}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-200 ease-in-out ${
          isExpanded ? "mt-6 opacity-100" : "h-0 mt-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-semibold text-gray-700">
              Price Range
            </label>
            {(priceRange[0] > 0 || priceRange[1] < 1000) && (
              <button
                onClick={resetPriceRange}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            )}
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="number"
                id="min-price"
                min={0}
                max={1000}
                value={priceRange[0]}
                onChange={(e) => handleMinPriceChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label
                htmlFor="min-price"
                className="block text-xs text-gray-500 mb-1"
              >
                Min ($)
              </label>
            </div>
            <div className="flex-1">
              <input
                type="number"
                id="max-price"
                min={0}
                max={1000}
                value={priceRange[1]}
                onChange={(e) => handleMaxPriceChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label
                htmlFor="max-price"
                className="block text-xs text-gray-500 mb-1"
              >
                Max ($)
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="brand"
              className="block text-sm font-semibold text-gray-700"
            >
              Brand
            </label>
            {brand && (
              <button
                onClick={resetBrand}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            )}
          </div>
          <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em]"
          >
            <option value="">All Brands</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label
              htmlFor="rating"
              className="block text-sm font-semibold text-gray-700"
            >
              Rating
            </label>
            {rating && (
              <button
                onClick={resetRating}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Reset
              </button>
            )}
          </div>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100 focus:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em]"
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>
        </div>
      </div>
    </div>
  );
}
