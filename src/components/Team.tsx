'use client'

import { motion } from 'framer-motion'

const founder = { name: 'Girish Lade', role: 'Founder' }

const team = [
  { name: 'Devarsh Lade', role: 'Team' },
  { name: 'Yadnesh Lade', role: 'Team' },
]

const partners = [
  { name: 'Shital Lade', role: 'Partner' },
  { name: 'Snehal Lade', role: 'Partner' },
]

const pillars = [
  { name: 'Pravinkumar Lade Sir', role: 'Guiding Force' },
  { name: 'Sujata Lade', role: 'Guiding Force' },
  { name: 'Revati Lade', role: 'Guiding Force' },
]

function MemberCard({ name, role, index }: { name: string; role: string; index: number }) {
  const initials = name
    .split(' ')
    .map((n) => n.replace(/[^a-zA-Z]/g, '').charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card p-8 text-center rounded-xl hover:bg-[#f0ebe3] transition-colors duration-500"
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#e6ded2] flex items-center justify-center">
        <span className="font-serif text-2xl text-[#8b7355]">{initials}</span>
      </div>
      <h3 className="font-serif text-xl text-foreground">{name}</h3>
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {role}
      </p>
    </motion.div>
  )
}

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

        {/* Founder */}
        <div className="max-w-md mx-auto mb-12">
          <MemberCard name={founder.name} role={founder.role} index={0} />
        </div>

        {/* Team & Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, index) => (
            <MemberCard key={member.name} name={member.name} role={member.role} index={index + 1} />
          ))}
          {partners.map((member, index) => (
            <MemberCard key={member.name} name={member.name} role={member.role} index={index + 3} />
          ))}
        </div>

        {/* Powered by / Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 mb-10"
        >
          <span className="inline-block border-b border-[#c9b99a] pb-2 text-[10px] uppercase tracking-[0.3em] font-sans text-muted-foreground">
            Powered By
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((member, index) => (
            <MemberCard key={member.name} name={member.name} role={member.role} index={index + 5} />
          ))}
        </div>
      </div>
    </section>
  )
}
