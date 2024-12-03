import { User, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ContactsList = () => {
  const contacts = [
    { 
      id: 1, 
      name: "Sarah Wilson", 
      platform: "iMessages", 
      status: "trusted",
      messageCount: 145 
    },
    { 
      id: 2, 
      name: "Mike Johnson", 
      platform: "WhatsApp", 
      status: "new",
      messageCount: 67 
    },
    { 
      id: 3, 
      name: "Emma Davis", 
      platform: "Snapchat", 
      status: "trusted",
      messageCount: 89 
    },
  ];

  return (
    <div className="space-y-4 animate-fade-up">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Contact Monitoring</h2>
        <Link 
          to="/contacts" 
          className="text-sm text-joey-sage hover:text-joey-accent transition-colors"
        >
          View All
        </Link>
      </div>
      
      <div className="space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-4 rounded-lg bg-white border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-joey-warm rounded-full">
                <User className="w-5 h-5 text-joey-sage" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{contact.name}</p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    contact.status === 'trusted' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {contact.status}
                  </span>
                </div>
                <p className="text-sm text-joey-muted">{contact.platform}</p>
                <div className="flex items-center gap-1 mt-1 text-sm text-joey-muted">
                  <MessageSquare className="w-4 h-4" />
                  <span>{contact.messageCount} messages this week</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;