import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import Icon from '@/components/ui/icon';

const chartData = [
  { date: '01.11', amount: 450 },
  { date: '05.11', amount: 800 },
  { date: '10.11', amount: 1200 },
  { date: '15.11', amount: 950 },
  { date: '20.11', amount: 1600 },
  { date: '25.11', amount: 2100 },
  { date: '27.11', amount: 1850 },
];

const chartConfig = {
  amount: {
    label: 'Робуксы',
    color: 'hsl(262, 83%, 72%)',
  },
};

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
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

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="space-y-24 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <Badge variant="secondary" className="mb-4">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Интеграция с Roblox API
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Донаты для стримеров
                <br />
                <span className="text-primary">прямо в Roblox</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Принимайте донаты и автоматически отправляйте робуксы вашим зрителям. 
                Настройка за 5 минут, интеграция со всеми популярными платформами.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8">
                  Начать бесплатно
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 pt-12">
                <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Zap" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Моментальные переводы</CardTitle>
                    <CardDescription>
                      Робуксы приходят донатерам автоматически через Roblox API
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Tv" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Виджеты для стрима</CardTitle>
                    <CardDescription>
                      Красивые оверлеи с алертами и таблицами донатов
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="BarChart3" size={24} className="text-primary" />
                    </div>
                    <CardTitle>Аналитика</CardTitle>
                    <CardDescription>
                      Полная статистика по донатам с графиками и отчетами
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">Как это работает?</h2>
                <p className="text-muted-foreground text-lg">Три простых шага до первого доната</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold">Подключите Roblox</h3>
                  <p className="text-muted-foreground">
                    Добавьте API ключ от вашего аккаунта Roblox для автоматических переводов
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold">Настройте виджеты</h3>
                  <p className="text-muted-foreground">
                    Добавьте алерты и донат-бар в OBS или Streamlabs
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold">Принимайте донаты</h3>
                  <p className="text-muted-foreground">
                    Робуксы автоматически отправляются донатерам после оплаты
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'widgets' && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Виджеты для стрима</h2>
              <p className="text-muted-foreground text-lg">Добавьте на свой стрим интерактивные оверлеи</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Bell" size={20} />
                    Алерты донатов
                  </CardTitle>
                  <CardDescription>Показывайте красивые уведомления при получении доната</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="z-10 text-center space-y-2">
                      <Icon name="Gift" size={48} className="mx-auto text-primary" />
                      <p className="font-semibold">Превью алерта</p>
                    </div>
                  </div>
                  <Input placeholder="URL виджета" value="https://robuxdonates.com/widget/alerts/..." readOnly />
                  <Button className="w-full">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать URL
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BarChart" size={20} />
                    Цель доната
                  </CardTitle>
                  <CardDescription>Прогресс-бар для достижения цели по донатам</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="z-10 w-full px-8">
                      <div className="bg-card rounded-lg p-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Цель: 10,000 R$</span>
                          <span className="text-primary font-bold">7,500 R$</span>
                        </div>
                        <div className="h-4 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input placeholder="URL виджета" value="https://robuxdonates.com/widget/goal/..." readOnly />
                  <Button className="w-full">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать URL
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="List" size={20} />
                    Топ донатеров
                  </CardTitle>
                  <CardDescription>Список лучших донатеров за период</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="z-10 w-full px-8">
                      <div className="bg-card rounded-lg p-4 space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary">#{i}</span>
                              <span>Player{i}</span>
                            </div>
                            <span className="font-semibold">{1000 - i * 100} R$</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Input placeholder="URL виджета" value="https://robuxdonates.com/widget/top/..." readOnly />
                  <Button className="w-full">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать URL
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Последние донаты
                  </CardTitle>
                  <CardDescription>Прокручиваемый список последних донатов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="z-10 w-full px-8">
                      <div className="bg-card rounded-lg p-4 space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">CoolGamer123</span>
                            <span className="text-primary font-bold">500 R$</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Отличный стрим!</p>
                        </div>
                        <Separator />
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="font-medium">ProPlayer99</span>
                            <span className="text-primary font-bold">300 R$</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Продолжай в том же духе</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input placeholder="URL виджета" value="https://robuxdonates.com/widget/recent/..." readOnly />
                  <Button className="w-full">
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать URL
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Статистика донатов</h2>
              <p className="text-muted-foreground text-lg">Анализируйте свои доходы и рост аудитории</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Всего за месяц</CardDescription>
                  <CardTitle className="text-3xl">12,450 R$</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <Icon name="TrendingUp" size={16} />
                    <span>+23%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Донатов</CardDescription>
                  <CardTitle className="text-3xl">84</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <Icon name="TrendingUp" size={16} />
                    <span>+12</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Средний донат</CardDescription>
                  <CardTitle className="text-3xl">148 R$</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <Icon name="TrendingUp" size={16} />
                    <span>+8%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Донатеров</CardDescription>
                  <CardTitle className="text-3xl">67</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-500">
                    <Icon name="TrendingUp" size={16} />
                    <span>+15</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Динамика донатов</CardTitle>
                <CardDescription>Робуксы за последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(262, 83%, 72%)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(262, 83%, 72%)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 22%)" />
                      <XAxis 
                        dataKey="date" 
                        stroke="hsl(220, 10%, 65%)"
                        tick={{ fill: 'hsl(220, 10%, 65%)' }}
                      />
                      <YAxis 
                        stroke="hsl(220, 10%, 65%)"
                        tick={{ fill: 'hsl(220, 10%, 65%)' }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="hsl(262, 83%, 72%)" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorAmount)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Топ донатеров месяца</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'MegaFan2024', amount: 1500, avatar: '🏆' },
                      { name: 'ProGamer777', amount: 1200, avatar: '🥈' },
                      { name: 'CoolDude99', amount: 950, avatar: '🥉' },
                      { name: 'StreamLover', amount: 800, avatar: '💎' },
                      { name: 'BestViewer', amount: 650, avatar: '⭐' },
                    ].map((donor, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{donor.avatar}</div>
                          <div>
                            <p className="font-medium">{donor.name}</p>
                            <p className="text-sm text-muted-foreground">#{i + 1} место</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{donor.amount} R$</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Последние транзакции</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'NewPlayer123', amount: 200, time: '2 мин назад', status: 'success' },
                      { name: 'GamerPro', amount: 500, time: '15 мин назад', status: 'success' },
                      { name: 'StreamFan', amount: 100, time: '1 час назад', status: 'success' },
                      { name: 'CoolKid88', amount: 350, time: '2 часа назад', status: 'success' },
                      { name: 'BestPlayer', amount: 450, time: '3 часа назад', status: 'success' },
                    ].map((transaction, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="User" size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{transaction.name}</p>
                            <p className="text-sm text-muted-foreground">{transaction.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">+{transaction.amount} R$</p>
                          <Badge variant="secondary" className="text-xs">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Отправлено
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 animate-fade-in max-w-4xl">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Настройки</h2>
              <p className="text-muted-foreground text-lg">Настройте интеграцию с Roblox и параметры донатов</p>
            </div>

            <Tabs defaultValue="roblox">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="roblox">Roblox API</TabsTrigger>
                <TabsTrigger value="donation">Донаты</TabsTrigger>
                <TabsTrigger value="alerts">Алерты</TabsTrigger>
              </TabsList>
              
              <TabsContent value="roblox" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Подключение Roblox</CardTitle>
                    <CardDescription>
                      Добавьте API ключ для автоматической отправки робуксов
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API Key</Label>
                      <Input 
                        id="api-key" 
                        type="password" 
                        placeholder="Введите ваш Roblox API ключ"
                      />
                      <p className="text-sm text-muted-foreground">
                        Получите API ключ в настройках вашего аккаунта Roblox
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="user-id">Roblox User ID</Label>
                      <Input 
                        id="user-id" 
                        placeholder="Ваш ID пользователя"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Автоматическая отправка</Label>
                        <p className="text-sm text-muted-foreground">
                          Отправлять робуксы сразу после оплаты
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Проверка баланса</Label>
                        <p className="text-sm text-muted-foreground">
                          Проверять наличие робуксов перед принятием доната
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Button className="w-full">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить настройки
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Статус подключения</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="CheckCircle" size={24} className="text-green-500" />
                        <div>
                          <p className="font-medium">API подключен</p>
                          <p className="text-sm text-muted-foreground">Последняя проверка: 2 мин назад</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                        Активно
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Баланс Robux</p>
                        <p className="text-2xl font-bold">15,430 R$</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">Лимит в день</p>
                        <p className="text-2xl font-bold">50,000 R$</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="donation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Параметры донатов</CardTitle>
                    <CardDescription>
                      Настройте минимальные суммы и комиссии
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="min-amount">Минимальная сумма доната</Label>
                      <Input 
                        id="min-amount" 
                        type="number" 
                        placeholder="50"
                        defaultValue="50"
                      />
                      <p className="text-sm text-muted-foreground">
                        Минимальная сумма в робуксах
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-amount">Максимальная сумма доната</Label>
                      <Input 
                        id="max-amount" 
                        type="number" 
                        placeholder="10000"
                        defaultValue="10000"
                      />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="commission">Комиссия платформы</Label>
                      <Input 
                        id="commission" 
                        value="5%"
                        disabled
                      />
                      <p className="text-sm text-muted-foreground">
                        Комиссия платформы за транзакцию
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Показывать донаты в чате</Label>
                        <p className="text-sm text-muted-foreground">
                          Отображать информацию о донатах в чате стрима
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Фильтр сообщений</Label>
                        <p className="text-sm text-muted-foreground">
                          Модерировать сообщения к донатам
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Button className="w-full">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить настройки
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки алертов</CardTitle>
                    <CardDescription>
                      Персонализируйте уведомления о донатах
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="alert-duration">Длительность показа</Label>
                      <Input 
                        id="alert-duration" 
                        type="number" 
                        placeholder="5"
                        defaultValue="5"
                      />
                      <p className="text-sm text-muted-foreground">
                        Секунды показа алерта на экране
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alert-sound">Звук алерта</Label>
                      <select 
                        id="alert-sound" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option>Звук 1 - Колокольчик</option>
                        <option>Звук 2 - Монетки</option>
                        <option>Звук 3 - Фанфары</option>
                        <option>Свой звук</option>
                      </select>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Анимация появления</Label>
                        <p className="text-sm text-muted-foreground">
                          Использовать анимацию при показе алерта
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Озвучка TTS</Label>
                        <p className="text-sm text-muted-foreground">
                          Озвучивать сообщения донатов голосом
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Спецэффекты</Label>
                        <p className="text-sm text-muted-foreground">
                          Конфетти и другие эффекты для крупных донатов
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Button className="w-full">
                      <Icon name="Save" size={16} className="mr-2" />
                      Сохранить настройки
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold">Частые вопросы</h2>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о сервисе</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как работает автоматическая отправка робуксов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  После получения доната система автоматически подключается к Roblox API и отправляет 
                  указанное количество робуксов на аккаунт донатера. Процесс занимает от 10 секунд до 2 минут 
                  в зависимости от загрузки Roblox серверов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Какая комиссия берется за транзакции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Комиссия платформы составляет 5% от суммы доната. Это включает обработку платежа, 
                  интеграцию с Roblox API и техническую поддержку. Никаких скрытых платежей нет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Нужен ли Roblox Premium для работы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, для отправки робуксов другим игрокам через API необходима подписка Roblox Premium. 
                  Без Premium вы сможете принимать донаты, но робуксы нужно будет отправлять вручную.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Можно ли настроить дизайн виджетов?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! В личном кабинете доступен редактор виджетов, где вы можете изменить цвета, шрифты, 
                  размеры и анимации. Также можно загрузить свои изображения и звуки для алертов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Какие платежные методы поддерживаются?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы поддерживаем банковские карты (Visa, Mastercard, МИР), электронные кошельки 
                  (ЮMoney, QIWI), мобильные платежи и криптовалюту. Донатеры выбирают удобный способ оплаты.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Что делать если робуксы не пришли донатеру?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В личном кабинете есть история всех транзакций со статусами. Если робуксы не были отправлены 
                  автоматически, вы можете повторить отправку вручную одной кнопкой. Также работает техподдержка 24/7.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Есть ли мобильное приложение?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Пока нет отдельного мобильного приложения, но личный кабинет полностью адаптирован под 
                  смартфоны и планшеты. Вы можете управлять донатами и проверять статистику с любого устройства.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="border-primary/50 bg-primary/5">
              <CardHeader className="text-center">
                <CardTitle>Не нашли ответ?</CardTitle>
                <CardDescription>Свяжитесь с нашей поддержкой</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4 justify-center">
                <Button variant="outline">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в чат
                </Button>
                <Button>
                  <Icon name="Mail" size={16} className="mr-2" />
                  support@robuxdonates.com
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Rocket" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">RobuxDonates</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для приёма донатов с автоматической отправкой робуксов
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статус</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 RobuxDonates. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
