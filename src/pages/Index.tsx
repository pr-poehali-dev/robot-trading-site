import Hero from "@/components/Hero";
import TradingStrategies from "@/components/TradingStrategies";
import MT4Integration from "@/components/MT4Integration";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <TradingStrategies />
      <MT4Integration />
    </div>
  );
};

export default Index;
