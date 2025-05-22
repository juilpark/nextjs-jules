"use client";

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopNavbarProps {
  toggleSidebar: () => void;
}

export default function TopNavbar({ toggleSidebar }: TopNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-background border-b">
      <div className="text-lg font-semibold">FeePathFinder</div> {/* Placeholder */}
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
}
