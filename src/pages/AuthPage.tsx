
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';

/**
 * AuthPage - Page that handles both login and signup
 * Uses tabs to switch between forms
 */
const AuthPage: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  
  // Check if user is already authenticated
  const isAuthenticated = false; // This would be replaced with real auth check
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand/Image */}
      <div className="hidden md:flex md:w-1/2 bg-meetx-purple justify-center items-center p-10">
        <div className="max-w-md text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to MeetX</h1>
          <p className="text-lg mb-6">
            Connect with interesting people around you for networking, friendship, or collaboration.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="bg-white text-meetx-purple rounded-full p-1 w-6 h-6 flex items-center justify-center text-sm">✓</span>
              <span>Create professional and social cards</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-white text-meetx-purple rounded-full p-1 w-6 h-6 flex items-center justify-center text-sm">✓</span>
              <span>Connect with people nearby</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-white text-meetx-purple rounded-full p-1 w-6 h-6 flex items-center justify-center text-sm">✓</span>
              <span>Network in real-time at events or places</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right side - Forms */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <Tabs defaultValue={isLogin ? "login" : "signup"} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
