import React from "react";
import { Link, useLocation} from "react-router-dom";

function Navigation() {
    let location = useLocation();

    const links =[

    { label: "Home", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact Me", path: "/contact" },
    { label: "Resume", path: "/resume" },
    ];

    const renderLinks = links.map((link) => {
        const active = location.pathname === link.path;
        const activeClass = active ? "text-red-500" : "text-blue-500"
        return (
            <li key={link.label}>
                <Link to={link.path} className={`mb-3 hover:text-blue-500 ${activeClass} tex-sm`}>
                    {link.label}
                </Link>
            </li>
        )
    })
    return (
        <div>
            <ul className="flex-justify-center space-x-4 text-sm">{renderLinks}</ul>
        </div>
    )
}

export default Navigation;

