"use client"
import {Link as Scroll} from "react-scroll"

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-6 shadow-lg font-hachimaru z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-lg font-bold tracking-tight hover:text-blue-400 transition duration-300 xl:text-2xl 2xl:text-3xl 3xl:text-3xl">
                    ぼくのぽーとふぉりお
                </h1>
                <nav className="space-x-4">
                    <Scroll to="about" smooth={true} duration={600} offset={-70} className="text-sm font-medium hover:text-blue-400 transition duration-300 base:text-base lg:text-lg xl:text-xl">あばうとみ</Scroll>
                    <Scroll to="works" smooth={true} duration={600} offset={-70} className="text-sm font-medium hover:text-blue-400 transition duration-300 base:text-base lg:text-lg xl:text-xl">わーくす</Scroll>
                </nav>
            </div>
        </header>
    )
}