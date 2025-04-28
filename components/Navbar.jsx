import React, { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = ["About Us", "News", "Docs", "Login"];

    return (
        <div className="sticky top-0 bg-black backdrop-blur-md rounded-md z-30 border-b border-gray-800 border-opacity-50">
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-4">
                    <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
                    <span className="text-xl font-bold text-gray-400">
                        <h1>URL SHORTENER</h1>
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-10 mr-8">
                    {navItems.map((item) => (
                        <span
                            key={item}
                            className="text-base font-medium text-gray-400 cursor-pointer hover:text-gray-300 transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-gray-400 focus:outline-none"
                    >
                        <div className="space-y-1">
                            <div className="w-7 h-0.5 bg-gray-400"></div>
                            <div className="w-7 h-0.5 bg-gray-400"></div>
                            <div className="w-7 h-0.5 bg-gray-400"></div>
                        </div>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col p-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-400 text-4xl focus:outline-none"
                        >
                            ×
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-grow space-y-12">
                        {navItems.map((item) => (
                            <span
                                key={item}
                                className="text-3xl font-semibold text-gray-400 cursor-pointer hover:text-gray-300 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;