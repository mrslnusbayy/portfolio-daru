import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allDesigns = [
  // Social Media
  { id: 1, title: 'Feed Instagram PPMC',     category: 'Social Media', image: '/design/social-media/feed-ppmc.jpg',          tags: ['Instagram', 'Branding'] },
  { id: 2, title: 'Feed Instagram BEM FST',  category: 'Social Media', image: '/design/social-media/feed-bem-fst.jpg',         tags: ['Instagram', 'Organisasi'] },
  // Flyer
  { id: 3, title: 'Flyer Tech Trip Bandung', category: 'Flyer',        image: '/design/print/flyer-tech-trip.jpg',      tags: ['Flyer', 'Event'] },
  { id: 4, title: 'Poster Ghost House',      category: 'Flyer',        image: '/design/print/poster-ghost-house.jpg',   tags: ['Poster', 'Event'] },
  { id: 5, title: 'Flyer Oprec IUMC',        category: 'Flyer',        image: '/design/print/flyer-oprec-iumc.jpg',     tags: ['Flyer', 'Rekrutmen'] },
  { id: 6, title: 'Flyer Info Wisuda',       category: 'Flyer',        image: '/design/print/flyer_info_wisuda.jpg',    tags: ['Flyer', 'Informasi'] },
  { id: 7, title: 'Poster Cyberbullying',    category: 'Flyer',        image: '/design/print/poster-cyberbullying.jpg', tags: ['Poster', 'Kampanye'] },
  { id: 8, title: 'Flyer Oprec PPMC',        category: 'Flyer',        image: '/design/print/flyer-oprec-ppmc.jpg',     tags: ['Flyer', 'Rekrutmen'] },
  // UI/UX
  { id: 9, title: 'UI Website Pempek Umi',   category: 'UI/UX',        image: '/design/uiux/ui-pempek-umi.jpg',         tags: ['Figma', 'Web Design'] },
  { id: 10,title: 'UI Website Garden Care',  category: 'UI/UX',        image: '/design/uiux/ui-garden-care.jpg',        tags: ['Figma', 'App Design'] },
];

const categories = ['Semua', 'Social Media', 'Flyer', 'UI/UX'];

const categoryColors = {
  'Social Media': 'bg-pink-100 text-pink-600',
  'Flyer':        'bg-amber-100 text-amber-600',
  'UI/UX':        'bg-indigo-100 text-indigo-600',
};

const DesignWork = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'Semua'
    ? allDesigns
    : allDesigns.filter(d => d.category === activeFilter);

  return (
    <section id="design" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Karya Desain & Kreatif.
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-xl">
            Koleksi karya desain grafis, visual media sosial, dan prototipe UI/UX yang pernah saya buat.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="break-inside-avoid group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500"
                onClick={() => setLightbox(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
                      <ZoomIn size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-800 text-base leading-snug">{item.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-400 font-medium bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[75vh] object-contain bg-slate-50"
              />
              <div className="px-8 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xl">{lightbox.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block ${categoryColors[lightbox.category]}`}>
                    {lightbox.category}
                  </span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignWork;
