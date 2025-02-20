"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { mockProducts } from "@/data/products";
import { useFilter } from "@/contexts/FilterContext";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const { setSearchQuery } = useFilter();
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      setSearchQuery(searchQuery.trim());
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Generate suggestions based on product names
    if (value.trim()) {
      const filtered = mockProducts
        .filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
        .map((product) => product.name)
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="relative w-full max-w-xl" ref={suggestionRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-500"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
                handleSearch(suggestion);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
