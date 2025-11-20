import React from 'react'
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Car, User, LogOut, Shield } from "lucide-react";
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
    const user = await checkUser();
    const isAdmin = user?.role === 'ADMIN'

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"

                >
                    <Link href={'/'}>
                        <img src={'/logo.png'} className='max-h-14' /></Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href='/'><button

                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Home
                    </button></Link>
                    <Link href='/about'><button

                        className={"text-gray-700 hover:text-blue-600 transition-colors"}
                    >
                        About
                    </button></Link>
                    <Link href='/services'>
                        <button

                            className={"text-gray-700 hover:text-blue-600 transition-colors"}
                        >
                            Services
                        </button></Link>
                    <Link href='/products'>
                        <button

                            className={"text-gray-700 hover:text-blue-600 transition-colors"}
                        >
                            Products
                        </button></Link>
                    <Link href='/team'>
                        <button

                            className={"text-gray-700 hover:text-blue-600 transition-colors"}
                        >
                            Team
                        </button></Link>
                    <Link href='/contact'><button

                        className={"text-gray-700 hover:text-blue-600 transition-colors"}
                    >
                        Contact
                    </button></Link>
                </nav>

                {isAdmin ? (
                    <div>
                        <Button

                            className="bg-purple-600 hover:bg-purple-700"
                        >
                            <Shield className="w-4 h-4 mr-2" />
                            Admin Dashboard
                        </Button>
                    </div>
                ) : (
                    <Button

                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        <Link href='/booking'>Book Now</Link>
                    </Button>
                )}

                <div className='space-x-5'>
                    <SignedOut>
                        <SignInButton>
                            <Button variant='ghost'>Login</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button className='bg-blue-600 hover:bg-blue-700'>Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{ elements: { avatarBox: { width: '3rem', height: '3rem' } } }} userProfileMode='navigation' userProfileUrl={`/user/${user?.id}`} />
                    </SignedIn>
                </div>
            </div>
        </header >
    )
}

export default Header