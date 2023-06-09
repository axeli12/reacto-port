import React from "react";
import Navigation from "./navigation"

function Header () {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-lg px-4 py-3">
            <div className=" max-w-7xl mx-auto flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">AxelI</h3>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;