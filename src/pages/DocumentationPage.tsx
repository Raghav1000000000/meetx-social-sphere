
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * DocumentationPage - Comprehensive documentation for the MeetX application
 * Includes information about features, usage, and technical details
 */
const DocumentationPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">MeetX Documentation</h1>
        <p className="text-muted-foreground mb-6">
          Everything you need to know about using the MeetX platform
        </p>
        
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="usage">Usage Guide</TabsTrigger>
            <TabsTrigger value="technical">Technical Details</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Discovery</CardTitle>
                <CardDescription>Find professionals and social connections in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The Discover feature allows you to find and connect with:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Professionals for networking and career opportunities</li>
                  <li>Social connections based on shared interests</li>
                  <li>Local businesses and special offers nearby</li>
                </ul>
                <p className="mt-4">
                  Use filters to sort by distance, relevance, or recency to find the most suitable connections.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Mode Switching</CardTitle>
                <CardDescription>Seamlessly switch between professional and social contexts</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  MeetX offers two distinct modes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Professional Mode:</strong> Focus on career-related connections and networking opportunities.</li>
                  <li><strong>Social Mode:</strong> Discover people with shared interests for social activities.</li>
                </ul>
                <p className="mt-4">
                  Switch between modes at any time using the mode switcher in the navigation menu.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Live Location Sharing</CardTitle>
                <CardDescription>Connect with people in real-time at your current location</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The Live feature allows you to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Share your location temporarily with others nearby</li>
                  <li>See who else is currently "live" in your area</li>
                  <li>Set a custom radius to control your discovery zone</li>
                </ul>
                <p className="mt-4">
                  Your privacy is respected - location sharing is always opt-in and temporary.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>How to set up your MeetX profile</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Create an account</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sign up with your email or use a social login option.
                    </p>
                  </li>
                  <li>
                    <strong>Select your primary mode</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Choose whether you primarily want to use MeetX for professional networking or social connections.
                    </p>
                  </li>
                  <li>
                    <strong>Complete your profile</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add your photo, skills/interests, and a brief bio to help others discover you.
                    </p>
                  </li>
                  <li>
                    <strong>Enable location services</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Allow location access to discover people and opportunities nearby.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Finding Connections</CardTitle>
                <CardDescription>How to discover and connect with others</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Browse the Discover page</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      See professionals or social connections in your area based on your selected mode.
                    </p>
                  </li>
                  <li>
                    <strong>Use filters</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sort by distance, relevance, or recent activity to find the most suitable connections.
                    </p>
                  </li>
                  <li>
                    <strong>Send connection requests</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Click "Connect" on a profile to send a connection request. Add a personalized message for better results.
                    </p>
                  </li>
                  <li>
                    <strong>Respond to requests</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Check your notifications to see and respond to connection requests from others.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="technical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Architecture Overview</CardTitle>
                <CardDescription>Technical design of the MeetX platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Frontend</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      MeetX uses React with TypeScript for type safety and improved developer experience.
                      The UI is built with Tailwind CSS and shadcn/ui components for a consistent design language.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Backend</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      The application is powered by a Node.js backend with Express. Data is stored in MongoDB
                      for flexibility and scalability. User authentication is handled securely with JWT tokens.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">API Services</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      RESTful APIs provide data access for user profiles, discovery, messaging, and location-based services.
                      All API endpoints are versioned and documented.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Security</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Security is a top priority with encrypted passwords, HTTPS for all connections, 
                      and rate limiting to prevent abuse. Personal data is handled in compliance with privacy regulations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Considerations</CardTitle>
                <CardDescription>How MeetX ensures a fast and reliable experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>React Query</strong>: Used for efficient data fetching and caching.
                  </li>
                  <li>
                    <strong>Lazy Loading</strong>: Components and routes are loaded only when needed.
                  </li>
                  <li>
                    <strong>Image Optimization</strong>: Images are compressed and sized appropriately.
                  </li>
                  <li>
                    <strong>Database Indexing</strong>: Strategic indexes for quick geospatial queries.
                  </li>
                  <li>
                    <strong>CDN Distribution</strong>: Static assets are served from a global CDN.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>Reference for MeetX API endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium">Authentication</h3>
                    <div className="mt-2 space-y-2">
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">POST /api/auth/register</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Register a new user account
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">POST /api/auth/login</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Authenticate and receive a JWT token
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">POST /api/auth/refresh</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Refresh an expired token
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">User Discovery</h3>
                    <div className="mt-2 space-y-2">
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">GET /api/users</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Get users with optional filtering
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">GET /api/users/nearby</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Get users near a specific location
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">GET /api/users/:id</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Get a specific user by ID
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Connections</h3>
                    <div className="mt-2 space-y-2">
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">POST /api/connections/request</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Send a connection request
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">PUT /api/connections/:id</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Accept or reject a connection
                        </p>
                      </div>
                      <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-md">
                        <code className="text-sm">GET /api/connections</code>
                        <p className="text-xs text-muted-foreground mt-1">
                          Get all user connections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DocumentationPage;
