import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "15,000",
      period: "месяц",
      description: "Идеально для малого бизнеса",
      features: [
        "До 5,000 чеков в месяц",
        "3 категории товаров",
        "Базовые отчеты",
        "Email поддержка",
        "1 регион",
      ],
      popular: false,
    },
    {
      name: "Профессиональный",
      price: "35,000",
      period: "месяц",
      description: "Для растущих компаний",
      features: [
        "До 25,000 чеков в месяц",
        "Все категории товаров",
        "Продвинутая аналитика",
        "Персональный менеджер",
        "До 5 регионов",
        "API доступ",
        "Еженедельные отчеты",
      ],
      popular: true,
    },
    {
      name: "Корпоративный",
      price: "75,000",
      period: "месяц",
      description: "Для крупного бизнеса",
      features: [
        "Безлимитное количество чеков",
        "Все категории товаров",
        "Индивидуальная аналитика",
        "Выделенный менеджер",
        "Вся Россия",
        "Полный API доступ",
        "Ежедневные отчеты",
        "Консультации экспертов",
        "Интеграция с CRM",
      ],
      popular: false,
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
                Тарифные планы
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите оптимальный план для сбора кассовых чеков из открытых
                источников. Все планы включают полную техническую поддержку и
                гарантию качества данных
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                      Популярный
                    </Badge>
                  )}

                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-purple-600">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">
                          ₽/{plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Icon
                            name="CheckCircle"
                            className="text-green-600 mt-0.5"
                            size={16}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-purple-600 hover:bg-purple-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      asChild
                    >
                      <Link to="/contact">
                        <Icon name="ArrowRight" size={16} className="mr-2" />
                        Выбрать план
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">
                Нужен индивидуальный план? Свяжитесь с нами для персонального
                предложения
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Индивидуальное предложение
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
