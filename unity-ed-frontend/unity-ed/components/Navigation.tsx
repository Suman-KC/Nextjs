import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
export function Navigation() {
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/login" className="flex items-center gap-2">
            <GraduationCap size={28} className="text-[#1C4E80]" />
            <span className="text-2xl font-bold text-[#1C4E80]">UnityED</span>
          </Link>
        </div>
      </div>
    </nav>;
}