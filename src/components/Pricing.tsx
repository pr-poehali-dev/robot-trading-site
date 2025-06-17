import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "299",
      period: "месяц",
      description: "Для начинающих трейдеров",
      features: [
        "1 торговый робот",
        "Скалпинговая стратегия",
        "Техподдержка в рабочее время",
        "Обновления на 6 месяцев",
        "Депозит от $1,000",
      ],
      color: "border-blue-500/30",
      buttonClass: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Профессиональный",
      price: "599",
      period: "месяц",
      description: "Самый популярный тариф",
      features: [
        "2 торговых робота",
        "Все стратегии торговли",
        "Техподдержка 24/7",
        "Пожизненные обновления",
        "Депозит от $5,000",
        "Персональная настройка",
      ],
      popular: true,
      color: "border-green-500/30",
      buttonClass: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "VIP",
      price: "1299",
      period: "месяц",
      description: "Для серьезных инвесторов",
      features: [
        "Все торговые роботы",
        "Эксклюзивные стратегии",
        "Приоритетная поддержка",
        "Индивидуальное обучение",
        "Депозит от $25,000",
        "Доступ к закрытому чату",
        "Персональный менеджер",
      ],
      color: "border-purple-500/30",
      buttonClass: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Тарифы и <span className="gradient-text">цены</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий тариф для начала автоматической торговли
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`gradient-card hover:scale-105 transition-all duration-300 relative ${plan.color} ${plan.popular ? "ring-2 ring-green-500/50" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-black font-semibold px-4 py-1">
                    Популярный
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold gradient-text mb-2">
                  €{plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
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

                <Button
                  className={`w-full text-black font-semibold py-3 ${plan.buttonClass}`}
                  size="lg"
                >
                  <Icon name="CreditCard" className="mr-2" size={18} />
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-slate-800/50 rounded-full px-6 py-3 mb-4">
            <Icon name="Shield" className="text-green-400 mr-2" size={20} />
            <span className="text-white">
              30 дней гарантии возврата средств
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Все тарифы включают полную техническую поддержку и документацию
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
