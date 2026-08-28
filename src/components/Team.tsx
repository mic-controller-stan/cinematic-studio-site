'use client'

import { motion } from 'framer-motion'
import marcusPhoto from '../assets/team-member-1.png'
import sofiaPhoto from '../assets/team-member-2.png'
import jakePhoto from '../assets/team-member-3.png'
import mayaPhoto from '../assets/team-member-4.png'
import connorPhoto from '../assets/team-member-5.png'
import zaraPhoto from '../assets/team-member-6.png'
import leoPhoto from '../assets/team-member-7.png'

const team = [
  { name: 'Marcus Chen', role: 'Creative Director', image: marcusPhoto },
  { name: 'Sofia Rivera', role: 'Executive Producer', image: sofiaPhoto },
  { name: 'Jake Morrison', role: 'Technical Director', image: jakePhoto },
  { name: 'Maya Patel', role: 'AI Engineer', image: mayaPhoto },
  { name: 'Connor Walsh', role: 'Lead Filmmaker', image: connorPhoto },
  { name: 'Zara Kim', role: 'Motion Designer', image: zaraPhoto },
  { name: 'Leo Santos', role: 'VFX Artist', image: leoPhoto },
]

export function Team() {
  return (
    <section id="team" className="relative py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground mb-6">
            The Collective
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Meet the Studio</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] mb-5 overflow-hidden bg-background rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-foreground">{member.name}</h3>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
