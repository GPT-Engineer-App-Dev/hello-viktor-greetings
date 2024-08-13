import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Index = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      throw new Error("This is a test error thrown on purpose");
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <Alert variant="destructive" className="max-w-md w-full">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error.message}
            <pre className="mt-2 w-full text-xs overflow-auto">
              {error.stack}
            </pre>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in">Hello Viktor!</h1>
      <p className="text-xl text-white mb-8">Welcome to your personalized React app.</p>
      <Button variant="secondary" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Index;