import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8 md:mt-12">
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">About Madhesh Matters</h3>
            <p className="text-xs md:text-sm leading-relaxed">
              Madhesh Matters is a modern digital news platform that delivers the latest updates on politics, society, and current affairs from Nepal and around the world. Our goal is to provide reliable, timely, and easy-to-understand news for readers who want to stay informed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/latest-news" className="hover:text-red-500 transition-colors">Latest News</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Categories</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/category/local-news" className="hover:text-red-500 transition-colors">Local News</Link></li>
              <li><Link to="/category/foreign-news" className="hover:text-red-500 transition-colors">Foreign News</Link></li>
              <li><Link to="/category/sports-live" className="hover:text-red-500 transition-colors">Sports</Link></li>
              <li><Link to="/category/business-live" className="hover:text-red-500 transition-colors">Business</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>Janakpur, Nepal</li>
              <li>Dhanusa District, Madhesh Province</li>
              <li>Nepal</li>
              <li className="pt-1 md:pt-2">
                <a href="mattermadhesh@gmail.com" className="hover:text-red-500 transition-colors">
                  mattermadhesh@gmail.com
                </a>
              </li>
              <li className="pt-1 md:pt-2">
                <a 
                  href="tel:+977 9849745645" 
                  className="hover:text-red-500 transition-colors"
                >
                  +977 9849745645
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
            {/* Copyright and Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm">
               <p>
                © <script>document.write(new Date().getFullYear())</script> Madhesh Matters. All rights reserved. |
                  Made by <a href="https://www.instagram.com/mites.shh/" className="hover:text-red-500 transition-colors">Mitesh Mandal</a>
                  </p>
              <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-red-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
