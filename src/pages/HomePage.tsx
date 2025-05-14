
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Имитация данных вакансий
  const vacancies = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "ТехноСофт",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 200 000 ₽",
      digitalMaturity: "Продвинутый",
      description: "Разработка и поддержка высоконагруженных веб-приложений с использованием React, TypeScript и Redux.",
      requirements: ["React", "TypeScript", "Redux", "REST API", "5+ лет опыта"],
      date: "2 дня назад"
    },
    {
      id: "2",
      title: "Middle Backend Developer",
      company: "ИнфоТех",
      location: "Санкт-Петербург",
      type: "Полная занятость",
      salary: "150 000 - 180 000 ₽",
      digitalMaturity: "Развивающийся",
      description: "Разработка и оптимизация серверной части приложений с использованием Node.js и MongoDB.",
      requirements: ["Node.js", "Express", "MongoDB", "REST API", "3+ года опыта"],
      date: "5 дней назад"
    },
    {
      id: "3",
      title: "DevOps Engineer",
      company: "КлаудСистемс",
      location: "Удаленно",
      type: "Полная занятость",
      salary: "от 180 000 ₽",
      digitalMaturity: "Лидер отрасли",
      description: "Настройка и поддержка инфраструктуры в облаке, автоматизация процессов CI/CD.",
      requirements: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "4+ года опыта"],
      date: "1 неделю назад"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Умный подбор ИТ-специалистов с учётом цифровой зрелости</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Находите идеальных кандидатов для вашей компании и помогайте
              улучшать образовательные программы через обратную связь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
                Найти кандидатов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Разместить вакансию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Список вакансий */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Вакансии</h2>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Icon name="Filter" size={18} />
                Фильтры
              </Button>
              <Button variant="outline" className="gap-2">
                <Icon name="SortDesc" size={18} />
                Сортировка
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {vacancies.map(vacancy => (
              <Card key={vacancy.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-violet-700 mb-1">
                        <Link to={`/vacancy/${vacancy.id}`} className="hover:underline">
                          {vacancy.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center text-gray-600 space-x-4">
                        <span className="font-medium">{vacancy.company}</span>
                        <span className="flex items-center gap-1">
                          <Icon name="MapPin" size={14} />
                          {vacancy.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{vacancy.salary}</div>
                      <span className="text-sm text-gray-500">{vacancy.type}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Цифровая зрелость: {vacancy.digitalMaturity}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{vacancy.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vacancy.requirements.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-sm px-2.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{vacancy.date}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Bookmark" size={16} className="mr-1" />
                        Сохранить
                      </Button>
                      <Link to={`/vacancy/${vacancy.id}`}>
                        <Button size="sm">Подробнее</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="mx-auto">
              <Icon name="Plus" size={16} className="mr-2" />
              Показать еще
            </Button>
          </div>
        </div>
      </section>

      {/* Цифровая зрелость - информационный блок */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Подбор на основе цифровой зрелости</h2>
            <p className="text-gray-600">
              Наша платформа помогает находить специалистов, чьи навыки соответствуют уровню 
              цифровизации вашей организации, обеспечивая оптимальное соответствие компетенций.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-white text-center hover:shadow-md transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Базовый</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Начальный уровень цифровизации, базовое использование ИТ-инструментов
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-md transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle className="text-lg">Развивающийся</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Активное внедрение цифровых решений и автоматизации процессов
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-md transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl font-bold text-violet-600">3</span>
                </div>
                <CardTitle className="text-lg">Продвинутый</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Высокая степень цифровизации, активное использование данных и аналитики
              </CardContent>
            </Card>
            
            <Card className="bg-white text-center hover:shadow-md transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl font-bold text-indigo-600">4</span>
                </div>
                <CardTitle className="text-lg">Лидер отрасли</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Полная цифровая трансформация, инновационные технологии и культура
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="mx-auto">Оценить цифровую зрелость</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Улучшайте образовательные программы</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Предоставляйте обратную связь учебным заведениям после испытательного срока
            сотрудников и помогайте повышать качество образования в ИТ-сфере
          </p>
          <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
            Узнать больше о системе обратной связи
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
