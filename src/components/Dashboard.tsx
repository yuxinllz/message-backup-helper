import { Users, Clock, Shield } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="animate-fade-up space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-joey-warm rounded-lg">
              <Users className="w-6 h-6 text-joey-sage" />
            </div>
            <div>
              <p className="text-sm text-joey-muted">Active Contacts</p>
              <p className="text-2xl font-semibold">23</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-joey-warm rounded-lg">
              <Clock className="w-6 h-6 text-joey-sage" />
            </div>
            <div>
              <p className="text-sm text-joey-muted">Online Time Today</p>
              <p className="text-2xl font-semibold">2.5h</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-joey-warm rounded-lg">
              <Shield className="w-6 h-6 text-joey-sage" />
            </div>
            <div>
              <p className="text-sm text-joey-muted">Safety Score</p>
              <p className="text-2xl font-semibold">92%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;