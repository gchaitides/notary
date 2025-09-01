"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/textured-bg.jpeg"
          alt=""
          fill
          className="object-cover md:object-center object-top"
          style={{
            objectPosition: "center top",
          }}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 md:bg-black/10" />

      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)] md:min-h-[80vh]">
          {/* Left Image */}
          <div className="relative order-first lg:order-first">
            <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gold/20 max-h-64 md:max-h-80 lg:max-h-96 xl:max-h-[28rem] 2xl:max-h-[32rem]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Quill pen and inkwell - Graphic Design Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10 text-center lg:text-right pt-16 md:pt-0">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl lg:text-7xl font-light text-foreground mb-4 md:mb-6 text-balance leading-tight">
              Κατερίνα Σκουλαρίκη
              <span className="block font-semibold mt-1 md:mt-2 tracking-tight bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#CD853F] bg-clip-text text-transparent">
                Συμβολαιογράφος Ξάνθης
              </span>
            </h1>

            <p className="text-base md:text-lg xl:text-xl lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl text-pretty leading-relaxed lg:ml-auto">
              Αξιόπιστες συμβολαιογραφικές υπηρεσίες με συνέπεια και διακριτικότητα.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 xl:gap-5 justify-center lg:justify-end items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#CD853F] text-background hover:from-[#8B7355] hover:via-[#B8860B] hover:to-[#A0522D] transition-all duration-300 px-6 md:px-8 xl:px-10 py-2 md:py-3 xl:py-4 text-base md:text-lg xl:text-xl shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Επικοινωνήστε μαζί μας
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-transparent bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#CD853F] bg-clip-border text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#B8860B] hover:via-[#DAA520] hover:to-[#CD853F] hover:text-background transition-all duration-300 px-6 md:px-8 xl:px-10 py-2 md:py-3 xl:py-4 text-base md:text-lg xl:text-xl shadow-md hover:shadow-lg hover:scale-105 w-full sm:w-auto"
                style={{
                  backgroundImage: "linear-gradient(to right, #B8860B, #DAA520, #CD853F)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  borderImage: "linear-gradient(to right, #B8860B, #DAA520, #CD853F) 1",
                }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Οι υπηρεσίες μας
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
