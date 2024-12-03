import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, XOctagon } from 'lucide-react';

interface ContactStatusButtonsProps {
  currentStatus: string;
  onUpdateStatus: (newStatus: string) => void;
}

const ContactStatusButtons: React.FC<ContactStatusButtonsProps> = ({ 
  currentStatus, 
  onUpdateStatus 
}) => {
  if (currentStatus === 'new') {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-green-100 text-green-800 hover:bg-green-50"
        onClick={() => onUpdateStatus('trusted')}
      >
        <Shield className="w-4 h-4 mr-2" />
        Mark as Trusted
      </Button>
    );
  }

  if (currentStatus === 'trusted') {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-red-100 text-red-800 hover:bg-red-50"
        onClick={() => onUpdateStatus('not_trusted')}
      >
        <XOctagon className="w-4 h-4 mr-2" />
        Mark as Untrusted
      </Button>
    );
  }

  // For not_trusted status
  return (
    <Button
      variant="outline"
      size="sm"
      className="border-green-100 text-green-800 hover:bg-green-50"
      onClick={() => onUpdateStatus('trusted')}
    >
      <Shield className="w-4 h-4 mr-2" />
      Mark as Trusted
    </Button>
  );
};

export default ContactStatusButtons;