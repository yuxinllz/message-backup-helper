import React from 'react';
import { Badge } from '@/components/ui/badge';
import ContactStatusButtons from './ContactStatusButtons';

interface Contact {
  id: number;
  name: string;
  fullName: string;
  platforms: string[];
  firstMessageDate: string;
  lastMessageDate: string;
  messageCount: number;
  averageMessagesPerMonth: number;
  status: string;
}

interface ContactDetailsRowProps {
  contact: Contact;
  onUpdateContactStatus: (contactId: number, newStatus: string) => void;
}

const ContactDetailsRow: React.FC<ContactDetailsRowProps> = ({ 
  contact, 
  onUpdateContactStatus 
}) => {
  const handleStatusUpdate = (newStatus: string) => {
    onUpdateContactStatus(contact.id, newStatus);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Contact Details</h3>
          <div className="space-y-2">
            <p><span className="text-gray-600">Full Name:</span> {contact.fullName}</p>
            <p>
              <span className="text-gray-600">Platforms:</span>{' '}
              {contact.platforms.map((platform) => (
                <Badge key={platform} variant="secondary" className="mr-1">
                  {platform}
                </Badge>
              ))}
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Message Statistics</h3>
          <div className="space-y-2">
            <p><span className="text-gray-600">First Message:</span> {contact.firstMessageDate}</p>
            <p><span className="text-gray-600">Last Message:</span> {contact.lastMessageDate}</p>
            <p><span className="text-gray-600">Total Messages:</span> {contact.messageCount}</p>
            <p><span className="text-gray-600">Avg Messages/Month:</span> {contact.averageMessagesPerMonth}</p>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t">
        <h3 className="font-semibold mb-2">Trust Status</h3>
        <ContactStatusButtons 
          currentStatus={contact.status} 
          onUpdateStatus={handleStatusUpdate} 
        />
      </div>
    </div>
  );
};

export default ContactDetailsRow;