'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Search, Linkedin, Instagram } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'investments', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Investments', href: '#investments' },
    { name: 'Contact', href: '#contact' },
  ]

  const investments = [
    { 
      name: "Belviera", 
      logo: "/images/logos/belviera.png",
      url: "https://www.belviera.com"
    },
    { 
      name: "Alurea Studio", 
      logo: "/images/logos/alurea.png",
      url: "https://www.alurea-studio.com"
    },
    { 
      name: "LM Gestion", 
      logo: "/images/logos/lm-gestion.png",
      url: "https://www.lm-gestion.com"
    },
    { 
      name: "Pixel Labs", 
      logo: "/images/logos/pixel-labs.png",
      url: "https://www.pixel-labs.com"
    },
    { 
      name: "Hashpath Consulting", 
      logo: "/images/logos/hashpath.png",
      url: "https://www.hashpath-consulting.com"
    },
    {
      name: "Shieldify",
      logo: "/images/logos/shieldify.png",
      url: "https://www.shieldify.com"
    },
    {
      name: "Cyrenix",
      logo: "/images/logos/cyrenix.png",
      url: "https://www.cyrenix.com"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX }}
      />
      
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="Denis Jesus Palma Abanto"
	    title="Denis Jesus Palma Abanto"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.name.toLowerCase())}
                  className={`text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 ${
                    activeSection === item.name.toLowerCase() ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-24 space-y-24">
        {/* Hero Section */}
        <section id="home" className="pt-16">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-100 dark:to-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Denis Jesus Palma Abanto
              </motion.h1>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                  Real Estate Investor in Peru
                </p>
                <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                  <MapPin className="h-5 w-5" />
                  <span>Peru</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-md">
                  Denis Palma Abanto is a retired Software Engineer now dedicated to Real Estate development in Peru.
                </p>
              </div>
              <Button 
                className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/profile.png"
                alt="Denis Jesus Palma Abanto"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Search className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <Image
                    src="/images/profile.png"
                    alt="Denis Jesus Palma Abanto"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {['Professional Background', 'Real Estate Focus', 'Investment Strategy'].map((title, index) => (
              <motion.div key={title} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {title === 'Professional Background' && 
                        'As a retired software engineer with a robust background in finance, I bring analytical expertise and strategic planning skills to my current focus on real estate development. My deep experience in both fields provides a solid foundation for identifying and capitalizing on valuable investment opportunities.'}
                      {title === 'Real Estate Focus' && 
                        'Now dedicated to real estate development in Peru, particularly in the vibrant regions of Cusco and the southern territories, I concentrate on projects that leverage the area’s growth potential. My focus is on selecting high-value properties and sustainable development opportunities that contribute positively to local communities.'}
                      {title === 'Investment Strategy' && 
                        'My approach centers on long-term value and sustainable growth, with a diversified portfolio strategy that balances risk and maximizes returns. Driven by community impact and regional growth, I aim to enhance the quality and appeal of Peru\'s emerging markets through thoughtful and strategic development.'}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Investments Section */}
        <section id="investments" className="pt-16">
          <h2 className="text-3xl font-bold mb-8">Investment Portfolio</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {investments.map((company, index) => (
              <motion.div key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
		whileHover={{ scale: 1.05 }}
              >
                <Link 
                  href={company.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6 flex items-center justify-center aspect-square">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={200}
                        height={200}
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
              Do you have any interesting real estate investment opportunities in Peru? 
              Connect with me:
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { 
                  icon: Linkedin, 
                  href: "https://www.linkedin.com/in/denis-jesus-palma-abanto-512417336/", 
                  label: "LinkedIn",
                  ariaLabel: "Connect with Denis Jesus Palma Abanto on LinkedIn"
                },
                { 
                  icon: Mail, 
                  href: "mailto:me@denis.pe", 
                  label: "Email",
                  ariaLabel: "Email Denis Jesus Palma Abanto"
                },
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/denisj.palma/", 
                  label: "Instagram",
                  ariaLabel: "Follow Denis Jesus Palma Abanto on Instagram"
                },
              ].map(({ icon: Icon, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={ariaLabel}
                >
                  <Icon className="h-8 w-8" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 text-center text-gray-500 dark:text-gray-400">
        <div className="flex flex-col items-center space-y-4">
          <p>© {new Date().getFullYear()} Denis Jesus Palma Abanto. All rights reserved.</p>
          <p className="text-sm">
            Real Estate Investor & Portfolio Manager based in Peru
          </p>
        </div>
      </footer>
    </div>
  )
}
