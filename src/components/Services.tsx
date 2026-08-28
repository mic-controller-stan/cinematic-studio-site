'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Creative Direction',
    description: 'From concept architecture to visual language definition.',
  },
  {
    number: '02',
    title: 'Production',
    description: 'Full-scale logistics and execution for global campaigns.',
  },
  {
    number: '03',
    title: 'Post-Production',
    description: 'Premium editing, color grading, and sound architecture.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground mb-6">
            Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">What We Develop</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-10 md:p-12 text-center border border-[#e6ded2] group hover:bg-[#f0ebe3] gentle-animation"
            >
              <div className="font-serif text-3xl text-[#c9b99a] mb-4 group-hover:text-foreground gentle-transition">
                {service.number}
              </div>
              <h4 className="uppercase tracking-[0.2em] text-sm font-sans font-semibold text-foreground mb-4">
                {service.title}
              </h4>
              <p className="font-sans text-sm font-light text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
