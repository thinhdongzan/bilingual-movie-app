import { Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-4 md:px-10 py-5 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-black/90 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold text-[#FBBF24]">NihongoFlix</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row items-center gap-4 text-white">
                <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300">Home</a>
                <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300">Movies</a>
                <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300">Learning</a>
            </div>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex flex-row items-center gap-4 text-white">
                <a href="#"><Search className="w-6 h-6 text-white hover:text-[#FBBF24] transition-all duration-300" /></a>
                <a href="/register" className="border-none px-4 py-2 font-semibold rounded-lg hover:text-[#FBBF24] transition-all duration-300">Sign up</a>
                <a href="/login" className="bg-[#FBBF24] px-4 py-2 rounded-lg text-[#111827] font-semibold hover:bg-[#FBBF24]/80 transition-all duration-300">Login</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
                <a href="#"><Search className="w-5 h-5 text-white hover:text-[#FBBF24] transition-all duration-300" /></a>
                <button 
                    onClick={toggleMenu}
                    className="text-white hover:text-[#FBBF24] transition-all duration-300"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800">
                    <div className="flex flex-col p-4 space-y-4">
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col space-y-3">
                            <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300 py-2 border-b border-gray-800">Home</a>
                            <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300 py-2 border-b border-gray-800">Movies</a>
                            <a href="#" className="text-white hover:text-[#FBBF24] transition-all duration-300 py-2 border-b border-gray-800">Learning</a>
                        </div>
                        
                        {/* Mobile Action Buttons */}
                        <div className="flex flex-col space-y-3 pt-4">
                            <a href="/register" className="text-white hover:text-[#FBBF24] transition-all duration-300 py-2 text-center">Sign up</a>
                            <a href="/login" className="bg-[#FBBF24] py-3 rounded-lg text-[#111827] font-semibold hover:bg-[#FBBF24]/80 transition-all duration-300 text-center">Login</a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;