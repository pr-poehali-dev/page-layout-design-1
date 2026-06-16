import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', icon: 'House' },
  { label: 'Услуги', icon: 'Stethoscope' },
  { label: 'Врачи', icon: 'UserRound' },
  { label: 'Стоматология', icon: 'Smile' },
  { label: 'Программы здоровья', icon: 'HeartPulse' },
  { label: 'Акции', icon: 'Gift' },
  { label: 'Контакты', icon: 'MapPin' },
];

const features = [
  {
    icon: 'Award',
    title: 'Опытные врачи',
    text: 'Специалисты высшей категории с многолетним стажем работы.',
  },
  {
    icon: 'Microscope',
    title: 'Современное оборудование',
    text: 'Диагностика и лечение на технике европейского уровня.',
  },
  {
    icon: 'Clock',
    title: 'Без очередей',
    text: 'Приём строго по записи в удобное для вас время.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Гарантия качества',
    text: 'Прозрачные цены и ответственность за результат лечения.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="tel:+78007001258" className="flex items-center gap-2 text-lg font-bold text-primary">
            <Icon name="Phone" size={20} />
            +7 (800) 700-12-58
          </a>
          <div className="hidden items-center gap-1.5 text-sm text-muted-foreground md:flex">
            <Icon name="MapPin" size={16} />
            г. Ковров, ул. Ватутина, 90
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary transition hover:bg-primary/5">
              Войти
            </button>
            <Button className="hidden rounded-full px-7 py-6 text-base font-bold shadow-lg sm:inline-flex">
              Записаться на приём
            </Button>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-b border-border">
        <div className="container flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-2 text-base font-medium text-foreground/80 transition hover:text-primary"
            >
              <Icon name={item.icon} size={18} className="text-primary" />
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-secondary/60">
        <div className="container py-4 text-sm font-medium text-primary">Главная</div>
      </div>

      {/* Hero */}
      <section className="container grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-in">
          <h1 className="font-sans text-5xl font-medium leading-tight text-foreground sm:text-6xl">
            Первая Клиническая
          </h1>
          <h2 className="mb-7 font-display text-5xl font-extrabold leading-tight text-primary sm:text-7xl">
            Платная Поликлиника
          </h2>
          <p className="mb-10 max-w-md text-2xl font-semibold leading-snug text-primary/90">
            Премиальное медицинское обслуживание европейского уровня
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-9 py-7 text-lg font-bold shadow-xl shadow-primary/20 hover-scale">
              Записаться на приём
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-primary px-9 py-7 text-lg font-bold text-primary hover:bg-primary/5"
            >
              О центре
            </Button>
          </div>
        </div>

        <div className="animate-scale-in overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://cdn.poehali.dev/projects/d5cdecce-90ac-49f6-8f9c-320fa45c1163/bucket/a1371866-68ec-4707-810f-fe53ba0b4d73.png"
            alt="Здание клиники"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-xl"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon name={f.icon} size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <span className="font-bold text-primary">ПКМЦ — Первый Клинический Медицинский Центр</span>
          <span>г. Ковров, ул. Ватутина, 90 · +7 (800) 700-12-58</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
