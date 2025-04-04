
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import MainLayout from '@/components/layout/MainLayout';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
    lastSeen?: string;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    unread: boolean;
  };
  messages: Message[];
}

/**
 * MessagesPage - Chat interface for communicating with connections
 * Shows conversation list and message exchange UI
 */
const MessagesPage: React.FC = () => {
  // Mock data for conversations
  const initialConversations: Conversation[] = [
    {
      id: '1',
      user: {
        id: 'u1',
        name: 'Alice Johnson',
        avatar: '',
        lastSeen: 'Just now',
      },
      lastMessage: {
        text: "Let's meet at the coffee shop at 3pm",
        timestamp: '10:45 AM',
        unread: true,
      },
      messages: [
        {
          id: 'm1',
          senderId: 'u1',
          text: 'Hi there! I saw your professional card and I work in a similar field.',
          timestamp: '10:30 AM',
        },
        {
          id: 'm2',
          senderId: 'current-user',
          text: 'Hello! Great to connect. What are you working on currently?',
          timestamp: '10:32 AM',
        },
        {
          id: 'm3',
          senderId: 'u1',
          text: 'I'm developing a new app for remote team collaboration. Would love to get your thoughts on it!',
          timestamp: '10:34 AM',
        },
        {
          id: 'm4',
          senderId: 'current-user',
          text: 'That sounds interesting! I'd be happy to chat about it.',
          timestamp: '10:40 AM',
        },
        {
          id: 'm5',
          senderId: 'u1',
          text: "Let's meet at the coffee shop at 3pm",
          timestamp: '10:45 AM',
        },
      ],
    },
    {
      id: '2',
      user: {
        id: 'u2',
        name: 'Mike Smith',
        avatar: '',
        lastSeen: '5 min ago',
      },
      lastMessage: {
        text: 'Thanks for the recommendation!',
        timestamp: '9:30 AM',
        unread: false,
      },
      messages: [
        {
          id: 'm1',
          senderId: 'u2',
          text: "Hey! I noticed you're also interested in photography. Any favorite spots in the city?",
          timestamp: '9:20 AM',
        },
        {
          id: 'm2',
          senderId: 'current-user',
          text: 'Hi Mike! Yes, I love taking photos at the waterfront park at sunset. The lighting is amazing!',
          timestamp: '9:25 AM',
        },
        {
          id: 'm3',
          senderId: 'u2',
          text: 'Thanks for the recommendation!',
          timestamp: '9:30 AM',
        },
      ],
    },
    {
      id: '3',
      user: {
        id: 'u3',
        name: 'Sarah Lee',
        avatar: '',
        lastSeen: '1 hour ago',
      },
      lastMessage: {
        text: 'The marketing event was great',
        timestamp: 'Yesterday',
        unread: false,
      },
      messages: [
        {
          id: 'm1',
          senderId: 'u3',
          text: 'Hello! I enjoyed our conversation at the networking event yesterday.',
          timestamp: 'Yesterday',
        },
        {
          id: 'm2',
          senderId: 'current-user',
          text: 'Sarah! It was great meeting you too. Your insights about content marketing were very helpful.',
          timestamp: 'Yesterday',
        },
        {
          id: 'm3',
          senderId: 'u3',
          text: 'The marketing event was great',
          timestamp: 'Yesterday',
        },
      ],
    },
  ];
  
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(initialConversations[0]);
  const [messageText, setMessageText] = useState<string>("");
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };
  
  const handleSendMessage = () => {
    if (!messageText.trim() || !activeConversation) return;
    
    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: 'current-user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    // Clone and update conversations
    const updatedConversations = conversations.map((convo) => {
      if (convo.id === activeConversation.id) {
        return {
          ...convo,
          messages: [...convo.messages, newMessage],
          lastMessage: {
            text: messageText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            unread: false,
          },
        };
      }
      return convo;
    });
    
    setConversations(updatedConversations);
    setActiveConversation({
      ...activeConversation,
      messages: [...activeConversation.messages, newMessage],
      lastMessage: {
        text: messageText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false,
      },
    });
    setMessageText("");
  };
  
  return (
    <MainLayout>
      <div className="container max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
          {/* Conversations Sidebar */}
          <div className="md:col-span-1 border rounded-lg overflow-hidden bg-white">
            <div className="p-4 border-b">
              <Input placeholder="Search messages..." className="w-full" />
            </div>
            
            <ScrollArea className="h-[calc(100vh-320px)]">
              {conversations.map((conversation) => (
                <div key={conversation.id}>
                  <button
                    className={`flex items-start gap-3 w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                      activeConversation?.id === conversation.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => setActiveConversation(conversation)}
                  >
                    <Avatar className="h-10 w-10 mt-1">
                      <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                      <AvatarFallback className="bg-meetx-purple text-white">
                        {getInitials(conversation.user.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-medium truncate">{conversation.user.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {conversation.lastMessage.timestamp}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage.text}
                      </p>
                    </div>
                    
                    {conversation.lastMessage.unread && (
                      <Badge className="ml-2 bg-meetx-purple">New</Badge>
                    )}
                  </button>
                  <Separator />
                </div>
              ))}
            </ScrollArea>
          </div>
          
          {/* Chat Window */}
          <div className="md:col-span-2 border rounded-lg overflow-hidden flex flex-col bg-white">
            {activeConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activeConversation.user.avatar} alt={activeConversation.user.name} />
                      <AvatarFallback className="bg-meetx-purple text-white">
                        {getInitials(activeConversation.user.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-medium">{activeConversation.user.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {activeConversation.user.lastSeen ? `Last seen: ${activeConversation.user.lastSeen}` : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Messages */}
                <ScrollArea className="flex-1 p-4 h-[calc(100vh-430px)]">
                  <div className="space-y-4">
                    {activeConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.senderId === 'current-user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg px-4 py-2 ${
                            message.senderId === 'current-user'
                              ? 'bg-meetx-purple text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p>{message.text}</p>
                          <span 
                            className={`text-xs block mt-1 text-right ${
                              message.senderId === 'current-user' ? 'text-white/70' : 'text-gray-500'
                            }`}
                          >
                            {message.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                {/* Message Input */}
                <div className="p-4 border-t">
                  <form
                    className="flex gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                  >
                    <Input
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1"
                    />
                    <Button 
                      type="submit"
                      disabled={!messageText.trim()} 
                      className="bg-meetx-purple hover:bg-meetx-purple-dark"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Select a conversation to start chatting</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MessagesPage;
