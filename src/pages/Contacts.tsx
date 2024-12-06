import React, { useState } from 'react';
import Header from "../components/Header";
import { Shield, MessageSquare, ChevronDown, ChevronUp, XOctagon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ContactDetailsRow from '@/components/contacts/ContactDetailsRow';

interface Contact {
  id: number;
  name: string;
  platform: string;
  status: string;
  messageCount: number;
  fullName: string;
  platforms: string[];
  firstMessageDate: string;
  lastMessageDate: string;
  averageMessagesPerMonth: number;
}

const Contacts = () => {
  const { toast } = useToast();
  const [expandedContact, setExpandedContact] = useState<number | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([
    { 
      id: 1, 
      name: "Sarah Wilson", 
      platform: "iMessages", 
      status: "trusted",
      messageCount: 145,
      fullName: "Sarah Jane Wilson",
      platforms: ["iMessages", "WhatsApp"],
      firstMessageDate: "2024-01-15",
      lastMessageDate: "2024-03-20",
      averageMessagesPerMonth: 72
    },
    { 
      id: 2, 
      name: "Mike Johnson", 
      platform: "WhatsApp", 
      status: "new",
      messageCount: 67,
      fullName: "Michael Robert Johnson",
      platforms: ["WhatsApp"],
      firstMessageDate: "2024-02-01",
      lastMessageDate: "2024-03-19",
      averageMessagesPerMonth: 33
    },
    { 
      id: 3, 
      name: "Emma Davis", 
      platform: "Snapchat", 
      status: "trusted",
      messageCount: 89,
      fullName: "Emma Louise Davis",
      platforms: ["Snapchat", "iMessages"],
      firstMessageDate: "2024-01-20",
      lastMessageDate: "2024-03-21",
      averageMessagesPerMonth: 44
    },
    { 
      id: 4, 
      name: "James Smith", 
      platform: "iMessages", 
      status: "new",
      messageCount: 234,
      fullName: "James William Smith",
      platforms: ["iMessages"],
      firstMessageDate: "2024-02-15",
      lastMessageDate: "2024-03-21",
      averageMessagesPerMonth: 117
    },
    { 
      id: 5, 
      name: "Olivia Brown", 
      platform: "WhatsApp", 
      status: "trusted",
      messageCount: 178,
      fullName: "Olivia Grace Brown",
      platforms: ["WhatsApp", "Snapchat"],
      firstMessageDate: "2024-01-10",
      lastMessageDate: "2024-03-20",
      averageMessagesPerMonth: 89
    }
  ]);

  const toggleExpand = (contactId: number) => {
    setExpandedContact(expandedContact === contactId ? null : contactId);
  };

  const updateContactStatus = (contactId: number, newStatus: string) => {
    setContacts(contacts.map(contact => {
      if (contact.id === contactId) {
        return { ...contact, status: newStatus };
      }
      return contact;
    }));

    const statusMessages = {
      trusted: "Contact marked as Trusted",
      not_trusted: "Contact marked as Not Trusted",
      new: "Contact marked as New"
    };

    toast({
      title: "Status Updated",
      description: statusMessages[newStatus as keyof typeof statusMessages],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-joey-warm text-joey-sage text-sm font-medium rounded-full">
              Contacts Overview
            </span>
            <h1 className="text-3xl font-bold">Contact List</h1>
            <p className="text-joey-muted">Monitor your child's messaging activity across different platforms</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <ScrollArea className="h-[600px] rounded-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Messages (Last 30 Days)</TableHead>
                    <TableHead className="w-[100px]">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <React.Fragment key={contact.id}>
                      <TableRow className="hover:bg-gray-50/50">
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.platform}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                            contact.status === 'trusted' 
                              ? 'bg-green-100 text-green-800'
                              : contact.status === 'not_trusted'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {contact.status === 'trusted' && <Shield className="w-3 h-3" />}
                            {contact.status === 'not_trusted' && <XOctagon className="w-3 h-3" />}
                            {contact.status === 'trusted' && 'Trusted'}
                            {contact.status === 'not_trusted' && 'Not Trusted'}
                            {contact.status === 'new' && 'New'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4 text-joey-muted" />
                            <span>{contact.messageCount}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpand(contact.id)}
                            className="w-full"
                          >
                            {expandedContact === contact.id ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                      {expandedContact === contact.id && (
                        <TableRow>
                          <TableCell colSpan={5} className="bg-gray-50/50 animate-fade-in">
                            <ContactDetailsRow 
                              contact={contact} 
                              onUpdateContactStatus={updateContactStatus} 
                            />
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
