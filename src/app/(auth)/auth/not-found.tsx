import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, LogIn, UserPlus } from "lucide-react";

export default function AuthNotFound() {
  return (
    <html lang="en">
      <head>
        <title>Authentication Page Not Found - YourApp</title>
        <meta name="description" content="The authentication page you're looking for doesn't exist." />
      </head>
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                <LogIn className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl font-bold">Authentication Page Not Found</CardTitle>
              <CardDescription>
                The authentication page you&apos;re looking for doesn&apos;t exist.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                <p>You might have typed the wrong URL or the page has been moved.</p>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/auth/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/auth/signup">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="ghost" asChild className="flex-1">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="flex-1">
                  <Link href="javascript:history.back()">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}
