import React, { useState } from 'react';
import Header from "../components/Header";
import { Shield, AlertTriangle, Download, ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const notifications = [
  {
    id: 1,
    type: 'contact',
    title: 'New Contact Request',
    description: 'John Doe wants to connect with your child',
    timestamp: '2 hours ago',
    severity: 'warning',
    details: {
      contactName: 'John Doe',
      platform: 'Instagram',
      mutualFriends: 2,
      action: "During a casual conversation, ask about their Instagram friends and show interest in learning about John Doe. This opens up a natural dialogue about online connections."
    }
  },
  {
    id: 2,
    type: 'app',
    title: 'New App Detected',
    description: 'TikTok was installed on your child\'s device',
    timestamp: '1 day ago',
    severity: 'warning',
    details: {
      appName: 'TikTok',
      installDate: '2024-03-21 14:30',
      deviceName: 'iPhone 13',
      category: 'Social Media',
      action: "Share some interesting TikTok trends you've heard about and ask if they could show you how the app works. This creates an opportunity to discuss responsible usage together."
    }
  },
  {
    id: 3,
    type: 'content',
    title: 'Inappropriate Content Alert',
    description: 'Attempted access to restricted content detected',
    timestamp: '3 days ago',
    severity: 'high',
    details: {
      url: 'www.example.com/restricted',
      accessTime: '2024-03-19 16:45',
      category: 'Adult Content',
      deviceName: 'MacBook Pro',
      action: "Schedule a general conversation about online safety and ask about their recent online experiences. This provides a comfortable space to discuss concerns without direct confrontation."
    }
  }
];

const NotificationCard = ({ notification }: { notification: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDetails = () => {
    const details = notification.details;
    return (
      <div className="space-y-2 mt-4 text-sm">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-joey-muted capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
            <span className="font-medium">{value as string}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="animate-fade-in">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {notification.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge 
              variant={notification.severity === 'high' ? 'destructive' : 'default'}
              className="ml-2"
            >
              {notification.severity === 'high' ? 'High Priority' : 'Warning'}
            </Badge>
            <CollapsibleTrigger asChild>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{notification.description}</CardDescription>
          <p className="text-sm text-joey-muted mt-2">{notification.timestamp}</p>
          <CollapsibleContent className="animate-accordion-down">
            {renderDetails()}
          </CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card>
  );
};

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-joey-muted">Monitor your child's digital activity</p>
          </div>

          <ScrollArea className="h-[600px] rounded-md border">
            <div className="space-y-4 p-4">
              {notifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default Notifications;