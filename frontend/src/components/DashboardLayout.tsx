import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="min-h-16 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b bg-card/50 backdrop-blur-sm px-4 md:px-6 py-3">

  {/* LEFT SIDE */}
  <div className="flex items-start md:items-center gap-3">
    <SidebarTrigger />

    <div className="leading-tight">
      <h1 className="text-lg md:text-2xl font-bold break-words">
        Financial Management Platform
      </h1>

      <p className="text-sm text-muted-foreground">
        Welcome back, {user ? `${user.firstName} ${user.lastName}` : 'User'}
      </p>
    </div>
  </div>

  {/* RIGHT SIDE (keep your existing buttons here) */}
  <div className="flex flex-wrap items-center gap-2">
    {/* 👉 keep your Profile / Logout buttons here */}
  </div>



            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
