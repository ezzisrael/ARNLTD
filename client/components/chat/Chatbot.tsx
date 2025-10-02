import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

type View = "home" | "services" | "about" | "projects" | "contact" | "quote";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("home");
  const [pos, setPos] = useState({ left: 16, bottom: 16 });
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [enabled, setEnabled] = useState<boolean>(() => {
    try { return localStorage.getItem('chatbot_enabled') !== 'false'; } catch { return true; }
  });

  useEffect(() => {
    if (!enabled) return;
    const id = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(id);
  }, [enabled]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    try { localStorage.setItem('chatbot_enabled', String(enabled)); } catch {}
  }, [enabled]);

  useEffect(() => {
    const onOpen = () => { setEnabled(true); setOpen(true); };
    const onClose = () => setOpen(false);
    const onEnable = () => setEnabled(true);
    const onDisable = () => { setOpen(false); setEnabled(false); };
    const onToggle = () => setOpen((v) => !v);
    const onEnableAndOpen = () => { setEnabled(true); setOpen(true); };
    window.addEventListener('chatbot:open', onOpen as EventListener);
    window.addEventListener('chatbot:close', onClose as EventListener);
    window.addEventListener('chatbot:enable', onEnable as EventListener);
    window.addEventListener('chatbot:disable', onDisable as EventListener);
    window.addEventListener('chatbot:toggle', onToggle as EventListener);
    window.addEventListener('chatbot:enableAndOpen', onEnableAndOpen as EventListener);
    return () => {
      window.removeEventListener('chatbot:open', onOpen as EventListener);
      window.removeEventListener('chatbot:close', onClose as EventListener);
      window.removeEventListener('chatbot:enable', onEnable as EventListener);
      window.removeEventListener('chatbot:disable', onDisable as EventListener);
      window.removeEventListener('chatbot:toggle', onToggle as EventListener);
      window.removeEventListener('chatbot:enableAndOpen', onEnableAndOpen as EventListener);
    };
  }, []);

  function Home() {
    return (
      <div className="space-y-3">
        <p>👋 Welcome to Aron Nigeria Limited. How can we help you today?</p>
        <div className="grid grid-cols-1 gap-2">
          <button className="btn" onClick={() => setView("services")}>
            🏗 View Our Services
          </button>
          <button className="btn" onClick={() => setView("about")}>
            🏢 Learn About Aron
          </button>
          <button className="btn" onClick={() => setView("projects")}>
            📂 See Our Projects
          </button>
          <button className="btn" onClick={() => setView("contact")}>
            📞 Contact Us
          </button>
          <button className="btn" onClick={() => setView("quote")}>
            📋 Request a Quote
          </button>
        </div>
      </div>
    );
  }

  function Services() {
    return (
      <div className="space-y-3">
        <p>
          We specialize in:
          <br />• Infrastructure Development
          <br />• Housing Projects
          <br />• Government Buildings
          <br />• Educational Facilities
        </p>
        <div className="flex gap-2">
          <button className="btn" onClick={() => setView("projects")}>
            Yes, Show Projects
          </button>
          <button className="btn" onClick={() => setView("home")}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <div className="space-y-3">
        <p>
          Since 1984, Aron Nigeria Limited has been delivering landmark projects
          across Nigeria. We build with integrity, innovation, and precision.
        </p>
        <Link to="/about" className="btn">
          About Us Page
        </Link>
        <button className="btn" onClick={() => setView("home")}>
          Go Back
        </button>
      </div>
    );
  }

  function Projects() {
    return (
      <div className="space-y-3">
        <p>
          Some completed works:
          <br />• National Stadium Renovation (Lagos)
          <br />• Federal Housing Project (Abuja)
          <br />• Education Facility (Ibadan)
        </p>
        <Link to="/projects" className="btn">
          See Full Portfolio
        </Link>
        <button className="btn" onClick={() => setView("home")}>
          Go Back
        </button>
      </div>
    );
  }

  function Contact() {
    return (
      <div className="space-y-3">
        <p>
          You can reach us via:
          <br />
          📞 +234 [phone number]
          <br />
          📧 info@aronnigeria.com.ng
        </p>
        <button className="btn" onClick={() => setView("quote")}>
          Open Contact Form
        </button>
        <button className="btn" onClick={() => setView("home")}>
          Go Back
        </button>
      </div>
    );
  }

  function Quote() {
    function submit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      toast({
        title: "Submitted",
        description: "Our team will respond within 24 hours.",
      });
      setView("home");
    }
    return (
      <form onSubmit={submit} className="space-y-2">
        <div>
          <label className="block text-xs font-medium">Full Name</label>
          <input required className="input" />
        </div>
        <div>
          <label className="block text-xs font-medium">Email Address</label>
          <input type="email" required className="input" />
        </div>
        <div>
          <label className="block text-xs font-medium">Project Type</label>
          <input className="input" />
        </div>
        <div>
          <label className="block text-xs font-medium">Budget Range</label>
          <input className="input" />
        </div>
        <div className="flex gap-2 pt-1">
          <button className="btn" type="submit">
            Submit Form
          </button>
          <button className="btn" type="button" onClick={() => setView("home")}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  if (!enabled) return null;

  return (
    <div className="fixed z-50" style={{ left: pos.left, bottom: pos.bottom }}>
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        onPointerDown={(e) => {
          if (isMobile) return; // no drag on mobile
          setDragging(true);
          const startX = e.clientX;
          const startY = e.clientY;
          const startLeft = pos.left;
          const startBottom = pos.bottom;
          const onMove = (ev: PointerEvent) => {
            if (!dragging) return;
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            const nextLeft = Math.max(8, Math.min(window.innerWidth - 72, startLeft + dx));
            const nextBottom = Math.max(8, Math.min(window.innerHeight - 72, startBottom - dy));
            setPos({ left: nextLeft, bottom: nextBottom });
          };
          const onUp = () => {
            setDragging(false);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
          };
          window.addEventListener('pointermove', onMove);
          window.addEventListener('pointerup', onUp);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg ${isMobile ? '' : 'cursor-grab active:cursor-grabbing'}`}
        style={{ opacity: hover || open ? 1 : 0.36 }}
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      <div
        className={`${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} transform transition-all`}
        style={isMobile ? { position: 'fixed', left: 12, right: 12, bottom: pos.bottom + 80 } : { position: 'fixed', left: pos.left, bottom: pos.bottom + 80 }}
      >
        <div className={`${isMobile ? 'w-full h-[70vh] rounded-2xl' : 'mt-3 w-80 max-w-[92vw] rounded-2xl'} overflow-hidden shadow-2xl border bg-white`}>
          <div className="bg-black text-white px-4 py-3 flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-primary" />
              <div className="font-semibold">Aron Assistant</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-white/80 hover:text-white text-xs underline" onClick={() => setOpen(false)} aria-label="Close chat">Close</button>
              <button className="text-primary hover:text-primary/80 text-xs underline" onClick={() => { setOpen(false); setEnabled(false); }} aria-label="Hide chat widget">Hide</button>
            </div>
          </div>
          <div className="bg-white p-4 text-sm text-gray-800 space-y-3 h-[calc(70vh-52px)] md:h-auto overflow-auto">
            {view === "home" && <Home />}
            {view === "services" && <Services />}
            {view === "about" && <About />}
            {view === "projects" && <Projects />}
            {view === "contact" && <Contact />}
            {view === "quote" && <Quote />}
          </div>
        </div>
      </div>

      <style>{`.btn{background:#FF6600;color:#fff;padding:.5rem .75rem;border-radius:9999px;text-align:center} .btn:hover{filter:brightness(.95)} .input{width:100%;border:1px solid #e5e7eb;border-radius:.5rem;padding:.5rem .75rem;outline:none} .input:focus{box-shadow:0 0 0 2px rgba(255,102,0,.6)}`}</style>
    </div>
  );
}
