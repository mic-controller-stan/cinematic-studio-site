'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Echoes of Sand',
    category: 'Narrative',
    span: 'col-span-12 md:col-span-8 row-span-2',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
  },
  {
    title: 'Desert Light',
    category: 'Commercial',
    span: 'col-span-12 md:col-span-4 row-span-1',
    isText: true,
  },
  {
    title: 'Still Motion',
    category: 'Brand Film',
    span: 'col-span-12 md:col-span-4 row-span-2',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12 border-b border-[#e6ded2] pb-4"
        >
          <h2 className="font-serif text-5xl text-foreground">Work</h2>
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
            Selected Projects
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[220px] md:auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.span} relative overflow-hidden group ${
                project.isText ? 'bg-[#c9b99a] flex flex-col justify-end p-8' : 'bg-card'
              }`}
            >
              {!project.isText && (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d241c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-sans">{project.category}</span>
                    <h3 className="font-serif text-2xl md:text-3xl mt-1">{project.title}</h3>
                  </div>
                </>
              )}
              {project.isText && (
                <>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-sans mb-2">{project.category}</span>
                  <h3 className="font-serif text-2xl text-white leading-tight">{project.title}</h3>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-8 row-span-1 bg-card flex items-center px-8 md:px-12"
          >
            <p className="font-serif text-xl md:text-2xl italic text-foreground">
              Crafting visual legacies for global brands and independent visionaries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
