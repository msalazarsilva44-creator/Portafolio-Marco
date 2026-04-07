import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Mail, User, MapPin, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from './translations';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = TRANSLATIONS[lang];

  const HERO_IMAGES = [
    // Reemplaza 'me.jpg' con la imagen tuya que coloques en la carpeta /public
    '/me.jpg',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="px-6 sm:px-12 md:px-24">
        <header className="sticky top-0 z-50 py-6 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50 flex flex-col items-center">
          <div className="flex justify-between items-center w-full max-w-5xl">
            <div className="text-xl font-bold tracking-tight z-50">
              <a href="#home" className="hover:text-red-500 transition-colors">Ing. Marco Salazar<span className="text-red-600">.</span></a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
              <nav className="flex gap-8">
                <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
                <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
                <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
                <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
              </nav>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 hover:text-white transition-colors border border-neutral-700 hover:border-red-600 px-3 py-1.5 rounded-full"
                aria-label="Toggle Language"
              >
                {lang === 'es' ? '🇺🇸 EN' : '🇻🇪 ES'}
              </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center gap-4 md:hidden z-50">
              <button
                onClick={toggleLanguage}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 px-2 py-1 rounded"
                aria-label="Toggle Language"
              >
                {lang === 'es' ? '🇺🇸 ENG' : '🇻🇪 ESP'}
              </button>
              <button
                className="text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full min-h-screen bg-neutral-950 flex flex-col items-center pt-24 gap-10 text-xl font-medium text-neutral-300 md:hidden pb-10">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">{t.nav.about}</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">{t.nav.experience}</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">{t.nav.projects}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-500 transition-colors">{t.nav.contact}</a>

              <div className="flex gap-6 mt-10">
                <a href="#" className="hover:text-white transition-colors"><Code className="w-6 h-6" /></a>
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* 2. Hero Section */}
          <section id="home" className="relative min-h-[85vh] flex flex-col justify-center -mx-6 sm:-mx-12 md:-mx-24 px-6 sm:px-12 md:px-24 overflow-hidden isolate">
            {/* Background Slider Implementation */}
            <div className="absolute inset-0 -z-20">
              {HERO_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
            {/* Dark Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-neutral-950/85 -z-10" />

            <div className="max-w-3xl relative z-10">
              <p className="text-red-500 font-medium mb-4 tracking-wide uppercase text-sm">{t.hero.greeting}</p>
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight">
                {t.hero.name}
              </h1>
              <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-neutral-400 tracking-tight">
                {t.hero.subtitle}
              </h2>
              <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.hero.description }}>
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-4 bg-red-600 hover:bg-neutral-800 text-white rounded font-medium shadow-lg shadow-red-600/20 transition-all border border-transparent hover:border-red-600 duration-300">
                  {t.hero.contactBtn}
                </a>
                <a href="#projects" className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-neutral-500 text-white rounded font-medium transition-all duration-300">
                  {t.hero.projectsBtn}
                </a>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-neutral-500" />
            </div>
          </section>

          {/* 3. About Me */}
          <section id="about" className="py-24 border-t border-neutral-800/50">
            <div className="max-w-4xl mx-auto">
              <h3 className="flex items-center text-3xl font-bold mb-10">
                <span className="text-red-600 mr-4 font-mono text-xl"></span>
                {t.about.title}
                <div className="h-[1px] bg-neutral-800 flex-grow ml-8"></div>
              </h3>
              <div className="text-neutral-400 text-lg leading-relaxed flex flex-col gap-6">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <ul className="grid grid-cols-2 gap-2 mt-2 font-mono text-sm max-w-lg text-neutral-300 relative">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> TypeScript</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> PHP Laravel</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Vue.js</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> MongoDB</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Mysql</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> React & Vite</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Node.js</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600"></div> Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Experience */}
          <section id="experience" className="py-24 border-t border-neutral-800/50">
            <div className="max-w-4xl mx-auto">
              <h3 className="flex items-center text-3xl font-bold mb-12">
                <span className="text-red-600 mr-4 font-mono text-xl"></span>
                {t.experience.title}
                <div className="h-[1px] bg-neutral-800 flex-grow ml-8"></div>
              </h3>

              <div className="space-y-12 pl-4 border-l-2 border-neutral-800 ml-2">
                {t.experience.jobs.map((exp: any) => (
                  <div key={exp.id} className="relative pl-8 group">
                    <div className="absolute w-4 h-4 rounded-full bg-neutral-950 border-2 border-red-600 -left-[27px] top-1.5 group-hover:bg-red-600 transition-colors"></div>

                    <h4 className="text-xl font-semibold text-white">{exp.role} <span className="text-red-500">@ {exp.company}</span></h4>
                    <p className="text-sm font-mono text-neutral-500 mt-1 mb-4">{exp.dates}</p>

                    <ul className="space-y-3 text-neutral-400">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <li key={i} className="flex tracking-wide">
                          <span className="text-red-600 mr-2 mt-1">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Projects */}
          <section id="projects" className="py-24 border-t border-neutral-800/50">
            <div className="max-w-[1000px] mx-auto">
              <h3 className="flex items-center text-3xl font-bold mb-12">
                <span className="text-red-600 mr-4 font-mono text-xl"></span>
                {t.projects.title}
                <div className="h-[1px] bg-neutral-800 flex-grow ml-8"></div>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.projects.items.map((project: any) => (
                  <div key={project.id} className="group bg-neutral-900 border border-neutral-800 rounded flex flex-col p-6 hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20">
                    <div className="flex justify-between items-center mb-6 text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 stroke-red-600 opacity-60"><title>Directorio</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <a href={project.liveUrl} className="text-neutral-400 hover:text-white transition-colors" aria-label="Ver Demo">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3 text-neutral-100 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-3 font-mono text-[13px] text-neutral-500 mt-auto">
                      {project.technologies.map((tech: string) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Contact */}
          <section id="contact" className="py-32 border-t border-neutral-800/50 text-center max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h3>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              {t.contact.text}
            </p>

            <a href="https://wa.me/+584129210988" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-transparent border border-red-600 text-white rounded font-medium hover:bg-red-600/10 transition-colors duration-300">
              {t.contact.btn}
            </a>

            <div className="mt-16 flex justify-center gap-8 text-neutral-400">
              <a href="mailto:tu-correo@gmail.com" className="hover:text-white transition-colors" aria-label="Gmail">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://wa.me/584129210988" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </section>

        </main>

        {/* 7. Footer */}
        <footer className="py-8 text-center text-neutral-500 font-mono text-sm border-t border-neutral-900">
          <p>{t.footer.builtWith} <span className="text-red-600"></span> {t.footer.using}</p>
          <p className="mt-2 text-neutral-600">&copy; {new Date().getFullYear()} Marco Salazar. {t.footer.rights}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
