import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр К.",
      role: "Частный инвестор",
      avatar: "👨‍💼",
      rating: 5,
      text: "За 8 месяцев использования заработал 187%. Роботы работают стабильно, техподдержка отвечает быстро.",
      profit: "+187%",
    },
    {
      name: "Мария С.",
      role: "Финансовый консультант",
      avatar: "👩‍💻",
      rating: 5,
      text: "Рекомендую всем клиентам. Простая установка, надежная работа. Лучший ROI среди всех инструментов.",
      profit: "+234%",
    },
    {
      name: "Дмитрий В.",
      role: "Трейдер",
      avatar: "👨‍🔬",
      rating: 5,
      text: "Использую скалпинговую стратегию уже год. Стабильный доход каждый месяц, минимальные просадки.",
      profit: "+156%",
    },
    {
      name: "Елена М.",
      role: "Инвестор",
      avatar: "👩‍🎓",
      rating: 5,
      text: "Долго искала надежную автоматическую торговлю. Здесь нашла именно то, что нужно. Результат превзошел ожидания.",
      profit: "+198%",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Отзывы <span className="gradient-text">наших клиентов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Более 5000 трейдеров уже используют наши торговые роботы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="gradient-card hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                        <span className="text-green-400 font-bold text-sm">
                          {testimonial.profit}
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-400 fill-current"
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <Icon
              name="Star"
              className="text-yellow-400 fill-current mr-2"
              size={20}
            />
            <span className="text-white font-semibold mr-2">4.9/5</span>
            <span className="text-gray-400">
              средняя оценка (1,247 отзывов)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
