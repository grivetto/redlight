import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, ChevronDown, Mail, Video, MessageCircle, Camera, AlertTriangle, Instagram, Twitter } from 'lucide-react';

export default function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-stone-800 selection:text-stone-100">
      <AnimatePresence>
        {!isAgeVerified && (
          <AgeGate onVerify={() => setIsAgeVerified(true)} />
        )}
      </AnimatePresence>

      {isAgeVerified && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <FAQ />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

function AgeGate({ onVerify }: { onVerify: () => void }) {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl text-center border border-stone-800 shadow-2xl">
        <AlertTriangle className="w-12 h-12 mx-auto mb-6 text-stone-400" />
        <h2 className="font-serif text-3xl mb-4">Disclaimer 18+</h2>
        <p className="text-stone-400 text-sm mb-8 leading-relaxed font-light">
          Questo sito web contiene materiale destinato esclusivamente a un pubblico adulto. 
          Entrando, dichiari sotto la tua responsabilità di avere almeno 18 anni di età 
          e di acconsentire alla visione di contenuti per adulti.
        </p>
        <div className="flex flex-col gap-4">
          <button 
            onClick={onVerify}
            className="w-full py-3 px-6 bg-stone-100 text-black rounded-full font-medium tracking-wide hover:bg-white transition-colors cursor-pointer"
          >
            Sì, ho più di 18 anni
          </button>
          <a 
            href="https://google.com" 
            className="w-full py-3 px-6 border border-stone-800 rounded-full text-stone-400 font-medium tracking-wide hover:bg-stone-900 transition-colors block"
          >
            No, voglio uscire
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-panel border-b-0 border-stone-900/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif text-2xl tracking-widest uppercase">Isabella</div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium text-stone-400">
          <a href="#about" className="hover:text-stone-100 transition-colors">Chi Sono</a>
          <a href="#services" className="hover:text-stone-100 transition-colors">Servizi</a>
          <a href="#gallery" className="hover:text-stone-100 transition-colors">Galleria</a>
          <a href="#faq" className="hover:text-stone-100 transition-colors">FAQ</a>
        </div>
        <a href="#contact" className="px-5 py-2 border border-stone-700 rounded-full text-xs tracking-widest uppercase hover:bg-stone-100 hover:text-black transition-all">
          Iscriviti
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block text-xs tracking-[0.3em] uppercase text-stone-400 mb-6"
        >
          Eleganza & Seduzione
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8"
        >
          Un'esperienza <br/><span className="italic text-stone-400">indimenticabile</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-stone-300 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Esplora un mondo dove la sensualità incontra la raffinatezza. 
          Contenuti esclusivi, attenzioni private e momenti creati solo per te.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-stone-100 text-black rounded-full text-sm tracking-widest uppercase font-medium hover:bg-white transition-colors">
            Scopri i miei segreti
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 border border-stone-700 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-stone-900 transition-colors">
            I miei servizi
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop" 
            alt="Portrait" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border border-stone-800/50 rounded-2xl"></div>
        </div>
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">Il fascino del <span className="italic text-stone-400">mistero</span></h2>
          <div className="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
            <p>
              Benvenuto nel mio spazio privato. Sono Isabella, e credo che la vera seduzione risieda nell'eleganza, nello sguardo e nelle parole non dette.
            </p>
            <p>
              Ho creato questo angolo digitale per connettermi con chi sa apprezzare la bellezza in tutte le sue sfumature. Qui non troverai solo immagini, ma un'esperienza immersiva, pensata per stimolare la mente prima ancora del corpo.
            </p>
            <p>
              Lasciati guidare in un viaggio dove i tuoi desideri più nascosti prendono forma, con la massima discrezione e professionalità.
            </p>
          </div>
          <div className="mt-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Signature" className="h-12 invert opacity-50" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Contenuti Esclusivi",
      desc: "Accesso a gallerie fotografiche e video privati, aggiornati costantemente. Un lato di me che non mostro da nessun'altra parte."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Call Private",
      desc: "Incontri virtuali one-to-one. Un momento intimo e personalizzato dove la distanza scompare e l'attenzione è tutta per te."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chat & Sexting",
      desc: "Conversazioni stimolanti e senza censure sul mio canale privato. Per chi ama il brivido dell'attesa e il potere delle parole."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4 block">Cosa Offro</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Servizi <span className="italic text-stone-400">Esclusivi</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass-panel p-10 rounded-2xl hover:bg-stone-900/50 transition-colors group">
              <div className="w-14 h-14 rounded-full border border-stone-800 flex items-center justify-center mb-8 text-stone-400 group-hover:text-stone-100 group-hover:border-stone-600 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">{s.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light">Galleria <span className="italic text-stone-400">Privata</span></h2>
          </div>
          <a href="#contact" className="text-sm tracking-widest uppercase border-b border-stone-700 pb-1 hover:text-stone-300 transition-colors">
            Sblocca tutto
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer bg-stone-900">
              <img 
                src={img} 
                alt={`Gallery preview ${i+1}`} 
                className="w-full h-full object-cover blur-xl scale-110 group-hover:blur-lg transition-all duration-500 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <Lock className="w-8 h-8 text-stone-300 mb-3" />
                <span className="text-xs tracking-widest uppercase font-medium">Contenuto Bloccato</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quali metodi di pagamento accetti?",
      a: "Accetto pagamenti sicuri e anonimi tramite criptovalute (Bitcoin, USDT), bonifici bancari istantanei e piattaforme dedicate come OnlyFans o Fansly. La tua privacy finanziaria è garantita."
    },
    {
      q: "Come funziona la prenotazione per una Video Call?",
      a: "Puoi richiedere una sessione contattandomi su Telegram. Discuteremo i tuoi desideri, fisseremo un orario e, una volta ricevuto il pagamento, ti invierò un link privato e sicuro per la nostra chiamata."
    },
    {
      q: "I miei dati e la mia identità sono al sicuro?",
      a: "Assolutamente sì. La discrezione è il pilastro del mio lavoro. Non registro mai le chiamate e non condivido alcuna informazione dei miei clienti. Richiedo lo stesso rispetto da parte tua."
    },
    {
      q: "Ci sono dei limiti ai servizi che offri?",
      a: "Sì. Mantengo un ambiente rispettoso e consensuale. Non accetto richieste che coinvolgano violenza estrema, pratiche illegali o che superino i miei limiti personali, che comunicherò chiaramente in privato."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Domande <span className="italic text-stone-400">Frequenti</span></h2>
          <p className="text-stone-400 font-light">Tutto ciò che devi sapere prima di iniziare la nostra conoscenza.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone-800 rounded-xl overflow-hidden glass-panel">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="font-medium tracking-wide">{question}</span>
        <ChevronDown className={`w-5 h-5 text-stone-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-stone-400 font-light leading-relaxed border-t border-stone-800/50 mt-2 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 border-t border-stone-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-6xl font-light mb-8">Pronto a <span className="italic text-stone-400">iniziare?</span></h2>
        <p className="text-stone-400 font-light text-lg mb-12 max-w-xl mx-auto">
          Scegli il canale che preferisci per iscriverti ai miei contenuti o per contattarmi direttamente per richieste personalizzate.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a href="#" className="w-full sm:w-auto px-10 py-5 bg-stone-100 text-black rounded-full text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors flex items-center justify-center gap-3">
            <Lock className="w-4 h-4" /> OnlyFans
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 border border-stone-700 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-stone-900 transition-colors flex items-center justify-center gap-3">
            <MessageCircle className="w-4 h-4" /> Telegram
          </a>
        </div>

        <div className="border-t border-stone-900 pt-12 flex flex-col items-center">
          <div className="font-serif text-2xl tracking-widest uppercase mb-6 text-stone-600">Isabella</div>
          <div className="flex gap-6 mb-12">
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
          
          <div className="text-xs text-stone-600 space-y-2 font-light tracking-wide">
            <p>© {new Date().getFullYear()} Isabella. Tutti i diritti riservati.</p>
            <p className="uppercase tracking-widest text-[10px] text-stone-500 mt-4">18+ Only • Contenuto per Adulti</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-stone-400 transition-colors">Termini di Servizio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
