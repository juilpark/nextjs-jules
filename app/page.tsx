"use client";

import { useState } from 'react';
import TopNavbar from '@/components/TopNavbar';
import LeftSidebar from '@/components/LeftSidebar';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to false for mobile-first

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <LeftSidebar />}
      <main className="pt-16"> {/* Adjust pt based on TopNavbar height */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center tracking-tight sm:text-4xl md:text-5xl">
            KRW를 온체인 비트코인으로 바꾸는 가장 저렴한 수수료 경로 찾기
          </h1>
          {/* Other page content will go here */}
          <div className="mt-8 text-center">
            <p>Main content area. The sidebar will overlay this on smaller screens if open.</p>
            <p>On medium screens and above, the sidebar is designed to be always visible in this example (adjust LeftSidebar for that behavior if needed).</p>
          </div>
        </div>
      </main>
    </div>
  );
}
