import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src='/logo.png' />
                        </div>
                        <p className="text-sm">
                            Your trusted partner for professional auto care and maintenance services.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#features" className="hover:text-blue-400 transition-colors">Why Us</a></li>
                            <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>General Maintenance</li>
                            <li>Premium Detailing</li>
                            <li>Diagnostics</li>
                            <li>Paint Protection</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2025 AutoCare Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer