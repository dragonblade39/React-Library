import React from "react";
interface SectionProps {
    children: React.ReactNode;
    height?: string | number;
}
declare const Header: React.FC<SectionProps>;
declare const Footer: React.FC<SectionProps>;
interface SidebarProps {
    children: React.ReactNode;
    width?: string | number;
}
declare const Sidebar: React.FC<SidebarProps>;
interface MainContentProps {
    children: React.ReactNode;
    headerHeight?: number;
    footerHeight?: number;
}
declare const MainContent: React.FC<MainContentProps>;
export { Header, Footer, Sidebar, MainContent };
