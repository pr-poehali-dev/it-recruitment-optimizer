
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
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
              <li><Link to="#" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Преимущества</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Партнеры</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Возможности</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white transition-colors">Для работодателей</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Для учебных заведений</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Для кандидатов</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Оценка цифровой зрелости</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Документация</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Техподдержка</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ИТ-Кадры. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Условия использования</Link>
            <Link to="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
