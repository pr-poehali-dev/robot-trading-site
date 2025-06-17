import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              🤖 Автоматическая торговля на Форекс
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Торговые роботы</span>
            <br />
            <span className="text-white">для MT4/MT5</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональные алгоритмы скалпинга и долгосрочных стратегий.
            Автоматизация торговли с доходностью до 200% в год.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать роботов
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Демо версия
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-green-400 mb-2">200%</div>
              <div className="text-gray-400">Средняя доходность в год</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-400">Автоматическая работа</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                5000+
              </div>
              <div className="text-gray-400">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
