import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const tourOperators = [
  "Все операторы", "Библио-Глобус", "Fun&Sun", "Anextour", "Русский экспресс", 
  "Интурист", "Европорт", "1001 тур", "Островок", "Pegas Алсу", "Pegas Регина", 
  "Pegas", "Space travel", "Sunnar", "Coral travel", "Kazunion", "Online-express", 
  "Pac Group", "Алан", "Инфлот", "Турплатформа"
];

const destinations = [
  {
    id: 1,
    title: "Мальдивы",
    description: "Райские острова с белоснежными пляжами",
    image: "https://cdn.poehali.dev/projects/a683ce2c-bc45-453d-89c8-ed36451d5c06/files/213bde54-ab0d-46a6-8671-efdc62fd4c64.jpg",
    price: "от 350 000 ₽",
    duration: "7-14 ночей"
  },
  {
    id: 2,
    title: "Швейцарские Альпы",
    description: "Премиальный горнолыжный отдых",
    image: "https://cdn.poehali.dev/projects/a683ce2c-bc45-453d-89c8-ed36451d5c06/files/5701ebee-203f-4866-a2a8-2b5ad2f697cf.jpg",
    price: "от 280 000 ₽",
    duration: "5-10 ночей"
  },
  {
    id: 3,
    title: "Таиланд",
    description: "Экзотика Юго-Восточной Азии",
    image: "https://cdn.poehali.dev/projects/a683ce2c-bc45-453d-89c8-ed36451d5c06/files/0cef8805-4087-474c-8685-79f0b3486f6a.jpg",
    price: "от 180 000 ₽",
    duration: "10-14 ночей"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Анна Волкова",
    text: "Превосходный сервис! Организовали идеальный отдых на Мальдивах. Каждая деталь продумана до мелочей.",
    rating: 5,
    destination: "Мальдивы"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    text: "Профессиональный подход и внимание к VIP-клиентам. Швейцария была незабываемой!",
    rating: 5,
    destination: "Швейцария"
  }
];

const specialOffers = [
  {
    id: 1,
    title: "Раннее бронирование лето 2025",
    discount: "-25%",
    description: "Эксклюзивные предложения на премиальные курорты",
    validUntil: "до 31 декабря"
  },
  {
    id: 2,
    title: "VIP пакет Мальдивы",
    discount: "-15%",
    description: "Роскошные виллы на воде с персональным дворецким",
    validUntil: "до 15 января"
  }
];

export default function Index() {
  const [operator, setOperator] = useState("Все операторы");
  const [destination, setDestination] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [hotelRating, setHotelRating] = useState([3]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={32} className="text-accent" />
              <h1 className="text-3xl font-bold">Luxury Travel</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Главная', 'Туры', 'Направления', 'О компании', 'Отзывы', 'Контакты', 'Спецпредложения'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-accent transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 border-0">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Премиальные путешествия для VIP-клиентов
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Эксклюзивный подбор туров от 20+ ведущих операторов
            </p>
            <p className="text-lg text-white/80">
              Персональный сервис • Лучшие цены • Безупречное качество
            </p>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Найти идеальный тур</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Направление</label>
                  <Input 
                    placeholder="Куда хотите поехать?" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Туроператор</label>
                  <Select value={operator} onValueChange={setOperator}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tourOperators.map((op) => (
                        <SelectItem key={op} value={op}>
                          {op}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Дата вылета</label>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Количество ночей</label>
                  <Select defaultValue="7">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 ночи</SelectItem>
                      <SelectItem value="7">7 ночей</SelectItem>
                      <SelectItem value="10">10 ночей</SelectItem>
                      <SelectItem value="14">14 ночей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-6 bg-muted/50 rounded-lg">
                <div>
                  <label className="block text-sm font-medium mb-3 text-foreground flex items-center justify-between">
                    <span className="flex items-center">
                      <Icon name="Wallet" size={18} className="mr-2 text-accent" />
                      Бюджет поездки
                    </span>
                    <span className="text-accent font-semibold">
                      {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                    </span>
                  </label>
                  <Slider 
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={50000}
                    max={1000000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50 000 ₽</span>
                    <span>1 000 000 ₽</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-foreground flex items-center justify-between">
                    <span className="flex items-center">
                      <Icon name="Star" size={18} className="mr-2 text-accent" />
                      Рейтинг отеля
                    </span>
                    <span className="text-accent font-semibold flex items-center">
                      {hotelRating[0]}+ 
                      <Icon name="Star" size={16} className="ml-1 fill-accent text-accent" />
                    </span>
                  </label>
                  <Slider 
                    value={hotelRating}
                    onValueChange={setHotelRating}
                    min={3}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>3 звезды</span>
                    <span>5 звёзд</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                <Icon name="Search" size={20} className="mr-2" />
                Найти туры
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Спецпредложения</h2>
            <p className="text-xl text-muted-foreground">Эксклюзивные предложения для наших клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                      {offer.discount}
                    </Badge>
                    <Icon name="Sparkles" size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Действует {offer.validUntil}</span>
                    <Button variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Популярные направления</h2>
            <p className="text-xl text-muted-foreground">Откройте мир роскошного отдыха</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Card key={dest.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{dest.title}</h3>
                    <p className="text-sm text-white/90">{dest.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{dest.duration}</p>
                      <p className="text-2xl font-bold text-accent">{dest.price}</p>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90">
                      Выбрать
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Мнение тех, кто доверил нам свой отдых</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.destination}</p>
                    </div>
                    <Icon name="Quote" size={32} className="text-muted-foreground/20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">О компании Luxury Travel</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы специализируемся на организации премиальных путешествий для VIP-клиентов. 
              Работаем с 20+ ведущими туроператорами России, что позволяет предложить вам 
              лучшие условия и эксклюзивные предложения.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">15 лет</h3>
                <p className="text-muted-foreground">на рынке премиального туризма</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={40} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">5000+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">120</h3>
                <p className="text-muted-foreground">стран мира</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Офис в Москве</p>
                      <p className="text-white/80">Кутузовский проспект, 36, стр. 3</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-white/80">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">info@luxurytravel.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Часы работы</p>
                      <p className="text-white/80">Пн-Пт: 10:00 - 20:00</p>
                      <p className="text-white/80">Сб-Вс: 11:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Input placeholder="Телефон" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 Luxury Travel. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}