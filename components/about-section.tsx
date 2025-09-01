interface AboutSectionProps {
  id?: string
}

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="py-20 section-black-deep scroll-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-gold mb-12">Το Γραφείο</h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-foreground/90 text-pretty">
              Το γραφείο μας παρέχει ολοκληρωμένες συμβολαιογραφικές υπηρεσίες με υψηλά στάνταρ ποιότητας, άμεση
              ανταπόκριση και απόλυτη εχεμύθεια. Κάθε υπόθεση αντιμετωπίζεται με μεθοδικότητα και σεβασμό στον χρόνο
              σας, με σαφή καθοδήγηση σε κάθε βήμα.
            </p>

            <p className="text-foreground/90 text-pretty">
              Προτεραιότητά μας είναι η σαφής ενημέρωση και η τήρηση χρονοδιαγραμμάτων, ώστε να νιώθετε ασφάλεια και να
              γνωρίζετε πάντα τι χρειάζεται, πότε και γιατί.
            </p>

            <p className="text-foreground/90 text-pretty">
              Η επικοινωνία μας χαρακτηρίζεται από διακριτικότητα και συνέπεια, εξασφαλίζοντας την απόλυτη
              εμπιστευτικότητα και την προστασία των συμφερόντων σας.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-gold to-golden opacity-60" />
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative max-w-2xl mx-auto">
              <img
                src="/images/about-fountain-pen.jpeg"
                alt="Fountain pen writing on legal documents with notary stamp"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
