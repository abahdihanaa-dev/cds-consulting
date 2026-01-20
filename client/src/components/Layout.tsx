import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { useEffect } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow pt-[88px] md:pt-[104px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
