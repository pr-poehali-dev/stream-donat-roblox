import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Rocket" size={24} className="text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold">RobuxDonates</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setActiveTab('home')}
            className={`text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Главная
          </button>
          <button 
            onClick={() => setActiveTab('widgets')}
            className={`text-sm font-medium transition-colors ${activeTab === 'widgets' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Виджеты
          </button>
          <button 
            onClick={() => setActiveTab('stats')}
            className={`text-sm font-medium transition-colors ${activeTab === 'stats' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Статистика
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`text-sm font-medium transition-colors ${activeTab === 'settings' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Настройки
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`text-sm font-medium transition-colors ${activeTab === 'faq' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            FAQ
          </button>
        </div>
        
        <Button className="animate-scale-in">
          Войти
          <Icon name="LogIn" size={16} className="ml-2" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
