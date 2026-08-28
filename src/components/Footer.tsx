'use client'

export function Footer() {
  return (
    <footer className="relative py-12 bg-background border-t border-[#e6ded2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl text-foreground tracking-tight">
            Lade Studio
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-sans text-muted-foreground">
            <a href="#portfolio" className="hover:text-foreground gentle-animation">Work</a>
            <a href="#about" className="hover:text-foreground gentle-animation">Studio</a>
            <a href="#services" className="hover:text-foreground gentle-animation">Services</a>
            <a href="#contact" className="hover:text-foreground gentle-animation">Contact</a>
          </div>
          <div className="text-xs font-sans text-muted-foreground tracking-[0.15em]">
            © 2026 Lade Studio
          </div>
        </div>
      </div>
    </footer>
  )
}
