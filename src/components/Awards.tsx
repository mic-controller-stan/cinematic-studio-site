'use client'

import { motion } from 'framer-motion'
import minimalBestFilm from '../assets/minimal-best-film.png'
import minimalAudienceChoice from '../assets/minimal-audience-choice.png'
import minimalInnovation from '../assets/minimal-innovation.png'
import minimalDirectorsChoice from '../assets/minimal-directors-choice.png'
import minimalExcellence from '../assets/minimal-excellence.png'
import minimalRisingTalent from '../assets/minimal-rising-talent.png'

export function Awards() {
  const awards = [
    { image: minimalBestFilm, title: 'Best Film' },
    { image: minimalAudienceChoice, title: 'Audience Choice' },
    { image: minimalInnovation, title: 'Innovation' },
    { image: minimalDirectorsChoice, title: "Director's Choice" },
    { image: minimalExcellence, title: 'Excellence' },
    { image: minimalRisingTalent, title: 'Rising Talent' },
  ]

  return (
    <section id="awards" className="relative py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground mb-6">
            Recognition
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Awards & Laurels</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative p-6 rounded-2xl border border-[#e6ded2] bg-background transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <img
                  src={award.image}
                  alt={`${award.title} film festival laurel`}
                  className="w-full h-auto max-w-32 mx-auto"
                />
              </div>
              <span className="mt-4 text-xs uppercase tracking-[0.15em] font-sans text-muted-foreground">
                {award.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
