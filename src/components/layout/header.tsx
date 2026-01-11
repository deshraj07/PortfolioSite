import  { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'; // Adjust path
import { Button } from '@/components/ui/button'; // Adjust path
import { Menu, X, Sun, Moon } from 'lucide-react'; // Icons from Lucide (install via npm)
import { useLocation } from 'react-router-dom';
import { useTabChangeStore } from '@/store/tab.store';

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Replace with your theme context

  // Handle scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { activeTab, changeTab } = useTabChangeStore();

  useEffect(()=>{changeTab(location.hash)},[location])


  // Toggle dark mode (integrate with your theme provider)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <a href="#home">Desh Raj</a>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#home" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#home"? " text-green-500":""} `}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#about"? " text-green-500":""} `}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#education" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#education"? " text-green-500":""} `}>
              Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skills" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#skills"? " text-green-500":""} `}>
              Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#projects"? " text-green-500":""} `}>   
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className ={` px-4 py-2 hover:text-primary transition-colors ${activeTab === "#contact"? " text-green-500":""} `}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Dark Mode Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:flex">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-lg hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button variant="ghost" onClick={toggleDarkMode} className="flex items-center space-x-2">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span>Toggle Theme</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;