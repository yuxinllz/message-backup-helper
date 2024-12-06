import { Shield, FileText, Scan, User } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      icon: Shield,
      label: "View Flags",
      description: "View green, yellow, & red flag alerts",
      to: "/flags"
    },
    {
      icon: FileText,
      label: "View Report",
      description: "View online activity report",
      to: "/report"
    },
    {
      icon: Scan,
      label: "Sync",
      description: "Scan your child's phone",
      to: "/sync"
    },
    {
      icon: User,
      label: "Your Kids",
      description: "Manage your child's profile",
      to: "/profile"
    },
  ];

  return (
    <div className="space-y-4 animate-fade-up">
      <h2 className="text-xl font-semibold">Quick Actions</h2>
      
      <div className="flex flex-nowrap gap-4 overflow-x-auto pb-2">
        {actions.map((action) => {
          const Icon = action.icon;
          
          return (
            <Link
              key={action.label}
              to={action.to}
              className="flex-1 min-w-[200px] p-4 rounded-xl bg-white border border-gray-100 hover:border-joey-sage hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-joey-warm rounded-lg group-hover:bg-joey-sage/10 transition-colors">
                  <Icon className="w-6 h-6 text-joey-sage" />
                </div>
                <p className="font-medium">{action.label}</p>
                <p className="text-sm text-joey-muted">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;