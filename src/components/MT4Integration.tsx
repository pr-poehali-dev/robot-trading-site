import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MT4Integration = () => {
  const platforms = [
    {
      name: "MetaTrader 4",
      icon: "Monitor",
      description: "Классическая платформа с проверенной стабильностью",
      features: [
        "Expert Advisors",
        "Автоматическое исполнение",
        "Бэктестинг",
        "Оптимизация",
      ],
    },
    {
      name: "MetaTrader 5",
      icon: "Smartphone",
      description: "Современная платформа с расширенными возможностями",
      features: [
        "Мультивалютное тестирование",
        "Облачная оптимизация",
        "Копи-трейдинг",
        "Экономический календарь",
      ],
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Интеграция с <span className="gradient-text">MT4/MT5</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Полная совместимость с популярными торговыми платформами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="gradient-card hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <Icon
                  name={platform.icon}
                  className="text-green-400 mx-auto mb-4"
                  size={48}
                />
                <CardTitle className="text-2xl text-white">
                  {platform.name}
                </CardTitle>
                <p className="text-gray-300">{platform.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Icon
                        name="Check"
                        className="text-green-400 mr-3 flex-shrink-0"
                        size={16}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon
                    name="Download"
                    className="text-blue-400 mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    1. Скачайте
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Загрузите файлы роботов
                  </p>
                </div>
                <div>
                  <Icon
                    name="Settings"
                    className="text-green-400 mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    2. Установите
                  </h3>
                  <p className="text-gray-300 text-sm">Запустите в MT4/MT5</p>
                </div>
                <div>
                  <Icon
                    name="Play"
                    className="text-purple-400 mx-auto mb-3"
                    size={32}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    3. Торгуйте
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Получайте прибыль 24/7
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать инструкцию по установке
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MT4Integration;
