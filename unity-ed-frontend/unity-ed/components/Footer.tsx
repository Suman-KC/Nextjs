import Link from "next/link";
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#143E73] mb-2">UnityED</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering learning through interactive, gamified educational experiences that engage students and inspire teachers.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-[#316CF4] text-white flex items-center justify-center hover:bg-[#2554C7] transition-all hover:shadow-md">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#316CF4] text-white flex items-center justify-center hover:bg-[#2554C7] transition-all hover:shadow-md">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#316CF4] text-white flex items-center justify-center hover:bg-[#2554C7] transition-all hover:shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[#143E73] mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[#143E73] mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-[#143E73] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[#143E73] mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#316CF4] transition-colors text-sm">
                  Data Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#143E73] mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Get the latest updates on new features, educational tips, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                />
              </div>
              <button className="bg-[#316CF4] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2554C7] transition-all shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} UnityED. All rights reserved. Empowering education worldwide.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-[#316CF4] text-sm transition-colors">
                Accessibility
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#316CF4] text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#316CF4] text-sm transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
