import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import Breadcrumb from "../components/Breadcrumb";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Breadcrumb just below the Navbar */}
      <Breadcrumb />

      <main className="flex-1">
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
}
