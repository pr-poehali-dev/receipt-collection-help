import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Icon name="Receipt" className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold">ЧекАналитик</span>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональные услуги по сбору и анализу кассовых чеков для
              вашего бизнеса
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white">
                  Сбор чеков
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Анализ данных
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Отчетность
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Консультации
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Партнерство
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 678-42-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@chekanalytik.ru</span>
              </div>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="hover:text-white">
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 ЧекАналитик. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
