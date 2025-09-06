import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, User, Settings, Shield } from "lucide-react";

export default function AccountNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl font-bold">Account Page Not Found</CardTitle>
            <CardDescription>
              The account page you&apos;re looking for doesn&apos;t exist.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>You might have typed the wrong URL or the page has been moved.</p>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/account/profile">
                  <User className="mr-2 h-4 w-4" />
                  Go to Profile
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/account/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="ghost" asChild className="flex-1">
                <Link href="/dashboard">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Dashboard
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
    </div>
  );
}
