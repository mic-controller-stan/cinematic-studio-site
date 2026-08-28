'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Studio', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#2d241c]">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-[#2d241c]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent z-10" />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 w-full z-[110] transition-all duration-500 ${
          isScrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.02 }}
            className="font-serif text-xl tracking-tight text-white mix-blend-difference cursor-pointer"
          >
            Lade Studio
          </motion.a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white mix-blend-difference text-xs uppercase tracking-[0.2em] font-light hover:opacity-60 gentle-animation"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-full text-white mix-blend-difference hover:bg-white/10 gentle-animation cursor-pointer"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {isMuted && (
              <div className="absolute -bottom-10 right-0 flex items-center text-white/80 mix-blend-difference">
                <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                <span className="text-lg">↗</span>
              </div>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-full text-white mix-blend-difference hover:bg-white/10 gentle-animation cursor-pointer z-[120] relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-[#2d241c]/60 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#faf8f5] border-l border-[#e6ded2] z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-full text-[#8b7355] hover:bg-[#f0ebe3] gentle-animation cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col px-8 pb-8 h-full">
            <div className="flex flex-col space-y-2 text-[#8b7355]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-4 hover:bg-[#f0ebe3] rounded-lg gentle-animation font-sans text-sm uppercase tracking-[0.2em]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center"
      >
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-6 text-shadow-strong">
          Cinematic Purity
        </h1>
        <p className="text-white/80 uppercase tracking-[0.4em] text-xs sm:text-sm font-sans font-light">
          AI Film Production Without Limits
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-sans">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </motion.div>
    </div>
  )
}
