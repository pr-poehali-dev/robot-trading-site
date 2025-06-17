import Hero from "@/components/Hero";
import AboutProduct from "@/components/AboutProduct";
import TradingStrategies from "@/components/TradingStrategies";
import Statistics from "@/components/Statistics";
import MT4Integration from "@/components/MT4Integration";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <AboutProduct />
      <TradingStrategies />
      <Statistics />
      <MT4Integration />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Index;
