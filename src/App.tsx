/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Instagram, Facebook, Twitter, ChevronRight, Star } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Steamed Chicken",
    description: "Minced chicken, fresh herbs, ginger, and garlic wrapped in a delicate dough.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "Spicy Pan-Fried Pork",
    description: "Juicy pork momos pan-fried to a crisp bottom, tossed in our signature chili glaze.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Vegetable Jhol Momo",
    description: "Steamed vegetable momos served submerged in a tangy, spicy sesame and tomato broth.",
    price: "$8.49",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: 4,
    name: "Chili Paneer Fried",
    description: "Crispy fried momos stuffed with spiced paneer, wok-tossed with bell peppers and onions.",
    price: "$10.49",
    image: "https://images.unsplash.com/photo-1626804475297-41609ea0eb49?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Beef & Scallion",
    description: "Rich beef filling with fresh scallions, served with a side of clear bone broth.",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Sweet Red Bean",
    description: "A dessert momo filled with sweet red bean paste, lightly dusted with powdered sugar.",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-momo-cream selection:bg-momo-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-2xl font-bold tracking-wider uppercase"
        >
          Momo Haven
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase"
        >
          <a href="#about" className="hover:text-momo-orange transition-colors">Story</a>
          <a href="#menu" className="hover:text-momo-orange transition-colors">Menu</a>
          <a href="#visit" className="hover:text-momo-orange transition-colors">Visit</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-momo-dark">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop" 
            alt="Steaming Momos" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-momo-dark via-momo-dark/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-momo-orange font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-6 block">
              Authentic Himalayan Taste
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none mb-8">
              Folded <br />
              <span className="italic font-light text-momo-cream/90">with Love</span>
            </h1>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-momo-red text-white px-8 py-4 rounded-full font-sans tracking-widest uppercase text-sm hover:bg-momo-orange transition-colors flex items-center mx-auto gap-2"
            >
              Explore Menu <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-momo-dark mb-6 leading-tight">
              A tradition passed down through <span className="italic text-momo-red">generations.</span>
            </h2>
            <p className="text-momo-dark/70 font-sans text-lg leading-relaxed mb-8">
              At Momo Haven, we believe that the perfect dumpling is an art form. Our wrappers are hand-rolled daily, and our fillings are crafted from locally sourced, fresh ingredients using recipes that have traveled across the Himalayas to your plate.
            </p>
            <div className="flex gap-8">
              <div>
                <h4 className="font-serif text-3xl text-momo-red mb-2">100%</h4>
                <p className="text-xs uppercase tracking-widest text-momo-dark/60 font-semibold">Handmade Daily</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-momo-red mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest text-momo-dark/60 font-semibold">Secret Spices</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing momos" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-full shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=200&auto=format&fit=crop" 
                alt="Spices" 
                className="w-32 h-32 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-momo-dark text-momo-cream px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-momo-orange font-sans tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Signatures
            </span>
            <h2 className="text-5xl md:text-7xl font-serif">The Menu</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {MENU_ITEMS.map((item) => (
              <motion.div 
                key={item.id} 
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-momo-red text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif group-hover:text-momo-orange transition-colors">{item.name}</h3>
                  <span className="text-xl font-serif text-momo-orange">{item.price}</span>
                </div>
                <p className="text-momo-cream/60 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Banner */}
      <section className="py-32 px-6 bg-momo-red text-white text-center">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="fill-momo-orange text-momo-orange" size={24} />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
            "The best momos I've had outside of Kathmandu. The jhol broth is absolutely life-changing."
          </h2>
          <p className="font-sans uppercase tracking-widest text-sm font-semibold">
            — The Food Chronicle
          </p>
        </motion.div>
      </section>

      {/* Footer / Visit Us */}
      <footer id="visit" className="bg-momo-cream pt-24 pb-12 px-6 border-t border-momo-dark/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif text-momo-dark mb-6">Momo Haven</h2>
            <p className="text-momo-dark/70 max-w-md mb-8">
              Bringing the authentic taste of Himalayan street food to your neighborhood. Handcrafted daily with love and spice.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-momo-dark/20 flex items-center justify-center hover:bg-momo-red hover:text-white hover:border-momo-red transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-momo-dark/20 flex items-center justify-center hover:bg-momo-red hover:text-white hover:border-momo-red transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-momo-dark/20 flex items-center justify-center hover:bg-momo-red hover:text-white hover:border-momo-red transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-momo-dark">Visit Us</h4>
            <ul className="space-y-4 text-momo-dark/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-momo-red shrink-0 mt-1" />
                <span>123 Culinary Avenue<br />Food District, FD 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-momo-red shrink-0" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-6 text-momo-dark">Hours</h4>
            <ul className="space-y-4 text-momo-dark/70">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-momo-red shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-momo-dark">Mon - Thu</p>
                  <p>11:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 shrink-0" />
                <div>
                  <p className="font-medium text-momo-dark">Fri - Sun</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-momo-dark/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-momo-dark/50 font-sans">
          <p>© {new Date().getFullYear()} Momo Haven. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-momo-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-momo-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
