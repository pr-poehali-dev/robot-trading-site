import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TradingStrategies = () => {
  const strategies = [
    {
      title: "Скалпинг стратегия",
      type: "scalping",
      icon: "Zap",
      timeframe: "M1-M5",
      profit: "5-15%",
      drawdown: "< 10%",
      description:
        "Высокочастотная торговля с мгновенным входом и выходом из позиций",
      features: [
        "Анализ тиков в реальном времени",
        "Мгновенное исполнение ордеров",
        "Защита от проскальзывания",
        "Работа в любых рыночных условиях",
      ],
      color: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/30",
    },
    {
      title: "Долгосрочная стратегия",
      type: "longterm",
      icon: "TrendingUp",
      timeframe: "H4-D1",
      profit: "15-30%",
      drawdown: "< 15%",
      description: "Фундаментальный анализ и следование долгосрочным трендам",
      features: [
        "Анализ экономических новостей",
        "Определение глобальных трендов",
        "Управление рисками",
        "Компаундинг прибыли",
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Торговые <span className="gradient-text">стратегии</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите подходящую стратегию под ваш стиль торговли и уровень риска
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {strategies.map((strategy, index) => (
            <Card
              key={index}
              className={`gradient-card hover:scale-105 transition-all duration-300 ${strategy.bgColor}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon
                    name={strategy.icon}
                    className={`${strategy.color}`}
                    size={32}
                  />
                  <Badge
                    variant="secondary"
                    className="bg-slate-800 text-gray-300"
                  >
                    {strategy.timeframe}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2">
                  {strategy.title}
                </CardTitle>
                <p className="text-gray-300">{strategy.description}</p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className={`text-lg font-bold ${strategy.color}`}>
                      {strategy.profit}
                    </div>
                    <div className="text-sm text-gray-400">
                      Месячная прибыль
                    </div>
                  </div>
                  <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <div className="text-lg font-bold text-red-400">
                      {strategy.drawdown}
                    </div>
                    <div className="text-sm text-gray-400">
                      Максимальная просадка
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Особенности:</h4>
                  {strategy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="Check"
                        className="text-green-400 mr-3 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingStrategies;
