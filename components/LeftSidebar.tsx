"use client";

export default function LeftSidebar() {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-muted/80 border-r p-4 shadow-lg md:top-0 md:h-full md:w-72">
      <p className="text-lg font-semibold">Navigation</p>
      {/* Navigation links will go here */}
      {/* Example link:
      <a href="#" className="block py-2 px-3 hover:bg-muted rounded-md">Menu Item 1</a>
      */}
    </aside>
  );
}
