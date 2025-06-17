import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutProduct = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Надежная защита",
      description:
        "Многоуровневая система управления рисками и защиты капитала",
      color: "text-green-400",
    },
    {
      icon: "Brain",
      title: "ИИ алгоритмы",
      description: "Машинное обучение для адаптации к изменениям рынка",
      color: "text-blue-400",
    },
    {
      icon: "Gauge",
      title: "Высокая скорость",
      description: "Мгновенная реакция на сигналы и исполнение сделок",
      color: "text-purple-400",
    },
    {
      icon: "BarChart3",
      title: "Детальная аналитика",
      description: "Полная статистика торговли и анализ результатов",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            О наших <span className="gradient-text">торговых роботах</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы создаем профессиональные торговые системы с 2018 года. Наши
            алгоритмы основаны на глубоком анализе рынка и проверены временем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="gradient-card hover:scale-105 transition-all duration-300 text-center"
            >
              <CardHeader>
                <Icon
                  name={benefit.icon}
                  className={`${benefit.color} mx-auto mb-3`}
                  size={40}
                />
                <CardTitle className="text-white text-lg">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Почему выбирают нас?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        className="text-green-400 mr-3 mt-1"
                        size={20}
                      />
                      <div>
                        <div className="text-white font-medium">
                          5+ лет опыта
                        </div>
                        <div className="text-gray-400 text-sm">
                          Разработка и оптимизация торговых систем
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        className="text-green-400 mr-3 mt-1"
                        size={20}
                      />
                      <div>
                        <div className="text-white font-medium">
                          Постоянные обновления
                        </div>
                        <div className="text-gray-400 text-sm">
                          Адаптация к изменениям рынка
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        className="text-green-400 mr-3 mt-1"
                        size={20}
                      />
                      <div>
                        <div className="text-white font-medium">
                          Техподдержка 24/7
                        </div>
                        <div className="text-gray-400 text-sm">
                          Помощь в настройке и использовании
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      98.7%
                    </div>
                    <div className="text-gray-300">Успешных сделок</div>
                    <div className="text-sm text-gray-400 mt-2">
                      За последние 12 месяцев
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
