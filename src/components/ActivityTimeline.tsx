import { MessageSquare } from "lucide-react";
import { NoData } from "./ui/no-data";

const ActivityTimeline = () => {
  const activities = [
    {
      id: 1,
      app: "iMessages",
      messageCount: 145,
      icon: MessageSquare,
    },
    {
      id: 2,
      app: "WhatsApp",
      messageCount: 67,
      icon: MessageSquare,
    },
    {
      id: 3,
      app: "Snapchat",
      messageCount: 89,
      icon: MessageSquare,
    },
  ];

  return (
    <div className="space-y-4 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Weekly Activity</h2>
        <button className="text-sm text-joey-sage hover:text-joey-accent transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.length === 0 ? (
          <NoData message="No activity found" />
        ) : (
          activities.map((activity) => {
            const Icon = activity.icon;
            
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              >
                <div className="p-2 bg-joey-warm rounded-lg">
                  <Icon className="w-5 h-5 text-joey-sage" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.app}</p>
                  <p className="text-sm text-joey-muted">{activity.messageCount} messages this week</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ActivityTimeline;