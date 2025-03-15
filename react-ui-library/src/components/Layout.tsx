import React from "react";

interface SectionProps {
  children: React.ReactNode;
  height?: string | number;
}

// Header Component
const Header: React.FC<SectionProps> = ({ children, height = "60px" }) => (
  <div style={{ height, background: "#333", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold" }}>
    {children}
  </div>
);

// Footer Component
const Footer: React.FC<SectionProps> = ({ children, height = "50px" }) => (
  <div style={{ height, background: "#222", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
    {children}
  </div>
);

// Left Sidebar Component
interface SidebarProps {
  children: React.ReactNode;
  width?: string | number;
}

const Sidebar: React.FC<SidebarProps> = ({ children, width = "250px" }) => (
  <div style={{ width, background: "#f8f9fa", height: "100vh", padding: "20px", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
    {children}
  </div>
);

// Main Content Component (Auto height calculation)
interface MainContentProps {
  children: React.ReactNode;
  headerHeight?: number;
  footerHeight?: number;
}

const MainContent: React.FC<MainContentProps> = ({ children, headerHeight = 60, footerHeight = 50 }) => {
  const contentHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;

  return (
    <div style={{ flex: 1, padding: "20px", overflowY: "auto", height: contentHeight }}>
      {children}
    </div>
  );
};

export { Header, Footer, Sidebar, MainContent };
