import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Database",
      title: "Массовый сбор данных",
      description:
        "Автоматизированный сбор тысяч чеков ежедневно из открытых источников",
    },
    {
      icon: "BarChart3",
      title: "Детальная аналитика",
      description:
        "Глубокий анализ цен, трендов и поведения конкурентов на рынке",
    },
    {
      icon: "Shield",
      title: "Полная легальность",
      description:
        "Работаем только с открытыми данными в соответствии с законодательством",
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Свежие данные каждый день для принятия актуальных решений",
    },
    {
      icon: "FileText",
      title: "Готовые отчеты",
      description:
        "Структурированные отчеты в удобном формате для вашего бизнеса",
    },
    {
      icon: "Users",
      title: "Персональный менеджер",
      description: "Индивидуальный подход и постоянная поддержка от экспертов",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем комплексные решения для сбора и анализа данных с
            кассовых чеков, помогая вашему бизнесу оставаться
            конкурентоспособным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Icon
                    name={feature.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
