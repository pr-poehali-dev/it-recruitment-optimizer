
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Users" className="h-6 w-6 text-violet-600" />
            <span className="font-medium text-xl text-gray-900">ИТ-Кадры</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-violet-600 transition-colors">Вакансии</Link>
          <Link to="/resume/123" className="text-gray-700 hover:text-violet-600 transition-colors">Резюме</Link>
          <Link to="/vacancy/123" className="text-gray-700 hover:text-violet-600 transition-colors">Рекомендации</Link>
          <Link to="#" className="text-gray-700 hover:text-violet-600 transition-colors">О платформе</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden md:flex">Регистрация</Button>
          </Link>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Вакансии
                </Link>
                <Link to="/resume/123" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Резюме
                </Link>
                <Link to="/vacancy/123" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Рекомендации
                </Link>
                <Link to="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  О платформе
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Войти</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Регистрация</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
