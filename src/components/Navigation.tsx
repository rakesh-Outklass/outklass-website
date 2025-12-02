import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location, "location")
    const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            let clickedInside = false
            for (const key in dropdownRefs.current) {
                if (
                    dropdownRefs.current[key] &&
                    dropdownRefs.current[key]!.contains(event.target as Node)
                ) {
                    clickedInside = true
                    break
                }
            }
            if (!clickedInside) setActiveDropdown(null)
        }
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    // Close dropdown when route changes
    useEffect(() => {
        setActiveDropdown(null)
    }, [location.pathname])
    const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/"
    const navItems = [
        { name: "Home", path: "/" },
        {
            name: "Courses",
            path: "/courses",
            dropdown: [
                { name: "All Courses", path: "/courses" },
                { name: "IoT Developer Program", path: "/course/iot" },
            ],
        },
        { name: "Career Support", path: "/career-support" },
        { name: "Events", path: "/events" },
        { name: "Contact", path: "/contact" },
    ]

    const handleDropdownToggle = (name: string) => {
        setActiveDropdown(prev => (prev === name ? null : name))
    }

    return (
        <>
            <nav
                className={`sticky top-0 w-full z-50 transition-all duration-500 ${
                    isScrolled
                        ? " backdrop-blur-lg shadow-2xl border-b border-blinkpath-orange"
                        : " backdrop-blur-sm"
                }`}>
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3 z-50">
                            <img
                                src="/assets/outklass-logo.png"
                                alt=" outklass"
                                className="h-8 md:h-10 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex gap-3">
                            <div className="nav-container">
                                {navItems.slice(0, 5).map(item => (
                                    <div
                                        key={item.name}
                                        className="relative space-x-4"
                                        ref={el =>
                                            (dropdownRefs.current[item.name] =
                                                el)
                                        }>
                                        <button
                                            onClick={() =>
                                                item.dropdown
                                                    ? handleDropdownToggle(
                                                          item.name
                                                      )
                                                    : navigate(item.path)
                                            }
                                            className={`nav-pill ${
                                                normalizePath(location.pathname) ===
                                                    normalizePath(item.path) ||
                                                (item.dropdown &&
                                                    item.dropdown.some(
                                                        dropItem =>
                                                            normalizePath(location.pathname).startsWith(
                                                                normalizePath(dropItem.path)
                                                            )
                                                    ))
                                                    ? "active"
                                                    : ""
                                            } ${
                                                item.dropdown
                                                    ? "flex items-center space-x-3"
                                                    : ""
                                            } 
          text-white hover:text-white`}>
                                            <span>{item.name}</span>
                                            {item.dropdown && (
                                                <ChevronDown className="w-3 h-3" />
                                            )}
                                        </button>

                                        {item.dropdown &&
                                            activeDropdown === item.name && (
                                                <div
                                                    className={`absolute top-full left-0 mt-2 w-56 backdrop-blur-md border rounded-xl shadow-2xl py-3 animate-slide-up z-50 bg-darkest-grey/95 border-gray-700`}>
                                                    {item.dropdown.map(
                                                        dropItem => (
                                                            <Link
                                                                key={
                                                                    dropItem.name
                                                                }
                                                                to={
                                                                    dropItem.path
                                                                }
                                                                onClick={() =>
                                                                    setActiveDropdown(
                                                                        null
                                                                    )
                                                                }
                                                                className={`block px-4 py-3 text-sm text-white hover:text-blinkpath-orange hover:bg-gray-800/50 mx-2 rounded-lg transition-all duration-200 ${
                                                                    normalizePath(location.pathname).startsWith(
                                                                        normalizePath(dropItem.path)
                                                                    )
                                                                        ? "text-blinkpath-orange font-semibold"
                                                                        : ""
                                                                }`}>
                                                                {dropItem.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button
                                variant="outline"
                                className="hover:scale-105 transition-all duration-300 border-blinkpath-orange text-blinkpath-orange hover:bg-blinkpath-orange hover:text-white bg-transparent backdrop-blur-sm">
                                Download Brochure
                            </Button>
                            <Link to={"/events"}>
                                <Button className="btn-glow hover:scale-105 transition-all duration-300 animate-neon-pulse">
                                    Join Free Workshop
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center space-x-2 lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white hover:text-blinkpath-orange transition-colors duration-300">
                                {isOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative flex flex-col w-full max-w-sm h-full bg-darkest-grey/95 backdrop-blur-md shadow-2xl animate-slide-in-right border-r border-gray-700">
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <img
                                src="/lovable-uploads/e12bb011-71f5-4323-9067-ad3d9d543f5a.png"
                                alt=" outklass"
                                className="h-8 w-auto"
                            />
                            <button onClick={() => setIsOpen(false)}>
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="px-6 space-y-4">
                                {navItems.map(item => (
                                    <div key={item.name}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block py-3 text-lg font-medium transition-colors duration-300 ${
                                                normalizePath(location.pathname) === normalizePath(item.path)
                                                    ? "text-blinkpath-orange"
                                                    : "text-white hover:text-blinkpath-orange"
                                            }`}>
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                {item.dropdown.map(dropItem => (
                                                    <Link
                                                        key={dropItem.name}
                                                        to={dropItem.path}
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        className="block py-2 text-sm text-gray-300 hover:text-blinkpath-orange transition-colors duration-300">
                                                        {dropItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="px-6 mt-8 space-y-4">
                                <Button
                                    variant="outline"
                                    className="w-full border-blinkpath-orange text-blinkpath-orange hover:bg-blinkpath-orange hover:text-white bg-transparent">
                                    Download Brochure
                                </Button>
                                <Link to={"/events"}>
                                    <Button className="w-full btn-glow">
                                        Join Free Workshop
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navigation

