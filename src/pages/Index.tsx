import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import RecentListingsSection from "@/components/home/RecentListingsSection";
import TrustSection from "@/components/home/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CategoriesSection />
        <RecentListingsSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
