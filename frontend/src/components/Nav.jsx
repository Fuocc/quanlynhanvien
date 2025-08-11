import { NavLink } from "react-router-dom";
import { assets, navLinks } from "../assets/assets.js";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-white border-b border-b-[rgba(0,0,0,0.15)] sticky top-0 left-0 z-100">
            <div className="center-between content-width lg:px-[6%] lg:py-6">
                <div className="relative z-100  max-lg:px-[6%] max-lg:py-6 max-lg:min-h-[92px] flex items-center justify-between w-full lg:w-auto lg:gap-20 bg-white max-md:border-b border-b-[rgba(0,0,0,0.15)]">
                    <a href="/">
                        <img
                            src={assets.logo}
                            alt="logo"
                            className="max-md:h-12 max-sm:h-10"
                        />
                    </a>

                    {/* Hamburger button for mobile */}
                    <button
                        className="flex flex-col gap-1.5 cursor-pointer lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span
                            className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                                mobileMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-[#1f2937] transition-all duration-300 ${
                                mobileMenuOpen
                                    ? "-rotate-45 -translate-y-2"
                                    : ""
                            }`}
                        ></span>
                    </button>

                    {/* Desktop menu */}
                    <ul className="hidden lg:flex align-center  justify-between gap-8 text-base font-medium color-black">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative">
                                {link.children ? (
                                    <>
                                        <button
                                            className="center-between gap-2 cursor-pointer"
                                            onClick={() => setOpen(!open)}
                                        >
                                            {link.name}
                                            <img
                                                src={assets.arrowDown}
                                                alt="dropdown arrow"
                                                className=""
                                            />
                                        </button>

                                        {open ? (
                                            <ul className="absolute flex flex-col gap-2 w-max top-full left-0 mt-3 px-3 py-3 rounded-[10px] bg-white shadow-base z-10">
                                                {link.children.map((child) => (
                                                    <li key={child.href}>
                                                        <NavLink
                                                            to={child.href}
                                                            className="block px-4 py-2 rounded-sm hover:bg-gray-100"
                                                            onClick={() =>
                                                                setOpen(null)
                                                            }
                                                        >
                                                            {child.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </>
                                ) : (
                                    <NavLink to={link.href} end>
                                        {link.name}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop button */}
                <div className="hidden lg:block">
                    <Button isStroke>Dùng thử miễn phí</Button>
                </div>

                {/* Mobile menu overlay */}
                <div
                    className={`fixed inset-0 bg-black/70 z-20 transition-opacity duration-300 lg:hidden ${
                        mobileMenuOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className={`fixed inset-0 h-max w-screen bg-white shadow-lg transform transition-transform duration-300 z-30 pb-8 ${
                            mobileMenuOpen
                                ? "translate-y-[92px]"
                                : "-translate-y-full"
                        }`}
                    >
                        <div className="p-8 flex flex-col h-full gap-16">
                            <ul className="flex flex-col gap-12 text-xl font-medium color-black">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.children ? (
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    className="flex justify-between items-center cursor-pointer"
                                                    onClick={() =>
                                                        setOpen(
                                                            open === link.name
                                                                ? null
                                                                : link.name
                                                        )
                                                    }
                                                >
                                                    {link.name}
                                                    <img
                                                        src={assets.arrowDown}
                                                        alt="dropdown arrow"
                                                        className={`transition-transform duration-300 ${
                                                            open === link.name
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>

                                                {open === link.name && (
                                                    <ul className="flex flex-col gap-2 pl-4 mt-2">
                                                        {link.children.map(
                                                            (child) => (
                                                                <li
                                                                    key={
                                                                        child.href
                                                                    }
                                                                >
                                                                    <NavLink
                                                                        to={
                                                                            child.href
                                                                        }
                                                                        className="block py-2"
                                                                        onClick={() => {
                                                                            setOpen(
                                                                                null
                                                                            );
                                                                            setMobileMenuOpen(
                                                                                false
                                                                            );
                                                                        }}
                                                                    >
                                                                        {
                                                                            child.name
                                                                        }
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={link.href}
                                                end
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                {link.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            <div className="">
                                <Button
                                    isStroke={false}
                                    className="justify-center"
                                >
                                    Dùng thử miễn phí
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
