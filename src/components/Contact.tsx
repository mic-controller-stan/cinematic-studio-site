'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast({ title: 'Message sent!', description: "We'll get back to you soon." })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-32 bg-background border-t border-[#e6ded2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground mb-6">
              Contact
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-tight mb-8">
              Let's create the next legacy.
            </h2>
            <a
              href="mailto:hello@lade.studio"
              className="font-serif text-2xl text-foreground hover:text-[#c9b99a] underline underline-offset-8 gentle-animation"
            >
              hello@lade.studio
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="NAME"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full bg-transparent border-b border-[#e6ded2] py-4 text-xs uppercase tracking-[0.2em] font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8b7355] transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full bg-transparent border-b border-[#e6ded2] py-4 text-xs uppercase tracking-[0.2em] font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8b7355] transition-colors"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="MESSAGE"
                rows={1}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full bg-transparent border-b border-[#e6ded2] py-4 text-xs uppercase tracking-[0.2em] font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#8b7355] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-[#8b7355] text-[#faf8f5] font-sans font-semibold text-[10px] uppercase tracking-[0.3em] hover:bg-[#6b5740] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
