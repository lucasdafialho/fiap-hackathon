
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="hp-container">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b border-gray-200">
          <div className="text-xs space-x-4 hidden md:flex">
            <a href="#" className="hover:text-hp-blue transition-colors">Para casa</a>
            <a href="#" className="hover:text-hp-blue transition-colors">Para empresas</a>
            <a href="#" className="hover:text-hp-blue transition-colors">Suporte</a>
          </div>
          <div className="text-xs space-x-4 hidden md:flex">
            <a href="#" className="hover:text-hp-blue transition-colors">Contato</a>
            <a href="#" className="hover:text-hp-blue transition-colors">Minha conta</a>
          </div>
        </div>
        
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="mr-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png" 
                alt="HP Logo" 
                className="h-8"
              />
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-hp-blue transition-colors">Laptops</a>
              <a href="#" className="font-medium hover:text-hp-blue transition-colors">Desktops</a>
              <a href="#" className="font-medium hover:text-hp-blue transition-colors">Impressoras</a>
              <a href="#" className="font-medium hover:text-hp-blue transition-colors">Monitores</a>
              <a href="#" className="font-medium hover:text-hp-blue transition-colors">Acessórios</a>
            </nav>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-hp-blue transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-hp-blue transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-hp-blue transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button 
              className="p-2 hover:text-hp-blue transition-colors lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md animate-slide-in-bottom">
          <div className="hp-container py-4 space-y-4">
            <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Laptops</a>
            <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Desktops</a>
            <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Impressoras</a>
            <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Monitores</a>
            <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Acessórios</a>
            <div className="pt-2 border-t border-gray-200">
              <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Para casa</a>
              <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Para empresas</a>
              <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Suporte</a>
              <a href="#" className="block py-2 hover:text-hp-blue transition-colors">Contato</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
