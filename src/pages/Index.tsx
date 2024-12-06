import { useState, useEffect } from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ContactsList from "../components/ContactsList";
import ActivityTimeline from "../components/ActivityTimeline";
import QuickActions from "../components/QuickActions";
import { LoadingPage, LoadingCard } from "../components/ui/loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactsLoading, setContactsLoading] = useState(true);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Simulate contacts loading
    const contactsTimer = setTimeout(() => {
      setContactsLoading(false);
    }, 1500);

    // Simulate activities loading
    const activitiesTimer = setTimeout(() => {
      setActivitiesLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contactsTimer);
      clearTimeout(activitiesTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-screen bg-joey-warm">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <div className="space-y-2 animate-fade-up">
            <span className="inline-block px-3 py-1 bg-joey-sage/10 text-joey-sage text-sm font-medium rounded-full">
              Home Overview
            </span>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Grant</h1>
            <p className="text-joey-muted">Here's what's happening in your child's digital world</p>
          </div>

          <Dashboard />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              {contactsLoading ? (
                <LoadingCard />
              ) : (
                <ContactsList />
              )}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              {activitiesLoading ? (
                <LoadingCard />
              ) : (
                <ActivityTimeline />
              )}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;