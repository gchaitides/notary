"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 120 // Account for header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-gold/20" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Πήγαινε στην αρχή της σελίδας"
          >
            <Image
              src="/images/logo.png"
              alt="Κατερίνα Σκουλαρίκη - Συμβολαιογράφος Ξάνθης"
              width={360}
              height={96}
              className="h-16 md:h-24 w-auto"
              priority
            />
          </button>

          <div className="flex md:hidden flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <a
                href="tel:+302541077350"
                className="flex items-center gap-1 px-2 py-1 rounded-md border bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
              >
                <Phone className="h-3 w-3" />
                <span className="font-medium">25410 77350</span>
              </a>
              <a
                href="mailto:k.skoulariki@hotmail.com"
                className="flex items-center gap-1 px-2 py-1 rounded-md border bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
              >
                <Mail className="h-3 w-3" />
                <span className="font-medium">Email</span>
              </a>
            </div>
            <a
              href="https://maps.app.goo.gl/MEBh8SpSu7igX62e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-md border bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
            >
              <MapPin className="h-2.5 w-2.5" />
              <span className="font-medium text-xs">Ελ. Βενιζέλου 72-76, Ξάνθη</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Το Γραφείο
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Οι Υπηρεσίες μας
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Επικοινωνία
            </button>
          </nav>

          {/* Desktop Contact Bar */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <a
              href="https://maps.app.goo.gl/MEBh8SpSu7igX62e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-md border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
            >
              <MapPin className="h-3 w-3" />
              <span className="font-medium">Ελ. Βενιζέλου 72-76, Ξάνθη</span>
            </a>
            <a
              href="tel:+302541077350"
              className="flex items-center gap-1 px-2 py-1 rounded-md border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
            >
              <Phone className="h-3 w-3" />
              <span className="font-medium">25410 77350</span>
            </a>
            <a
              href="mailto:k.skoulariki@hotmail.com"
              className="flex items-center gap-1 px-2 py-1 rounded-md border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer text-xs"
            >
              <Mail className="h-3 w-3" />
              <span className="font-medium">k.skoulariki@hotmail.com</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/MEBh8SpSu7igX62e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-2xl border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer rounded-md"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Ελ. Βενιζέλου 72-76, Ξάνθη</span>
            </a>
            <a
              href="tel:+302541077350"
              className="flex items-center gap-2 px-3 py-2 rounded-2xl border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer rounded-md"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">25410 77350</span>
            </a>
            <a
              href="mailto:k.skoulariki@hotmail.com"
              className="flex items-center gap-2 px-3 py-2 rounded-2xl border-2 bg-background/50 backdrop-blur-sm text-gold hover:opacity-80 transition-opacity cursor-pointer rounded-md"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">k.skoulariki@hotmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
