import { Shield, Bell, Scan } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const notificationCount = 3;

  const isActive = (path: string) => {
    return location.pathname === path ? "text-joey-sage" : "text-gray-600";
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-joey-sage" />
            <span className="text-2xl font-semibold bg-gradient-to-r from-joey-sage to-joey-accent bg-clip-text text-transparent">
              Joey
            </span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/home" 
              className={`${isActive('/home')} hover:text-joey-sage transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/contacts" 
              className={`${isActive('/contacts')} hover:text-joey-sage transition-colors`}
            >
              Contacts
            </Link>
            <Link 
              to="/sync" 
              className={`${isActive('/sync')} hover:text-joey-sage transition-colors flex items-center gap-2`}
            >
              <Scan className="w-4 h-4" />
              Sync
            </Link>
            <Link 
              to="/blog" 
              className={`${isActive('/blog')} hover:text-joey-sage transition-colors`}
            >
              Blog
            </Link>
            <Link 
              to="/profile" 
              className={`${isActive('/profile')} hover:text-joey-sage transition-colors`}
            >
              Profile
            </Link>
            <Link 
              to="/notifications" 
              className={`relative p-2 ${isActive('/notifications')} hover:text-joey-sage transition-colors`}
            >
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-joey-sage rounded-full">
                  {notificationCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;