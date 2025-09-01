import { Phone, Mail, MapPin } from "lucide-react"

interface ContactSectionProps {
  id?: string
}

export function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="py-20 bg-background scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8">Επικοινωνία</h2>

          <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
            Είμαστε στη διάθεσή σας για οποιαδήποτε ερώτηση ή συνάντηση. Επικοινωνήστε μαζί μας άμεσα.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+302541077350"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-background rounded-md text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              <span>25410 77350</span>
            </a>

            <a
              href="mailto:k.skoulariki@hotmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-transparent text-gold rounded-md text-lg font-medium bg-transparent hover:opacity-80 transition-opacity cursor-pointer"
              style={{ borderImage: "linear-gradient(135deg, #B8860B, #DAA520, #CD853F) 1" }}
            >
              <Mail className="h-5 w-5" />
              <span>k.skoulariki@hotmail.com</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Ελ. Βενιζέλου 72-76, Ξάνθη</span>
          </div>

          {/* TODO: Add office hours and availability information */}
          <div className="mt-6 text-sm text-muted-foreground">
            <p>Ώρες λειτουργίας: Δευτέρα - Παρασκευή, 9:00 - 15:30</p>
            <p className="mt-1">Για επείγουσες περιπτώσεις, επικοινωνήστε τηλεφωνικά</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">Τοποθεσία Γραφείου</h3>
            <p className="text-muted-foreground">Βρείτε εύκολα το γραφείό μας στο κέντρο της Ξάνθης</p>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.789737540509!2d24.883065577248985!3d41.13911581135642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ac2dce6894f9c9%3A0x1e3877b86ed193d9!2zzqPOus6_z4XOu86xz4HOr869zq7Ous63IM6RzrnOus6xz4TOtc-Bzq_Ovc63!5e0!3m2!1sen!2sgr!4v1756651048446!5m2!1sen!2sgr"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[400px]"
            />
          </div>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>Διαθέσιμος χώρος στάθμευσης στην περιοχή</p>
          </div>
        </div>
      </div>
    </section>
  )
}
