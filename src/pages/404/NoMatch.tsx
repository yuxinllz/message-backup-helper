import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const NoMatch = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-lg">
        <Shield className="w-16 h-16 text-joey-sage mx-auto" />
        
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        
        <p className="text-gray-600">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        
        <Link to="/home">
          <Button className="bg-joey-sage hover:bg-joey-sage/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;