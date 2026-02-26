/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Mail, 
  Camera, 
  Link as LinkIcon, 
  MapPin, 
  ChevronRight, 
  Home, 
  Search, 
  User, 
  Heart,
  BadgeCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const COLORS = {
  bg: '#0a0510',
  card: '#1a1425',
  accent: '#8b5cf6',
  textMuted: '#9ca3af',
  textSecondary: '#a78bfa'
};

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans pb-24" style={{ backgroundColor: COLORS.bg }}>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-opacity-80 backdrop-blur-md" style={{ backgroundColor: COLORS.bg }}>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">About the Artist</h1>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Share2 size={24} />
        </button>
      </header>

      <main className="px-6 space-y-8">
        {/* Profile Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl p-8 flex flex-col items-center text-center space-y-4 shadow-2xl border border-white/5"
          style={{ backgroundColor: COLORS.card }}
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 p-1">
              <img 
                src="https://picsum.photos/seed/elena/200/200" 
                alt="Elena Vance" 
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-purple-600 rounded-full p-1 border-2 border-[#1a1425]">
              <BadgeCheck size={18} className="text-white fill-white/20" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Elena Vance</h2>
            <p className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: COLORS.textSecondary }}>
              Visual Storyteller
            </p>
            <div className="flex items-center justify-center text-sm space-x-1" style={{ color: COLORS.textMuted }}>
              <MapPin size={14} />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-2">
            {[Mail, Camera, LinkIcon].map((Icon, i) => (
              <button key={i} className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </motion.section>

        {/* My Vision Section */}
        <section className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 rounded-full bg-purple-600" />
            <h3 className="text-xl font-bold">My Vision</h3>
          </div>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I believe in capturing the fleeting moments that tell a deeper story. My work explores the intersection of light, shadow, and human emotion, aiming to create images that resonate on a personal level.
            </p>
            <p>
              Photography is not just about seeing; it's about feeling. Every shutter click is an attempt to freeze a feeling in time forever.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { label: 'Years Exp.', value: '8+' },
            { label: 'Projects', value: '124' },
            { label: 'Rating', value: '4.9' }
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-4 text-center space-y-1 border border-white/5" style={{ backgroundColor: COLORS.card }}>
              <div className="text-2xl font-bold" style={{ color: i === 2 ? COLORS.textSecondary : 'white' }}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Recent Exhibitions */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 rounded-full bg-purple-600" />
            <h3 className="text-xl font-bold">Recent Exhibitions</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                title: 'Shadows & Light', 
                location: 'NYC Modern Art Gallery', 
                date: 'Aug 2023',
                img: 'https://picsum.photos/seed/shadows/200/200'
              },
              { 
                title: 'Urban Solitude', 
                location: 'SF Design Center', 
                date: 'Jan 2023',
                img: 'https://picsum.photos/seed/urban/200/200'
              }
            ].map((ex, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                    <img src={ex.img} alt={ex.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold">{ex.title}</h4>
                    <p className="text-xs text-gray-500">{ex.location}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: COLORS.textSecondary }}>{ex.date}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#0a0510]/90 backdrop-blur-xl border-t border-white/5 px-6 flex items-center justify-between z-50">
        <NavItem icon={Home} label="Home" />
        <NavItem icon={Search} label="Explore" />
        
        <div className="relative -top-6">
          <div className="absolute -inset-4 bg-purple-600/30 blur-2xl rounded-full animate-pulse" />
          <button className="relative w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-2xl shadow-purple-600/50 border-4 border-[#0a0510] active:scale-95 transition-transform">
            <User size={28} className="text-white fill-white/10" />
          </button>
        </div>

        <NavItem icon={Heart} label="Saved" />
        <NavItem icon={User} label="Profile" active />
      </nav>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className="flex flex-col items-center space-y-1 group">
      <Icon size={22} className={`${active ? 'text-purple-500' : 'text-gray-500'} group-hover:text-white transition-colors`} />
      <span className="text-[10px] font-medium text-gray-500 group-hover:text-white transition-colors">{label}</span>
    </button>
  );
}
