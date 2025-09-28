import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

 type View = 'home'|'services'|'about'|'projects'|'contact'|'quote';

export default function Chatbot(){
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('home');

  useEffect(()=>{
    const id = setTimeout(()=> setOpen(true), 3000);
    return ()=> clearTimeout(id);
  },[]);

  function Home(){
    return (
      <div className="space-y-3">
        <p>👋 Welcome to Aron Nigeria Limited. How can we help you today?</p>
        <div className="grid grid-cols-1 gap-2">
          <button className="btn" onClick={()=>setView('services')}>🏗 View Our Services</button>
          <button className="btn" onClick={()=>setView('about')}>🏢 Learn About Aron</button>
          <button className="btn" onClick={()=>setView('projects')}>📂 See Our Projects</button>
          <button className="btn" onClick={()=>setView('contact')}>📞 Contact Us</button>
          <button className="btn" onClick={()=>setView('quote')}>📋 Request a Quote</button>
        </div>
      </div>
    );
  }

  function Services(){
    return (
      <div className="space-y-3">
        <p>We specialize in:
          <br/>• Infrastructure Development
          <br/>• Housing Projects
          <br/>• Government Buildings
          <br/>• Educational Facilities
        </p>
        <div className="flex gap-2"><button className="btn" onClick={()=>setView('projects')}>Yes, Show Projects</button><button className="btn" onClick={()=>setView('home')}>Go Back</button></div>
      </div>
    );
  }

  function About(){
    return (
      <div className="space-y-3">
        <p>Since 1984, Aron Nigeria Limited has been delivering landmark projects across Nigeria. We build with integrity, innovation, and precision.</p>
        <Link to="/about" className="btn">About Us Page</Link>
        <button className="btn" onClick={()=>setView('home')}>Go Back</button>
      </div>
    );
  }

  function Projects(){
    return (
      <div className="space-y-3">
        <p>Some completed works:
          <br/>• National Stadium Renovation (Lagos)
          <br/>• Federal Housing Project (Abuja)
          <br/>• Education Facility (Ibadan)
        </p>
        <Link to="/projects" className="btn">See Full Portfolio</Link>
        <button className="btn" onClick={()=>setView('home')}>Go Back</button>
      </div>
    );
  }

  function Contact(){
    return (
      <div className="space-y-3">
        <p>You can reach us via:
          <br/>📞 +234 [phone number]
          <br/>📧 info@aronnigeria.com.ng
        </p>
        <button className="btn" onClick={()=>setView('quote')}>Open Contact Form</button>
        <button className="btn" onClick={()=>setView('home')}>Go Back</button>
      </div>
    );
  }

  function Quote(){
    function submit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      toast({ title: 'Submitted', description: 'Our team will respond within 24 hours.' });
      setView('home');
    }
    return (
      <form onSubmit={submit} className="space-y-2">
        <div>
          <label className="block text-xs font-medium">Full Name</label>
          <input required className="input"/>
        </div>
        <div>
          <label className="block text-xs font-medium">Email Address</label>
          <input type="email" required className="input"/>
        </div>
        <div>
          <label className="block text-xs font-medium">Project Type</label>
          <input className="input"/>
        </div>
        <div>
          <label className="block text-xs font-medium">Budget Range</label>
          <input className="input"/>
        </div>
        <div className="flex gap-2 pt-1">
          <button className="btn" type="submit">Submit Form</button>
          <button className="btn" type="button" onClick={()=>setView('home')}>Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button aria-label="Open chat" onClick={()=> setOpen((v)=>!v)} className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-lg">
        {open ? <X/> : <MessageCircle/>}
      </button>

      <div className={`mt-3 w-80 max-w-[92vw] overflow-hidden rounded-2xl shadow-2xl border transform transition-all ${open? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-primary"/>
          <div className="font-semibold">Aron Assistant</div>
        </div>
        <div className="bg-white p-4 text-sm text-gray-800 space-y-3">
          {view==='home' && <Home/>}
          {view==='services' && <Services/>}
          {view==='about' && <About/>}
          {view==='projects' && <Projects/>}
          {view==='contact' && <Contact/>}
          {view==='quote' && <Quote/>}
        </div>
      </div>

      <style>{`.btn{background:#FF6600;color:#fff;padding:.5rem .75rem;border-radius:9999px;text-align:center} .btn:hover{filter:brightness(.95)} .input{width:100%;border:1px solid #e5e7eb;border-radius:.5rem;padding:.5rem .75rem;outline:none} .input:focus{box-shadow:0 0 0 2px rgba(255,102,0,.6)}`}</style>
    </div>
  );
}
