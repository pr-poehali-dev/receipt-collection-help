import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Алексей Петров",
      role: "Генеральный директор",
      experience: "15+ лет в retail аналитике",
      icon: "User",
    },
    {
      name: "Мария Иванова",
      role: "Директор по технологиям",
      experience: "12+ лет в Big Data",
      icon: "Code",
    },
    {
      name: "Дмитрий Козлов",
      role: "Руководитель аналитики",
      experience: "10+ лет в бизнес-анализе",
      icon: "BarChart3",
    },
  ];

  const stats = [
    { value: "2019", label: "Год основания" },
    { value: "500+", label: "Довольных клиентов" },
    { value: "50М+", label: "Обработанных чеков" },
    { value: "99.9%", label: "Точность данных" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                О компании ЧекАналитик
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы — специалисты по сбору и анализу кассовых чеков из открытых
                источников, помогающие бизнесу принимать обоснованные решения на
                основе реальных рыночных данных
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Наша миссия
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Мы стремимся сделать рыночную аналитику доступной для каждого
                  бизнеса, предоставляя точные и своевременные данные о ценах и
                  трендах потребительского рынка.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Наша команда экспертов использует передовые технологии для
                  сбора, обработки и анализа миллионов кассовых чеков, превращая
                  их в ценные бизнес-инсайты для наших клиентов.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Наши ценности</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Target" size={20} className="mt-1" />
                    <div>
                      <h4 className="font-semibold">Точность</h4>
                      <p className="text-purple-100">
                        Гарантируем 99.9% точность всех данных
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} className="mt-1" />
                    <div>
                      <h4 className="font-semibold">Оперативность</h4>
                      <p className="text-purple-100">
                        Свежие данные каждый день
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" size={20} className="mt-1" />
                    <div>
                      <h4 className="font-semibold">Конфиденциальность</h4>
                      <p className="text-purple-100">
                        Полная защита данных клиентов
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Наша команда
              </h2>
              <p className="text-xl text-gray-600">
                Опытные профессионалы в области аналитики и технологий
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={member.icon as any}
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.experience}</p>
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

export default About;
