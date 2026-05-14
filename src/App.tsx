import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Instagram, Facebook, ArrowRight, CheckCircle2, ChevronDown, 
  Star, Users, Target, BarChart3, Search, Menu, X, Phone, Zap, Layout, 
  Award, Briefcase, MousePointerClick, TrendingUp, Lightbulb
} from 'lucide-react';
import { cn } from './lib/utils';

// --- UI Components ---

const Button = ({ children, variant = 'primary', className, pulse, ...props }: any) => {
  const variants = {
    primary: 'btn-metallic text-dark',
    secondary: 'border border-primary/40 text-white hover:bg-primary/10',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    dark: 'bg-dark text-white hover:bg-dark/80 border border-white/10'
  };
  return (
    <button className={cn("px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2", variants[variant], pulse && "animate-pulse", className)} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ top, title, subtitle, light, centered }: any) => (
  <div className={cn("mb-12", centered && "text-center mx-auto max-w-3xl")}>
    {top && <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">{top}</span>}
    <h2 className={cn("text-3xl md:text-5xl mb-4 font-serif", light ? "text-white" : "text-dark")}>{title}</h2>
    {subtitle && <p className={cn("text-lg", light ? "text-white/60" : "text-text")}>{subtitle}</p>}
  </div>
);

// --- Sections ---

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  React.useEffect(() => {
    window.onscroll = () => setScrolled(window.scrollY > 50);
  }, []);

  return (
    <nav className={cn("fixed top-0 w-full z-50 py-6 transition-all duration-300", scrolled ? "bg-dark/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent")}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 metallic-gold rounded flex items-center justify-center font-bold text-dark font-serif text-xl">HB</div>
          <div className="flex flex-col">
            <span className="text-white font-serif text-xl leading-none">HIGH BROKERS</span>
            <span className="text-[8px] text-primary tracking-[0.3em] font-bold">POSICIONAMENTO IMOBILIÁRIO</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-white/70">
          {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Depoimentos', 'FAQ', 'Contato'].map(i => <a key={i} href="#" className="hover:text-primary transition-colors">{i}</a>)}
        </div>
        <button className="hidden lg:flex items-center gap-2 border border-primary/40 px-4 py-2 rounded text-[10px] font-bold text-white uppercase tracking-widest hover:bg-primary/10 transition-all">
          Falar no WhatsApp <MessageCircle size={14} className="text-primary"/>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen bg-dark dark-geometric relative flex items-center pt-24 overflow-hidden">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
        <h1 className="text-4xl md:text-7xl text-white mb-6 font-serif leading-[1.1]">
          Posicionamento, autoridade e vendas para o mercado imobiliário <span className="text-primary italic">de alto padrão.</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          A High Brokers estrutura presença, autoridade e performance comercial para corretores, imobiliárias e negócios imobiliários que querem crescer em outro nível.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <Button>FALAR COM A HIGH BROKERS <MessageCircle size={18}/></Button>
          <Button variant="dark">VER ESTRATÉGIA PARA IMOBILIÁRIAS</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {[
            { icon: <Briefcase size={16}/>, t: "Estratégia personalizada" },
            { icon: <Target size={16}/>, t: "Foco em resultados" },
            { icon: <Award size={16}/>, t: "Mais autoridade" },
            { icon: <Users size={16}/>, t: "Leads qualificados" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-primary">{item.icon}</div>
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">{item.t}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-auto opacity-90"/>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-10 -right-10 lg:right-[-20%] w-2/3 z-20">
           <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1932&auto=format&fit=crop" alt="Folder" className="rounded-lg shadow-2xl border border-primary/20 rotate-1 flex-shrink-0"/>
        </div>
        {/* Floating Logo Element */}
        <div className="absolute -top-10 -left-10 opacity-20 floating-slow">
           <div className="w-40 h-40 metallic-gold rounded-full blur-[80px]" />
        </div>
      </motion.div>
    </div>
  </section>
);

const Positioning = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl relative z-10">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
      </div>
      <div>
        <SectionHeading top="POSICIONAMENTO" title="Para quem quer deixar de parecer apenas um corretor no mercado." />
        <p className="text-lg text-text mb-8 leading-relaxed italic">
          No mercado imobiliário, quem vende mais não é apenas quem tem bons imóveis. É quem tem posicionamento, autoridade, processo comercial e presença digital capaz de gerar confiança antes mesmo do primeiro contato.
        </p>
        <p className="text-lg text-dark font-bold mb-8 italic">A High Brokers nasce para estruturar essa percepção de valor.</p>
        <div className="space-y-4">
          {[
            "Autoridade para corretores e imobiliárias",
            "Presença digital com estética premium",
            "Estratégia de aquisição de leads qualificados",
            "Comunicação focada em imóveis de alto valor",
            "Posicionamento para vender confiança, não apenas imóveis"
          ].map((t, i) => (
            <div key={i} className="flex gap-4 items-center">
              <CheckCircle2 className="text-primary" size={20}/>
              <span className="font-bold text-dark text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 bg-dark dark-geometric text-center">
    <div className="container mx-auto px-6">
      <SectionHeading light centered top="O PROBLEMA" title="O mercado imobiliário está cheio de bons profissionais invisíveis." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Users size={32}/>, t: "Corretores sem posicionamento", d: "Muitos profissionais têm experiência, mas comunicam como amadores no digital." },
          { icon: <Layout size={32}/>, t: "Imobiliárias parecidas demais", d: "A maioria usa as mesmas frases e anúncios, derrubando a percepção de valor." },
          { icon: <Target size={32}/>, t: "Leads desqualificados", d: "Sem estratégia, o tráfego vira volume vazio de curiosos sem perfil de compra." },
          { icon: <BarChart3 size={32}/>, t: "Falta de processo comercial", d: "O problema muitas vezes é falta de abordagem, follow-up e CRM eficiente." }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-xl hover:border-primary/50 transition-all">
             <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
             <h3 className="text-xl text-white mb-4 font-serif">{item.t}</h3>
             <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading top="A SOLUÇÃO HIGH BROKERS" title="Uma estrutura premium para atrair, posicionar e converter." />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          { icon: <Star size={24}/>, t: "Posicionamento Premium", d: "Presença forte e refinada." },
          { icon: <Search size={24}/>, t: "Aquisição Qualificada", d: "Funis para atrair real intenção." },
          { icon: <TrendingUp size={24}/>, t: "Estrutura Comercial", d: "CRM e jornada do lead organizada." },
          { icon: <MessageCircle size={24}/>, t: "Conteúdo de Autoridade", d: "Narrativas que geram referência." },
          { icon: <Briefcase size={24}/>, t: "Captação de Imóveis", d: "Atração estratégica de proprietários." },
          { icon: <BarChart3 size={24}/>, t: "Performance e Métricas", d: "Acompanhamento de indicadores reais." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
             <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all text-primary">{item.icon}</div>
             <h3 className="text-sm font-bold text-dark mb-4 group-hover:text-primary">{item.t}</h3>
             <p className="text-[11px] text-text leading-tight">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="py-24 bg-dark overflow-hidden">
    <div className="container mx-auto px-6">
       <div className="flex justify-between items-end mb-12">
        <SectionHeading light top="PORTFÓLIO" title="Uma marca imobiliária precisa ser vista como alto padrão antes da primeira reunião." />
        <Button variant="outline" className="hidden lg:flex border-white/20 text-white mb-12">VER TODOS OS PROJETOS</Button>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { t: "Identidade para Corretores", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
           { t: "Landing Pages Imobiliárias", img: "https://images.unsplash.com/photo-1600607687940-c52af0369996?q=80&w=2070&auto=format&fit=crop" },
           { t: "Campanhas de Imóveis Premium", img: "https://images.unsplash.com/photo-1460317442991-0ec239fe979a?q=80&w=2070&auto=format&fit=crop" },
           { t: "Criativos para Captação", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" },
           { t: "Conteúdo para Instagram", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
           { t: "Apresentações Comerciais", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" },
           { t: "Funis para Lançamentos", img: "https://images.unsplash.com/photo-1454165833222-38531109315d?q=80&w=2070&auto=format&fit=crop" },
           { t: "Materiais para Imobiliárias", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop" }
         ].map((item, i) => (
           <div key={i} className="group relative h-64 rounded-xl overflow-hidden border border-white/10">
             <img src={item.img} alt={item.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
             <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end p-8">
               <span className="text-white text-xs font-bold uppercase tracking-widest">{item.t}</span>
             </div>
           </div>
         ))}
       </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-bg">
    <div className="container mx-auto px-6">
      <SectionHeading top="SERVIÇOS" title="Serviços para transformar presença em oportunidade comercial." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { n: "01", t: "Branding para Corretores e Imobiliárias", d: "Construção de identidade, posicionamento, tom de voz e percepção premium." },
          { n: "02", t: "Landing Pages Imobiliárias", d: "Páginas de alta conversão para imóveis, lançamentos, captação ou posicionamento institucional." },
          { n: "03", t: "Gestão de Tráfego Imobiliário", d: "Campanhas no Meta Ads e Google Ads focadas em leads qualificados e oportunidades reais." },
          { n: "04", t: "Funis de Captação", d: "Estratégias para atrair compradores, investidores, proprietários e interessados em imóveis específicos." },
          { n: "05", t: "Conteúdo e Autoridade", d: "Planejamento de conteúdo para Instagram, Reels, criativos, copywriting e posicionamento digital." },
          { n: "06", t: "Estrutura Comercial e CRM", d: "Organização de pipeline, follow-up, atendimento, qualificação de leads e processo de vendas." }
        ].map((s, i) => (
          <div key={i} className="bg-white p-12 border border-border group hover:border-primary/40 transition-all flex flex-col items-start text-left">
            <span className="text-primary font-serif text-3xl mb-8 group-hover:scale-110 transition-transform block">{s.n}</span>
            <h3 className="text-lg font-bold text-dark mb-6 pr-10">{s.t}</h3>
            <p className="text-text text-sm leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 bg-dark dark-geometric">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading light top="PROCESSO" title="Como a High Brokers estrutura sua presença para vender mais." />
          <div className="relative mt-20">
            <div className="timeline-line hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
              {['Diagnóstico', 'Estratégia', 'Construção', 'Ativação', 'Otimização'].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 rounded-full metallic-gold mx-auto mb-6 flex items-center justify-center font-bold text-dark text-lg border-4 border-dark group-hover:scale-110 transition-transform">{i+1}</div>
                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-white/10 p-12 rounded-2xl bg-white/5 relative">
           <SectionHeading light top="AUTORIDADE" title="Não é sobre postar imóveis. É sobre construir percepção de valor." />
           <div className="grid grid-cols-2 gap-12 mt-12">
             {[
               { n: "+120", t: "Clientes estruturados" },
               { n: "+35", t: "Funis e páginas planejadas" },
               { n: "+R$ milhões", t: "Em oportunidades acompanhadas" },
               { n: "100%", t: "Foco no resultado individual e comercial" }
             ].map((stat, i) => (
               <div key={i}>
                 <p className="text-3xl text-primary font-serif mb-2">{stat.n}</p>
                 <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold leading-tight">{stat.t}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section className="py-24 bg-bg relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
       <div className="bg-[url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center h-[400px] rounded-[40px] flex items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-dark/70" />
         <div className="relative z-10 flex flex-col items-center">
            <Button className="py-6 px-12 text-xl" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <MessageCircle /> QUERO UMA ANÁLISE DA MINHA MARCA
            </Button>
         </div>
       </div>
    </div>
  </section>
);

const AudienceFAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "A High Brokers atende apenas corretores?", a: "Não. Atendemos corretores, imobiliárias, brokers, incorporadoras e negócios imobiliários." },
    { q: "Vocês fazem apenas identidade visual?", a: "Não. A proposta é unir identidade, estratégia, marketing e estrutura comercial." },
    { q: "A landing page pode ser para um imóvel específico?", a: "Sim. Podemos criar páginas para imóveis, lançamentos ou posicionamento institucional." },
    { q: "Vocês fazem tráfego pago?", a: "Sim. Nossas estratégias podem incluir Meta Ads e Google Ads." },
    { q: "Preciso ter equipe comercial?", a: "Não obrigatoriamente. Ajudamos a organizar seu processo de atendimento e qualificação." }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading top="PARA QUEM É" title="A High Brokers é para quem quer jogar em outro nível." />
          <div className="grid md:grid-cols-1 gap-4">
            {[
              "Corretores que querem se posicionar como especialistas",
              "Imobiliárias que querem uma presença mais premium",
              "Brokers que atuam com imóveis de alto padrão",
              "Empresas que querem captar imóveis com mais previsibilidade",
              "Gestores que querem estruturar marketing e comercial",
              "Negócios imobiliários que querem parar de depender de indicação"
            ].map((t, i) => (
              <div key={i} className="flex gap-4 items-center p-4 bg-white/50 rounded-xl border border-white">
                <CheckCircle2 className="text-primary" size={18}/>
                <span className="text-xs font-bold text-dark/70 uppercase tracking-tight">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading top="DÚVIDAS FREQUENTES" title="Tudo o que você precisa saber." />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-dark/10">
                <button className="w-full flex justify-between items-center py-6 text-left" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="font-bold text-dark text-sm uppercase tracking-widest">{f.q}</span>
                  <ChevronDown className={cn("transition-transform", open === i && "rotate-180")} size={20}/>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pb-6 text-text">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Header />
      <Hero />
      <Positioning />
      <ProblemSection />
      <SolutionSection />
      <Portfolio />
      <Services />
      <Process />
      {/* Testimonials would go here - simplified for space */}
      <TestimonialsSection />
      <ContactCTA />
      <AudienceFAQ />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

const TestimonialsSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading centered top="DEPOIMENTOS" title="Quem se posiciona melhor, vende com mais autoridade." />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { n: "Marcos V.", r: "Corretor de Imóveis", t: "Depois que reposicionamos nossa comunicação, começamos a receber contatos mais alinhados com imóveis de maior valor." },
          { n: "Fernanda L.", r: "Gestora Imobiliária", t: "A High Brokers trouxe clareza. Hoje nossa imobiliária comunica melhor, atende melhor e tem controle sobre os leads." },
          { n: "Ricardo A.", r: "Broker", t: "O trabalho não foi só visual. Eles organizaram nossa presença, nossa oferta e nosso processo comercial." }
        ].map((t, i) => (
          <div key={i} className="p-10 bg-surface rounded-2xl border border-border relative">
             <div className="flex gap-1 mb-6 text-primary">
               {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor"/>)}
             </div>
             <p className="italic text-text text-sm mb-8 leading-relaxed">"{t.t}"</p>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center font-bold text-dark/30 text-[10px]">{t.n[0]}</div>
                <div>
                   <p className="font-bold text-dark text-xs">{t.n}</p>
                   <p className="text-primary text-[10px] uppercase font-bold tracking-widest">{t.r}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-dark text-white border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 metallic-gold rounded flex items-center justify-center font-bold text-dark font-serif text-sm">HB</div>
            <span className="font-serif text-lg">HIGH BROKERS</span>
          </div>
          <p className="text-white/40 max-w-sm text-sm italic">High Brokers — Posicionamento, autoridade e performance para o mercado imobiliário que joga em alto nível.</p>
        </div>
        <div className="flex gap-4">
           {['Instagram', 'WhatsApp', 'Facebook'].map(s => (
             <div key={s} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer">
                <Instagram size={18} />
             </div>
           ))}
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em]">
        <span>© 2026 High Brokers</span>
        <span className="italic">Exclusividade em cada detalhe.</span>
      </div>
    </div>
  </footer>
);

const WhatsAppFloating = () => (
  <button className="fixed bottom-10 right-10 z-[100] w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce">
    <MessageCircle size={32} />
  </button>
);
