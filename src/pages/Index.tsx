import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ContactsList from "../components/ContactsList";
import ActivityTimeline from "../components/ActivityTimeline";
import QuickActions from "../components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-joey-warm text-joey-sage text-sm font-medium rounded-full">
              Home Overview
            </span>
            <h1 className="text-3xl font-bold">Welcome back, Grant</h1>
            <p className="text-joey-muted">Here's what's happening in your child's digital world</p>
          </div>

          <Dashboard />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ContactsList />
            <ActivityTimeline />
          </div>
          
          <QuickActions />
        </div>
      </main>
    </div>
  );
};

export default Index;