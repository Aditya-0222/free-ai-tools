import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12" />
            Free AI Tools Directory
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-100 sm:text-2xl md:mt-5 md:max-w-3xl">
            Discover the best free AI tools available online
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}