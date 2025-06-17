import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Statistics = () => {
  const stats = [
    {
      value: "5,247",
      label: "Активных трейдеров",
      icon: "Users",
      color: "text-blue-400",
      trend: "+23%",
    },
    {
      value: "€2.1M",
      label: "Общая прибыль за год",
      icon: "TrendingUp",
      color: "text-green-400",
      trend: "+156%",
    },
    {
      value: "87.3%",
      label: "Прибыльных месяцев",
      icon: "Target",
      color: "text-purple-400",
      trend: "+12%",
    },
    {
      value: "24/7",
      label: "Непрерывная работа",
      icon: "Clock",
      color: "text-orange-400",
      trend: "365 дней",
    },
  ];

  const monthlyResults = [
    { month: "Янв", profit: 18.5 },
    { month: "Фев", profit: 24.2 },
    { month: "Мар", profit: 16.8 },
    { month: "Апр", profit: 31.4 },
    { month: "Май", profit: 28.9 },
    { month: "Июн", profit: 22.1 },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Результаты и <span className="gradient-text">статистика</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реальные показатели эффективности наших торговых роботов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="gradient-card hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <Icon
                  name={stat.icon}
                  className={`${stat.color} mx-auto mb-3`}
                  size={32}
                />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                <div className="text-green-400 text-xs font-medium">
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Месячная доходность в 2024 году
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {monthlyResults.map((result, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-800/50 rounded-lg"
                  >
                    <div className="text-sm text-gray-400 mb-1">
                      {result.month}
                    </div>
                    <div className="text-xl font-bold text-green-400">
                      +{result.profit}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text mb-2">
                  Средняя доходность: +23.6% в месяц
                </div>
                <div className="text-gray-300 text-sm">
                  При максимальной просадке не более 8.5%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
