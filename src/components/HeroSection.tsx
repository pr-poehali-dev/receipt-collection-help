import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DisclaimerBanner />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Поможем собрать
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}
                  кассовые чеки{" "}
                </span>
                из открытых источников
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Получайте актуальные данные о ценах конкурентов, анализируйте
                рынок и принимайте обоснованные решения с нашей помощью в сборе
                кассовых чеков из открытых источников
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="CheckCircle" className="text-green-600" size={16} />
                <span>Легальный сбор</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="Clock" className="text-blue-600" size={16} />
                <span>24/7 мониторинг</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Icon name="Shield" className="text-purple-600" size={16} />
                <span>100% конфиденциально</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                asChild
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Link to="/pricing">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Выбрать тариф
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Получить консультацию
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Пример отчета
                  </h3>
                  <Icon
                    name="TrendingUp"
                    className="text-green-600"
                    size={20}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      15,847
                    </div>
                    <div className="text-sm text-gray-600">Собрано чеков</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">342</div>
                    <div className="text-sm text-gray-600">Магазинов</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Средняя цена на хлеб
                    </span>
                    <span className="font-semibold">47.5 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Средняя цена на молоко
                    </span>
                    <span className="font-semibold">89.2 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Динамика цен</span>
                    <span className="text-green-600 font-semibold">
                      ↗ +2.3%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
