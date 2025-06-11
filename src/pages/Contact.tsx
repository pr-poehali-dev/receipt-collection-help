import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка формы:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Ежедневно с 9:00 до 18:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@chekanalytik.ru",
      description: "Ответим в течение 2 часов",
    },
    {
      icon: "MapPin",
      title: "Офис",
      value: "Москва, ул. Тверская, 15",
      description: "По предварительной записи",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@chekanalytik_bot",
      description: "Быстрая поддержка 24/7",
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
                Свяжитесь с нами
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Готовы обсудить ваши потребности в сборе и анализе данных? Наши
                эксперты ответят на все вопросы и предложат оптимальное решение
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Способы связи
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contacts.map((contact, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon
                            name={contact.icon as any}
                            className="text-white"
                            size={20}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {contact.title}
                          </h3>
                          <p className="text-purple-600 font-medium mb-1">
                            {contact.value}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Отправить сообщение
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Название компании"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Расскажите о ваших потребностях в сборе данных..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
