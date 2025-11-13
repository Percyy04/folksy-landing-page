import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <a href="/" className="flex flex-col items-center">
              <span className="text-2xl font-bold tracking-wider text-primary">FOLKSIGHT</span>
              <span className="text-xs tracking-widest text-muted-foreground">Embrace Heritage</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/ve-chung-toi" className="text-sm font-medium hover:text-primary transition-colors">
              Về Chúng Tôi
            </a>
            <a href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </a>
            <a href="/gift-set" className="text-sm font-medium hover:text-primary transition-colors">
              Gift Set
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            <select className="hidden md:block text-sm border-none bg-transparent focus:outline-none cursor-pointer">
              <option value="vi">vi</option>
              <option value="en">en</option>
            </select>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-border animate-in slide-in-from-top-2">
            <Input
              type="search"
              placeholder="Search..."
              className="max-w-md mx-auto"
              autoFocus
            />
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border animate-in slide-in-from-top-2">
            <a href="/" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/ve-chung-toi" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Về Chúng Tôi
            </a>
            <a href="/shop" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Shop
            </a>
            <a href="/gift-set" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Gift Set
            </a>
            <a href="/blog" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
