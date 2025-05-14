
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Users" className="h-6 w-6 text-violet-600" />
            <span className="font-medium text-xl text-gray-900">ИТ-Кадры</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors">Главная</a>
            <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors">Кандидаты</a>
            <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors">Вакансии</a>
            <a href="#" className="text-gray-700 hover:text-violet-600 transition-colors">О платформе</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            <Button size="sm" className="hidden md:flex">Регистрация</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
              <span className="sr-only">Меню</span>
            </Button>
          </div>
        </div>
      </header>

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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Преимущества платформы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Уникальный подход к подбору персонала, учитывающий уровень цифровой зрелости
              организации и способствующий развитию образовательных программ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                  <Icon name="Search" size={24} />
                </div>
                <CardTitle>Умный поиск кандидатов</CardTitle>
                <CardDescription>
                  Подбор специалистов в соответствии с уровнем цифровой зрелости вашей компании
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Icon name="BarChart2" size={24} />
                </div>
                <CardTitle>Оценка цифровой зрелости</CardTitle>
                <CardDescription>
                  Определение уровня цифровизации вашей организации для точного подбора кадров
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <CardTitle>Обратная связь</CardTitle>
                <CardDescription>
                  Предоставление отзывов учебным заведениям для улучшения образовательных программ
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Цифровая зрелость */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Оценка цифровой зрелости</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Определите уровень цифровой трансформации вашей организации, чтобы 
                найти специалистов с подходящими компетенциями
              </p>
            </div>

            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="basic">Базовый</TabsTrigger>
                <TabsTrigger value="developing">Развивающийся</TabsTrigger>
                <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
                <TabsTrigger value="leader">Лидер отрасли</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Базовый уровень</h3>
                <p className="text-gray-700 mb-4">
                  Организация только начинает внедрять цифровые технологии. Основные бизнес-процессы
                  по-прежнему выполняются традиционными методами с минимальной автоматизацией.
                </p>
                <h4 className="font-medium mb-2">Требуемые компетенции кандидатов:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Базовые технические навыки</li>
                  <li>Умение работать с основными ИТ-системами</li>
                  <li>Готовность к обучению</li>
                </ul>
                <Button>Подобрать кандидатов этого уровня</Button>
              </TabsContent>
              
              <TabsContent value="developing" className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Развивающийся уровень</h3>
                <p className="text-gray-700 mb-4">
                  Организация активно внедряет цифровые решения в ключевые бизнес-процессы. 
                  Есть понимание ценности данных и аналитики.
                </p>
                <h4 className="font-medium mb-2">Требуемые компетенции кандидатов:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Опыт работы с современными технологиями</li>
                  <li>Понимание процессов автоматизации</li>
                  <li>Базовые навыки работы с данными</li>
                </ul>
                <Button>Подобрать кандидатов этого уровня</Button>
              </TabsContent>
              
              <TabsContent value="advanced" className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Продвинутый уровень</h3>
                <p className="text-gray-700 mb-4">
                  Большинство процессов цифровизированы. Данные активно используются для принятия решений.
                  Организация имеет ИТ-стратегию и инвестирует в инновации.
                </p>
                <h4 className="font-medium mb-2">Требуемые компетенции кандидатов:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Глубокие технические знания</li>
                  <li>Опыт работы с большими данными и аналитикой</li>
                  <li>Навыки оптимизации и масштабирования систем</li>
                </ul>
                <Button>Подобрать кандидатов этого уровня</Button>
              </TabsContent>
              
              <TabsContent value="leader" className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Уровень лидера отрасли</h3>
                <p className="text-gray-700 mb-4">
                  Организация является цифровым лидером. Активно внедряет передовые технологии, 
                  имеет полностью интегрированную ИТ-экосистему и культуру инноваций.
                </p>
                <h4 className="font-medium mb-2">Требуемые компетенции кандидатов:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Экспертные знания в специализированных областях</li>
                  <li>Опыт работы с инновационными технологиями</li>
                  <li>Стратегическое мышление и лидерские качества</li>
                </ul>
                <Button>Подобрать кандидатов этого уровня</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Feedback section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Обратная связь для образования</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Помогите улучшить качество образования в ИТ-сфере, предоставляя обратную связь
                учебным заведениям о компетенциях их выпускников
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-md">
                <CardHeader>
                  <CardTitle>Для работодателей</CardTitle>
                  <CardDescription className="text-gray-700">
                    Поделитесь опытом работы с выпускниками
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Оценка реальных навыков сотрудников после испытательного срока</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Рекомендации по улучшению образовательных программ</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Влияние на подготовку будущих специалистов</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Оставить отзыв</Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-violet-50 to-violet-100 border-none shadow-md">
                <CardHeader>
                  <CardTitle>Для учебных заведений</CardTitle>
                  <CardDescription className="text-gray-700">
                    Получайте ценную информацию для улучшения программ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Актуальные данные о востребованных навыках</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Оценка эффективности образовательных программ</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Возможность корректировки учебных планов</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Начните использовать платформу сегодня</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к нашей платформе и улучшайте процесс подбора ИТ-специалистов
            с учетом цифровой зрелости вашей организации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Icon name="Users" className="h-6 w-6" />
                <span className="font-medium text-xl">ИТ-Кадры</span>
              </div>
              <p className="mb-4">
                Инновационная платформа подбора ИТ-специалистов с учетом цифровой зрелости организаций
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Linkedin" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Платформа</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Возможности</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Для работодателей</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для учебных заведений</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для кандидатов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оценка цифровой зрелости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техподдержка</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 ИТ-Кадры. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
