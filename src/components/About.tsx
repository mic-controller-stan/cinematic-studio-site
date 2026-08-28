'use client'

import { motion } from 'framer-motion'
import storyboardImage from '@/assets/storyboard-image.avif'

const recognition = [
  { award: 'Cannes Lions', detail: 'Gold / 2023' },
  { award: 'Vimeo Staff Pick', detail: 'Best of Year / 2023' },
  { award: 'Berlin Commercial', detail: 'Winner / 2022' },
]

export function About() {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground">
              The Studio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Founded by Girish Lade.
            </h2>
            <p className="font-sans text-lg font-light leading-relaxed text-foreground/80">
              Lade Studio is a family-built film house dedicated to high-fidelity storytelling. Led by Girish Lade and supported by a close circle of partners and collaborators, we blend editorial precision with cinematic scope to create work that resonates long after the credits roll.
            </p>
            <a
              href="#team"
              className="inline-block border-b border-[#8b7355] pb-1 text-sm uppercase tracking-[0.2em] font-sans text-foreground hover:text-[#c9b99a] gentle-animation"
            >
              Meet the Team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-12 space-y-8"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] font-sans text-muted-foreground font-medium">
              Recognition
            </h3>
            <div className="space-y-6">
              {recognition.map((item) => (
                <div
                  key={item.award}
                  className="flex justify-between items-center border-b border-[#e6ded2] pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-lg italic text-foreground">{item.award}</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-sans text-muted-foreground">{item.detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <p className="text-center font-sans text-sm text-muted-foreground mb-8">
            A glimpse into our storyboard development process
          </p>
          <div className="relative rounded-2xl overflow-hidden bg-card p-3">
            <img
              src={storyboardImage}
              alt="Collection of AI-generated storyboard frames showcasing Lade Studio's visual development process"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
