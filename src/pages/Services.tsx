import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "Database",
      title: "Сбор кассовых чеков",
      description:
        "Автоматизированный сбор данных с чеков из открытых источников",
      features: [
        "До 10,000 чеков в день",
        "Фильтрация по регионам",
        "Категории товаров",
        "Данные по магазинам",
      ],
      price: "от 15,000 ₽/мес",
    },
    {
      icon: "BarChart3",
      title: "Анализ и отчетность",
      description:
        "Подготовка детальных аналитических отчетов по собранным данным",
      features: [
        "Анализ динамики цен",
        "Сравнение конкурентов",
        "Рыночные тренды",
        "Визуализация данных",
      ],
      price: "от 8,000 ₽/мес",
    },
    {
      icon: "Users",
      title: "Консультации экспертов",
      description: "Персональные консультации по интерпретации данных",
      features: [
        "Стратегические рекомендации",
        "Анализ конкурентов",
        "Ценовое позиционирование",
        "Рыночные инсайты",
      ],
      price: "от 25,000 ₽/мес",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Комплексные решения для сбора, анализа и интерпретации данных с
                кассовых чеков для роста вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center">
                      <Icon
                        name={service.icon as any}
                        className="text-white"
                        size={32}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Icon
                            name="CheckCircle"
                            className="text-green-600"
                            size={16}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-6">
                      <div className="text-3xl font-bold text-purple-600 mb-4">
                        {service.price}
                      </div>
                      <Button
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        asChild
                      >
                        <Link to="/contact">Заказать услугу</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
